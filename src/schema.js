import * as yup from "yup";

export const schema = yup.object({
    Program: yup.string()
        .length(2, 'This field is required')
        .required('This field is required'),
    RequiredFor: yup.string()
        .length(2, 'This field is required')
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
    CreditHours: yup
        .number('Credit hours must be an integer')
        .integer('Credit hours must be an integer')
        .min(0, 'Credit hours must be an integer greater than or equal to 0')
        .max(4, 'Credit hours must be an integers less than or equal to 4')
        .required('This field is required'),         //max?
    Topics: yup.string()
        .max(250, 'Topics must be 250 characters or less')
        .required('This field is required'),
    //Outcome: yup.string().required(),
    //StudentOutcome: yup.string().required(),                          
    CourseDescription: yup.string()
        .max(250, 'Course description must be 250 characters or less')
        .required('This field is required'),
    SoftwareUsed: yup.string()
        .max(250, 'Software used must be 250 characters or less')
        .required('This field is required'),
    RoomNumberForSoftware: yup.string()
        .max(250, 'Room number for software must be 250 characters or less')
        .required('This field is required'),
    LastUpdated: yup
        .number('Semester last updated must be an integer')
        .integer('Semester last updated must be an integer')
        .required('This field is required'),                              //format?
  }).required();
