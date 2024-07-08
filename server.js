const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoute');
const taskRoutes = require('./routes/taskRoute');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true } // set to true if using https
}));

// Gunakan route authRoutes
app.use('/api/auth', authRoutes);

// Gunakan route taskRoutes
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

