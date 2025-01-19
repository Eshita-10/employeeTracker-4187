import Task from "../models/tasksModels.js";
import Employee from "../models/employeesModel.js";

// Productivity Insights: Graphs and Tables
export const getProductivityInsights = async (req, res) => {
  try {
    // Fetch all tasks with employee details (tasks are assigned to employees via 'assignedTo')
    const tasks = await Task.find().populate('assignedTo');

    // Generate the data for productivity visualization
    const productivityData = tasks.map(task => ({
      employeeId: task.assignedTo[0]._id, // Assuming a single employee per task
      employeeName: task.assignedTo[0].name,
      taskCategory: task.category,
      timeSpent: task.timeSpent || 0, // Assuming tasks have a `timeSpent` field to track time spent
      completed: task.completed,
      createdAt: task.createdAt, // Date the task was created
    }));

    // Group tasks by employee and calculate total time spent and completed tasks
    const employeeInsights = productivityData.reduce((acc, curr) => {
      if (!acc[curr.employeeId]) {
        acc[curr.employeeId] = {
          employeeName: curr.employeeName,
          totalTasks: 0,
          completedTasks: 0,
          totalTimeSpent: 0,
        };
      }
      acc[curr.employeeId].totalTasks += 1;
      if (curr.completed) acc[curr.employeeId].completedTasks += 1;
      acc[curr.employeeId].totalTimeSpent += curr.timeSpent;
      return acc;
    }, {});

    // Convert object to an array for better visualization
    const insightArray = Object.values(employeeInsights);

    res.status(200).json({ success: true, data: insightArray });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Team Performance Trends: Compare employees by task quality, quantity, completion time
export const getTeamPerformanceTrends = async (req, res) => {
  try {
    // Fetch all employees
    const employees = await Employee.find();
    // Fetch all tasks with employee details
    const tasks = await Task.find().populate('assignedTo');

    const performanceData = employees.map(employee => {
      // Filter tasks assigned to each employee
      const assignedTasks = tasks.filter(task => task.assignedTo.some(emp => emp._id.toString() === employee._id.toString()));

      // Calculate performance metrics for each employee
      const totalTasks = assignedTasks.length;
      const completedTasks = assignedTasks.filter(task => task.completed).length;
      const averageTime = totalTasks > 0
        ? assignedTasks.reduce((total, task) => total + (task.timeSpent || 0), 0) / totalTasks
        : 0;

      return {
        employeeId: employee._id,
        employeeName: employee.name,
        totalTasks,
        completedTasks,
        averageTime, // In hours or minutes
        performance: totalTasks > 10 ? 'High' : totalTasks < 5 ? 'Low' : 'Medium', // Categorize performance based on task count
      };
    });

    // Sort by performance (High -> Medium -> Low)
    const sortedPerformanceData = performanceData.sort((a, b) => {
      const performanceLevels = { High: 3, Medium: 2, Low: 1 };
      return performanceLevels[b.performance] - performanceLevels[a.performance];
    });

    res.status(200).json({ success: true, performanceData: sortedPerformanceData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Generate Automatic Weekly/Monthly Productivity Reports
export const generateReport = async (req, res) => {
  const { period } = req.query; // 'weekly' or 'monthly'

  try {
    const currentDate = new Date();
    let startDate;

    if (period === 'weekly') {
      startDate = new Date(currentDate.setDate(currentDate.getDate() - 7)); // Last 7 days
    } else if (period === 'monthly') {
      startDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1)); // Last 30 days
    }

    // Fetch tasks within the selected period (weekly or monthly)
    const tasks = await Task.find({ createdAt: { $gte: startDate } }).populate('assignedTo');

    const reportData = tasks.map(task => ({
      taskId: task.task_id,
      taskTitle: task.title,
      employeeName: task.assignedTo[0].name,  // Assuming a single employee per task
      taskCategory: task.category,
      timeSpent: task.timeSpent || 0, // Time spent on task (assumes `timeSpent` field exists)
      completed: task.completed,
      createdAt: task.createdAt, // Task creation date
    }));

    res.status(200).json({ success: true, reportData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
