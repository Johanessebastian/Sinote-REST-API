const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const authController = {
  register: async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
      await User.createUser(name, email, password, role);
      res.status(201).send('User registered');
    } catch (err) {
      res.status(500).send('Error registering user');
    }
  },
  login: async (req, res) => {
    const { nameOrEmail, password } = req.body;
    try {
      const user = await User.findUserByEmail(nameOrEmail) || await User.findUserByName(nameOrEmail);
      if (!user || !(await bcrypt.compare(password, user.data().password))) {
        return res.status(401).send('Invalid credentials');
      }
      req.session.user = { id: user.id, role: user.data().role };
      res.status(200).send('Logged in');
    } catch (err) {
      res.status(500).send('Error logging in');
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send('Logged out');
  },
};

module.exports = authController;