// model for Course table

const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');


class Course extends Model {};
Course.init({
    Department: {
        type: "VARCHAR(4)",
        allowNull: false
    },
    CourseNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CourseName: {
        type: "VARCHAR(50)",
        allowNull: false
    },
    CourseDescription: {
        type: "VARCHAR(250)",
    },
    CourseInstructor: {
        type: "VARCHAR(50)",
        allowNull: false
    }
}, {
  sequelize,
  modelName: 'Course',
  tableName: 'Courses',
  timestamps: false
});

module.exports = Course;

