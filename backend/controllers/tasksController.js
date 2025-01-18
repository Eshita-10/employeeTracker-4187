import Task from "../models/tasksModels.js";
export const createTask = async (req, res) => {
  try {
    const {task_id,title,description,priority,assignedBy,category,completed} = req.body;

    if (!task_id ||!title || !description || !priority || !assignedBy || !category || !completed) {
      return res.status(400).json({ success: false,message: "Please fill out all required fields",});
    }

    const task = await Task.create({task_id,title,description,priority,assignedBy,category,completed});
    return res.status(201).json({ success: true, message: "Task created successfully", task });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getByTaskId = async (req, res) => {
  try {
    const taskId = req.params.task_id;

    if (!taskId) {
      return res.status(400).json({ success: false, message: "Task ID is required" });
    }

    const task = await Task.findOne({ task_id: taskId });

    if (!task) {
      return res.status(404).json({ success: false, message: `No task found with Task ID: ${taskId}` });
    }

    return res.status(200).json({ success: true, task });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { title, description, priority, assignedBy, category, completed } = req.body;
    if (!title && !description && !priority && !assignedBy && !category && completed === undefined) {
      return res.status(400).json({ success: false, message: "Nothing to update" });
    }

    const taskId = req.params.task_id;
    if (!taskId) {
      return res.status(400).json({ success: false, message: "Task ID is missing" });
    }
    const updatedTask = await Task.findOneAndUpdate(
      { task_id: taskId },
      { $set: { title, description, priority, assignedBy, category, completed } },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ success: false, message: `No task found with Task ID: ${taskId}` });
    }
    return res.status(200).json({ success: true, message: "Task updated successfully", updatedTask });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.task_id;

    if (!taskId) {
      return res.status(400).json({ success: false, message: "Task ID is required" });
    }
    const deletedTask = await Task.findOneAndDelete({ task_id: taskId });
    if (!deletedTask) {
      return res.status(404).json({ success: false, message: `No task found with Task ID: ${taskId}` });
    }
    return res.status(200).json({ success: true, message: "Task deleted successfully", deletedTask });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const completedTask = async (req, res) => {
  try {
    const completedTasks = await Task.find({ completed: true });

    if (completedTasks.length === 0) {
      return res.status(404).json({ success: false, message: "No completed tasks found" });
    }

    return res.status(200).json({ success: true, completedTasks });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
  // res.send("completed Tasks cotroller")
};


