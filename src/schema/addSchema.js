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
        .max(50, 'Name must be 50 characters or less')
        .required('This field is required'),
    Prerequisites: yup.string()
        .max(250, 'Prerequisites must be 250 characters or less')
        .required('This field is required'),
    ContactHours: yup.string()
        .max(250, 'Contact hours must be 250 characters or less')
        .required('This field is required'),         
    CourseName: yup.string()
        .max(50, 'Course name must be 50 characters or less')
        .required('This field is required'),                       
    Book: yup.string()
        .max(250, 'Book(s) must be 250 characters or less')
        .required('This field is required'),
    CreditHours: yup.string()
        .max(50, 'Credit hours must be 50 characters or less')
        .required('This field is required'),         
    Topics: yup.string()
        .max(500, 'Topics must be 500 characters or less')
        .required('This field is required'),
    //Outcome: yup.string().required(),
    //StudentOutcome: yup.string().required(),                          
    CourseDescription: yup.string()
        .max(500, 'Course description must be 500 characters or less')
        .required('This field is required'),
    SoftwareUsed: yup.string()
        .max(250, 'Software used must be 250 characters or less')
        .optional(),
    RoomNumberForSoftware: yup.string()
        .max(250, 'Room number for software must be 250 characters or less')
        .optional(),
    LastUpdated: yup.string()
        .max(50, 'Semester last updated must be 50 characters or less')
        .required('This field is required'),                              
  });
