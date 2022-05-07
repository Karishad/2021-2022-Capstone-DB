//Form validation for Create page

import * as yup from "yup";

export const schema = yup.object({
    Program: yup.string()
        .max(50, 'This field is required')
        .required('This field is required'),
    Required: yup.string()
        .max(50, 'This field is required')
        .required('This field is required'),                         
    CourseNumber: yup
        .number('Course number must be an integer')
        .integer('Course number must be an integer')
        .lessThan(10000, 'Course number must be an integer less than 10000')
        .moreThan(999, 'Course number must be an integer greater than 999')
        .required('This field is required'),
    Coordinator: yup.string()
        .max(100, 'Name must be 100 characters or less')
        .required('This field is required'),
    Prerequisites: yup.string()
        .max(250, 'Prerequisites must be 250 characters or less')
        .required('This field is required'),
    ContactHours: yup.string()
        .max(250, 'Contact hours must be 250 characters or less')
        .optional(),         
    CourseName: yup.string()
        .max(100, 'Course name must be 100 characters or less')
        .required('This field is required'),                       
    Book: yup.string()
        .max(250, 'Book(s) must be 250 characters or less')
        .optional(),
    CreditHours: yup.string()
        .max(50, 'Credit hours must be 50 characters or less')
        .required('This field is required'),         
    Topics: yup.string()
        .max(1000, 'Topics must be 1000 characters or less')
        .optional(),
    Outcome1: yup.string()
        .max(500, 'Outcome must be 500 characters or less')
        .required('This field is required'),   
    Outcome2: yup.string()
        .max(500, 'Outcome must be 500 characters or less')
        .optional(),      
    Outcome3: yup.string()
        .max(500, 'Outcome must be 500 characters or less')
        .optional(),     
    Outcome4: yup.string()
        .max(500, 'Outcome must be 500 characters or less')
        .optional(),    
    Outcome5: yup.string()
        .max(500, 'Outcome must be 500 characters or less')
        .optional(),      
    Outcome6: yup.string()
        .max(500, 'Outcome must be 500 characters or less')
        .optional(),  
    Outcome7: yup.string()
        .max(500, 'Outcome must be 500 characters or less')
        .optional(),
    Outcome8: yup.string()
        .max(500, 'Outcome must be 500 characters or less')
        .optional(),
    Outcome9: yup.string()
        .max(500, 'Outcome must be 500 characters or less')
        .optional(),
    CourseDescription: yup.string()
        .max(1000, 'Course description must be 1000 characters or less')
        .required('This field is required'),
    StudentOutcome1: yup.string()
        .max(500, 'Student outcome must be 500 characters or less')
        .required('This field is required'),
    StudentOutcome2: yup.string()
        .max(500, 'Student outcome must be 500 characters or less')
        .optional(),
    StudentOutcome3: yup.string()
        .max(500, 'Student outcome must be 500 characters or less')
        .optional(),
    StudentOutcome4: yup.string()
        .max(500, 'Student outcome must be 500 characters or less')
        .optional(),
    StudentOutcome5: yup.string()
        .max(500, 'Student outcome must be 500 characters or less')
        .optional(),
    StudentOutcome6: yup.string()
        .max(500, 'Student outcome must be 500 characters or less')
        .optional(),
    StudentOutcome7: yup.string()
        .max(500, 'Student outcome must be 500 characters or less')
        .optional(),
    StudentOutcome8: yup.string()
        .max(500, 'Student outcome must be 500 characters or less')
        .optional(),
    StudentOutcome9: yup.string()
        .max(500, 'Student outcome must be 500 characters or less')
        .optional(),
    StudentOutcomeConnection1: yup.string()
        .max(25, 'Student outcome connection must be 25 characters or less')
        .optional(),
    StudentOutcomeConnection2: yup.string()
        .max(25, 'Student outcome connection must be 25 characters or less')
        .optional(),
    StudentOutcomeConnection3: yup.string()
        .max(25, 'Student outcome connection must be 25 characters or less')
        .optional(),
    StudentOutcomeConnection4: yup.string()
        .max(25, 'Student outcome connection must be 25 characters or less')
        .optional(),
    StudentOutcomeConnection5: yup.string()
        .max(25, 'Student outcome connection must be 25 characters or less')
        .optional(),
    StudentOutcomeConnection6: yup.string()
        .max(25, 'Student outcome connection must be 25 characters or less')
        .optional(),
    StudentOutcomeConnection7: yup.string()
        .max(25, 'Student outcome connection must be 25 characters or less')
        .optional(),
    StudentOutcomeConnection8: yup.string()
        .max(25, 'Student outcome connection must be 25 characters or less')
        .optional(),
    StudentOutcomeConnection9: yup.string()
        .max(25, 'Student outcome connection must be 25 characters or less')
        .optional(),
    SoftwareUsed: yup.string()
        .max(250, 'Software used must be 250 characters or less')
        .optional(),
    RoomNumberForSoftware: yup.string()
        .max(250, 'Room number for software must be 250 characters or less')
        .optional(),
    LastUpdated: yup.string()
        .max(50, 'Semester last updated must be 50 characters or less')
        .optional(),                              
  });
