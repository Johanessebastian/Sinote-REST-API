const db = require('../db/firebase');

const Task = {
  createTask: async (taskData) => {
    await db.collection('tasks').add(taskData);
  },
  getTasksByUser: async (userId) => {
    const snapshot = await db.collection('tasks').where('assignedTo', '==', userId).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  updateTask: async (taskId, updatedData) => {
    await db.collection('tasks').doc(taskId).update(updatedData);
  },
  deleteTask: async (taskId) => {
    await db.collection('tasks').doc(taskId).delete();
  },
};

module.exports = Task;