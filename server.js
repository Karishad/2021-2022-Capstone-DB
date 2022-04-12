const express = require('express');
const cors = require('cors');
const sequelize = require('./db/database');
const Course = require('./db/models/Course');
//const { Op } = require("sequelize");

const PORT = 4000;

// Connect database
sequelize.sync({ alter: true }).then(console.log('DB connecting...'));
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
  //Create new object with non-empty search parameters from req
  let searchterms = {};

  if(req.body.Program != '') {
    searchterms.Program = req.body.Program;
  }
  if(req.body.Required != '') {
    searchterms.Required = req.body.Required;
  }
  if(req.body.CourseNumber != '') {
    searchterms.CourseNumber = req.body.CourseNumber;
  }
  if(req.body.Coordinator != '') {
    searchterms.Coordinator = req.body.Coordinator;
  }
  if(req.body.CourseName != '') {
    searchterms.CourseName = req.body.CourseName;
  }
  
  console.log(searchterms);

  //Use searchterms object to find courses with all matching properties
  const courses = await Course.findAll({
    where: searchterms
  });
  res.send(courses);
});

//find course by id
app.post('/findcoursebyid', async (req, res) => {
  console.log(req.body);
  const course = await Course.findOne({ where: {id: req.body.id }});
  res.send(course);
});

//delete course by id
//Why POST for delete: 
//  axios did not play nice with DELETE while passing an object though Postman testing worked
//  one option is to put course id in the url as a parameter so DELETE can work
app.post('/deletecourse', async (req, res) => {
  console.log(req.body);
  const course = await Course.findOne({ where: {id: req.body.id }});
  if (course) {
    await Course.destroy({ where: { id: req.body.id }});
    res.send("Deleted course");
  }
  else {
    res.send(`Could not find course with id ${req.body.id}`);
  }
});
