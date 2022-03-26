const express = require('express');
const cors = require('cors');
const sequelize = require('./db/database');
const Course = require('./db/models/Course');
const { Op } = require("sequelize");

const PORT = 4000;

// Connect database
sequelize.sync({ alter: true }).then(console.log('DB connecting...'));
//sequelize.sync({ force: true }).then(console.log('DB connecting...'));
try {
  sequelize.authenticate().then(console.log('DB connected.'));
} catch (error) {
  console.error('Unable to connect to DB:', error);
};

// Start server
const app = express();
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({ origin: ['http://localhost:3000']}));

/* Routes */
//get all courses
app.get('/courses', async (req, res) => {
  const courses = await Course.findAll();
  res.send(courses);
});

//add a course
app.post('/courses', async (req, res) => {
  const newCourse = await Course.create(req.body);
  res.send(newCourse);
});

//find courses
app.post('/findcourse', async (req, res) => {
  console.log(req.body);
  const courses = await Course.findAll({
    where: {
      [Op.or]: [
        {Program: req.body.Program},
        {RequiredFor: req.body.RequiredFor},
        {CourseNumber: req.body.CourseNumber},
        {Coordinator: req.body.Coordinator},
        {CourseName: req.body.CourseName},
      ]
    }
  });
  res.send(courses);
});
