import Task from "../models/tasksModels.js";
import Employee from "../models/employeesModel.js";
export const getProductivityInsights = async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo');
    const productivityData = tasks.map(task => ({
      employeeId: task.assignedTo[0]._id, 
      employeeName: task.assignedTo[0].name,
      taskCategory: task.category,
      timeSpent: task.timeSpent || 0, 
      completed: task.completed,
      createdAt: task.createdAt, 
    }));
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
    const insightArray = Object.values(employeeInsights);

    res.status(200).json({ success: true, data: insightArray });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getTeamPerformanceTrends = async (req, res) => {
  try {
    const employees = await Employee.find();
    const tasks = await Task.find().populate('assignedTo');
    const performanceData = employees.map(employee => {
      const assignedTasks = tasks.filter(task => task.assignedTo.some(emp => emp._id.toString() === employee._id.toString()));

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
        averageTime,
        performance: totalTasks > 10 ? 'High' : totalTasks < 5 ? 'Low' : 'Medium', // 
      };
    });
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

export const generateReport = async (req, res) => {
  const { period } = req.query; 

  try {
    const currentDate = new Date();
    let startDate;

    if (period === 'weekly') {
      startDate = new Date(currentDate.setDate(currentDate.getDate() - 7)); 
    } else if (period === 'monthly') {
      startDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1)); 
    }
    const tasks = await Task.find({ createdAt: { $gte: startDate } }).populate('assignedTo');

    const reportData = tasks.map(task => ({
      taskId: task.task_id,
      taskTitle: task.title,
      employeeName: task.assignedTo[0].name, 
      taskCategory: task.category,
      timeSpent: task.timeSpent || 0, 
      completed: task.completed,
      createdAt: task.createdAt, 
    }));

    res.status(200).json({ success: true, reportData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
