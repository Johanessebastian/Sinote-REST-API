const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', authMiddleware.isAuthenticated, authMiddleware.isTeamLeader, taskController.createTask);
router.get('/', authMiddleware.isAuthenticated, taskController.getTasks);
router.put('/update', authMiddleware.isAuthenticated, taskController.updateTask);
router.delete('/delete', authMiddleware.isAuthenticated, taskController.deleteTask);

module.exports = router;