const Task = require('../models/taskModel');

const taskController = {
  createTask: async (req, res) => {
    const { name, description, deadline, assignedTo } = req.body;
    const taskData = { name, description, deadline, assignedTo, createdBy: req.session.user.id };
    try {
      await Task.createTask(taskData);
      res.status(201).send('Task created');
    } catch (err) {
      res.status(500).send('Error creating task');
    }
  },
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.getTasksByUser(req.session.user.id);
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).send('Error retrieving tasks');
    }
  },
  updateTask: async (req, res) => {
    const { taskId, updatedData } = req.body;
    try {
      await Task.updateTask(taskId, updatedData);
      res.status(200).send('Task updated');
    } catch (err) {
      res.status(500).send('Error updating task');
    }
  },
  deleteTask: async (req, res) => {
    const { taskId } = req.body;
    try {
      await Task.deleteTask(taskId);
      res.status(200).send('Task deleted');
    } catch (err) {
      res.status(500).send('Error deleting task');
    }
  },
};

module.exports = taskController;