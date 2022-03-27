// model for Course table

const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');


/*
    General Table Schema
    - Program (Known as Group)
    - CourseNumber
    - CourseName
    - Coordinator
    - Book
    - Prerequisites
    - CreditHours
    - ContactHours
    - RequiredFor
    - Outcome -> Need to implement 
    - CourseDescription
    - CombinedWith -> Need to implement
    - StudentOutcome -> Need to implement
    - Topics
    - LastUpdated
    - RoomNumberForSoftware
    - SoftwareUsed
*/

class Course extends Model {};
Course.init({
    CourseNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CourseName: {
        type: "VARCHAR(50)",
        allowNull: false
    },
    Coordinator: {
        type: "VARCHAR(50)",
        allowNull: false
    },
    Book: {
        type: "VARCHAR(250)",
        allowNull: false
    },
    Prerequisites: {
        type: "VARCHAR(250)",
        allowNull: false
    },
    CreditHours: {
        type: "VARCHAR(50)",
        allowNull: false
    },
    ContactHours: {
        type: "VARCHAR(250)",
        allowNull: false
    },
    Required: {              
        type: "VARCHAR(50)",
        allowNull: false
    },
    // Need to implement
    //Outcome: {
        // Datatype for multiple Outcomes [1-9]

    //},
    CourseDescription: {
        type: "VARCHAR(500)",
        allowNull: false
    },
    // Need to implement
    //CombinedWith: {
        // Might not be necessary but keep here
    //},
    // Need to implement
    //StudentOutcome: {
        // Will be combined with Outcome attributes
    //},
    Topics: {
        type: "VARCHAR(500)",
        allowNull: false        
    },
    Program: {
        type: "VARCHAR(50)",
        allowNull: false
    },
    LastUpdated: {
        type: "VARCHAR(50)",
        allowNull: false        
    },
    RoomNumberForSoftware: {
        type: "VARCHAR(250)",
        allowNull: false        
    },
    SoftwareUsed: {
        type: "VARCHAR(250)",
        allowNull: false        
    }
}, {
  sequelize,
  modelName: 'Course',
  tableName: 'Courses',
  timestamps: false
});

module.exports = Course;

