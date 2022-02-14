const express = require('express');
const sequelize = require('./db/database');
const Course = require('./db/models/Course');
const { Op } = require("sequelize");

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
app.listen(4000, () => console.log('Server running on port 4000.'));

// Middleware
app.use(express.json());

/* Routes */
//get all courses
app.get('/courses', async (req, res) => {
  const courses = await Course.findAll();
  res.send(courses);
});

//add a course
app.post('/courses', async (req, res) => {
  await Course.create(req.body);
  res.send("added course");
});

//find courses given one attribute
app.get('/findcourse', async (req, res) => {
  const courses = await Course.findAll({
    where: {
      [Op.or]: [
        {Department: req.body.Department},
        {CourseNumber: req.body.CourseNumber},
        {CourseName: req.body.CourseName},
        {CourseInstructor: req.body.CourseInstructor}
      ]
    }
  });
  res.send(courses);
});

