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
app.use(cors({ origin: ['http://localhost:3000']}));

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
        {CourseDescription: req.body.CourseDescription},
        {CourseInstructor: req.body.CourseInstructor}
      ]
    }
  });
  res.send(courses);
});

