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
    - Outcome
    - CourseDescription
    - CombinedWith -> Not needed to implement
    - StudentOutcome
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
    Outcome1: {
        // Datatype for multiple Outcomes [1-9]
        type: "VARCHAR(500)",
        allowNull: false
    },
    Outcome2: {
        type: "VARCHAR(500)",
        allowNull: true
    },
    Outcome3: {
        type: "VARCHAR(500)",
        allowNull: true
    },Outcome4: {
        type: "VARCHAR(500)",
        allowNull: true
    },
    Outcome5: {
        type: "VARCHAR(500)",
        allowNull: true
    },
    Outcome6: {
        type: "VARCHAR(500)",
        allowNull: true
    },
    Outcome7: {
        type: "VARCHAR(500)",
        allowNull: true
    },
    Outcome8: {
        type: "VARCHAR(500)",
        allowNull: true
    },
    Outcome9: {
        type: "VARCHAR(500)",
        allowNull: true
    },
    CourseDescription: {
        type: "VARCHAR(500)",
        allowNull: false
    },
    // Need to implement
    //CombinedWith: {
        // Might not be necessary but keep here
    //},
    // Student outcome will correlate with the different outcomes
    // For example
    StudentOutcome1: {
        type:"VARCHAR(50)",
        allowNull: false
    },
    StudentOutcome2: {
        type:"VARCHAR(50)",
        allowNull: true
    },
    StudentOutcome3: {
        type:"VARCHAR(50)",
        allowNull: true
    },
    StudentOutcome4: {
        type:"VARCHAR(50)",
        allowNull: true
    },
    StudentOutcome5: {
        type:"VARCHAR(50)",
        allowNull: true
    },
    StudentOutcome6: {
        type:"VARCHAR(50)",
        allowNull: true
    },
    StudentOutcome7: {
        type:"VARCHAR(50)",
        allowNull: true
    },
    StudentOutcome8: {
        type:"VARCHAR(50)",
        allowNull: true
    },
    StudentOutcome9: {
        type:"VARCHAR(50)",
        allowNull: true
    },
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

