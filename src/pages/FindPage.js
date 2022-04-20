import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from '../axios';

import PDFFile from '../PDFfile';
import { PDFDownloadLink } from '@react-pdf/renderer';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import { Tab } from '@material-ui/core';


export default function FindPage() {

    //init react-hook-form; default all field values to empty strings to simplify api logic
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        defaultValues: {
            Program: "",
            Required: "",
            CourseNumber: "",
            Coordinator: "",
            CourseName: ""
        }
    });

    //states for dynamically resubmitting query after a delete
    const [courses, setcourses] = useState([]);     //search results
    const [change, setchange] = useState(false);    //boolean for tracking delete
    const [values, setvalues] = useState({          //grabs field values after first submission to use for resubmission
        Program: "",
        Required: "",
        CourseNumber: "",
        Coordinator: "",
        CourseName: ""
    });
    let initcourses = [] //array to initially hold res.data

    //rerender page only when course is deleted; resubmit query
    useEffect( () => {
        //if statement to prevent rerender after navigating to Find
        if(values.Program !== "" || values.Required !== "" || values.CourseNumber !== "" || values.Coordinator !=="" || values.CourseName !== "") {
            onSubmit(values);
            setchange(false);
        }
    }, [change]);  

    //request to find courses after submission
    const onSubmit = async (req) => {
        //console.log(req);
        try {
            const res = await axios.post('/findcourse', req);
            console.log(res.data);
            setvalues(getValues());     //save field values for dynamic resubmission
            /* IDK why but if I straight up do setcourses(res.data) it won't work. I have to pass in res.data to another array variable (initcourses=res.data).THEN 
            do setcourses(initcourses) for it to work.*/
            initcourses = res.data
            setcourses(initcourses)     //save courses
        } catch (err) {
            console.error(err);
        };
    };

    //request to delete course
    const deleteCourse = async (id) => {
        //console.log(id);
        try {
            setchange(true);
            const res = await axios.post('/deletecourse', id);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="Findpage-form">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="Form-row1-col1">
                    <label htmlFor="Program">Program </label>
                    <select name="Program" id="Program" {...register('Program')}>
                        <option value="" disabled>Select a program...</option>
                        <option value="Computer Science" id="CS option">Computer Science</option>
                        <option value="Computer Engineering" id="CE option">Computer Engineering</option>
                        <option value="Information Technology" id="IT option">Information Technology</option>
                        <option value="Cybersecurity" id="CICS option">Cybersecurity</option>
                    </select>
                    <small className="text-danger">
                        {errors?.Program && errors.Program.message}
                    </small>
                </div>
                <div className="Form-row2-col1">
                    <label htmlFor="Required">Program Requirement</label>
                    <select name="Required" id="Required" defaultValue="" {...register('Required')}>
                        <option value="" disabled>Select requirement</option>l
                        <option value="Elective" id="Elective option">Elective</option>
                        <option value="Selected Elective" id="Selected elective option">Selected Elective</option>
                        <option value="Required" id="Required option">Required</option>
                    </select>
                    <small className="text-danger">
                        {errors?.Required && errors.Required.message}
                    </small>
                </div>
                <div className="Form-row3-col1">
                    <label htmlFor="CourseNumber">Course #</label>
                    <input type="text" name="CourseNumber" id="CourseNumber" {...register('CourseNumber')}></input>
                    <small className="text-danger">
                        {errors?.CourseNumber && errors.CourseNumber.message}
                    </small>
                </div>
                <div className="Form-row4-col1">
                    <label htmlFor="Coordinator">Coordinator </label>
                    <input type="text" name="Coordinator" id="Coordinator" {...register('Coordinator')}></input>
                    <small className="text-danger">
                        {errors?.Coordinator && errors.Coordinator.message}
                    </small>
                </div>
                <div className="Form-row5-col1">
                    <label htmlFor="CourseName">Course Name </label>
                    <input type="text" name="CourseName" id="CourseName" {...register('CourseName')}></input>
                    <small className="text-danger">
                        {errors?.CourseName && errors.CourseName.message}
                    </small>
                </div>
                <button type="submit">Query</button>
            </form>

            <div className="Tablewrap">
                <TableContainer className="Table"
                    component={Paper}
                    sx={{
                        //border: "1px solid",
                        //marginRight:'auto',
                        //marginLeft:'auto',
                        //width:"100%",
                        width: "max-context"
                        //overflow:"auto"
                    }}
                >
                    <Table sx={{ minWidth: 1500 }} >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Course #</TableCell>
                                <TableCell align="left" sx={{ width: 300 }}>Course Name</TableCell>
                                <TableCell align="left">Program</TableCell>
                                <TableCell align="left">Coordinator</TableCell>
                                <TableCell align="left">Required</TableCell>
                                <TableCell align="left">Prerequisites</TableCell>
                                <TableCell align="left">Course Description</TableCell>
                                <TableCell align="left">Credit Hours</TableCell>
                                <TableCell align="left">Contact Hours</TableCell>
                                <TableCell align="left">Book</TableCell>
                                <TableCell align="left">Topics</TableCell>
                                <TableCell align="left">LastUpdated</TableCell>
                                <TableCell align="left">Room #</TableCell>
                                <TableCell align="left">Software Used</TableCell>
                                <TableCell align="left">Outcome 1</TableCell>
                                <TableCell align="left">Outcome 2</TableCell>
                                <TableCell align="left">Outcome 3</TableCell>
                                <TableCell align="left">Outcome 4</TableCell>
                                <TableCell align="left">Outcome 5</TableCell>
                                <TableCell align="left">Outcome 6</TableCell>
                                <TableCell align="left">Outcome 7</TableCell>
                                <TableCell align="left">Outcome 8</TableCell>
                                <TableCell align="left">Outcome 9</TableCell>
                                <TableCell align="left">Student 1</TableCell>
                                <TableCell align="left">Student 2</TableCell>
                                <TableCell align="left">Student 3</TableCell>
                                <TableCell align="left">Student 4</TableCell>
                                <TableCell align="left">Student 5</TableCell>
                                <TableCell align="left">Student 6</TableCell>
                                <TableCell align="left">Student 7</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courses.map(course => (
                                <TableRow key={course.id}>
                                    <TableCell align="left">{course.id}</TableCell>
                                    <TableCell align="left">{course.CourseNumber}</TableCell>
                                    <TableCell align="left">{course.CourseName}</TableCell>
                                    <TableCell align="left">{course.Program}</TableCell>
                                    <TableCell align="left">{course.Coordinator}</TableCell>
                                    <TableCell align="left">{course.Required}</TableCell>
                                    <TableCell align="left">{course.Prerequisites}</TableCell>
                                    <TableCell align="left">{course.CourseDescription}</TableCell>
                                    <TableCell align="left">{course.CreditHours}</TableCell>
                                    <TableCell align="left">{course.ContactHours}</TableCell>
                                    <TableCell align="left">{course.Book}</TableCell>
                                    <TableCell align="left">{course.Topics}</TableCell>
                                    <TableCell align="left">{course.LastUpdated}</TableCell>
                                    <TableCell align="left">{course.RoomNumberForSoftware}</TableCell>
                                    <TableCell align="left">{course.SoftwareUsed}</TableCell>
                                    <TableCell align="left">{course.Outcome1}</TableCell>
                                    <TableCell align="left">{course.Outcome2}</TableCell>
                                    <TableCell align="left">{course.Outcome3}</TableCell>
                                    <TableCell align="left">{course.Outcome4}</TableCell>
                                    <TableCell align="left">{course.Outcome5}</TableCell>
                                    <TableCell align="left">{course.Outcome6}</TableCell>
                                    <TableCell align="left">{course.Outcome7}</TableCell>
                                    <TableCell align="left">{course.Outcome8}</TableCell>
                                    <TableCell align="left">{course.Outcome9}</TableCell>
                                    <TableCell align="left">{course.StudentOutcomeConnection1}</TableCell>
                                    <TableCell align="left">{course.StudentOutcomeConnection2}</TableCell>
                                    <TableCell align="left">{course.StudentOutcomeConnection3}</TableCell>
                                    <TableCell align="left">{course.StudentOutcomeConnection4}</TableCell>
                                    <TableCell align="left">{course.StudentOutcomeConnection5}</TableCell>
                                    <TableCell align="left">{course.StudentOutcomeConnection6}</TableCell>
                                    <TableCell align="left">{course.StudentOutcomeConnection7}</TableCell>
                                    <TableCell><PDFDownloadLink document={<PDFFile id={course.id} CoourseNumber={course.CourseNumber} CourseName={course.CourseName} Program={course.Program} Coordinator={course.Coordinator}
                                        Required={course.Required} Prerequisites={course.Prerequisites} CourseDescription={course.CourseDescription} CreditHours={course.CreditHours} ContactHours={course.ContactHours}
                                        Book={course.Book} Topics={course.Topics} LastUpdated={course.LastUpdated} RoomNumberForSoftware={course.RoomNumberForSoftware} SoftwareUsed={course.SoftwareUsed}
                                        Outcome1={course.Outcome1} Outcome2={course.Outcome2} Outcome3={course.Outcome3} Outcome4={course.Outcome4} Outcome5={course.Outcome5} Outcome6={course.Outcome6} Outcome7={course.Outcome7}
                                        Outcome8={course.Outcome8} Outcome9={course.Outcome9} Student1={course.StudentOutcomeConnection1} Student2={course.StudentOutcomeConnection2} Student3={course.StudentOutcomeConnection3}
                                        Student4={course.StudentOutcomeConnection4} Student5={course.StudentOutcomeConnection5} Student6={course.StudentOutcomeConnection6} Student7={course.StudentOutcomeConnection7}
                                    />} fileName="PDF">
                                        {({ loading }) => (loading ? <button>Loading PDF...</button> : <button>Download PDF</button>)}
                                    </PDFDownloadLink><button onClick={() => {deleteCourse({id:course.id})}}>Delete</button></TableCell>
                                </TableRow>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}
/*
export default function FindPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            Program: "",
            RequiredFor: "",
            CourseNumber: "",
            Coordinator: "",
            CourseName: ""
        }
    });

    const onSubmit = async (req) => {
        console.log(req);
        try {
            const res = await axios.post('/findcourse', req);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        };
        reset();
    };

    return (
        <div className="Findpage-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Form-row1-col1">
                    <label htmlFor="Program">Program </label>
                    <select name="Program" id="Program" {...register('Program')}>
                        <option value="" disabled>Select a program...</option>
                        <option value="CS" id="CS option">Computer Science</option>
                        <option value="CE" id="CE option">Computer Engineering</option>
                        <option value="IT" id="IT option">Information Technology</option>
                        <option value="CICS" id="CICS option">Cyber Security</option>
                    </select>
                    <small className="text-danger">
                        {errors?.Program && errors.Program.message}
                    </small>
                </div>
                <div className="Form-row2-col1">
                    <label htmlFor="RequiredFor">Program Requirement</label>
                    <select name="RequiredFor" id="RequiredFor" defaultValue="" {...register('RequiredFor')}>
                        <option value="" disabled>Select requirement</option>l
                        <option value="Elective" id="Elevtive option">Elective</option>
                        <option value="Required" id="Required option">Required</option>
                    </select>
                    <small className="text-danger">
                        {errors?.RequiredFor && errors.RequiredFor.message}
                    </small>
                </div>
                <div className="Form-row3-col1">
                    <label htmlFor="CourseNumber">Course #</label>
                    <input type="text" name="CourseNumber" id="CourseNumber" {...register('CourseNumber')}></input>
                    <small className="text-danger">
                        {errors?.CourseNumber && errors.CourseNumber.message}
                    </small>
                </div>
                <div className="Form-row4-col1">
                    <label htmlFor="Coordinator">Coordinator </label>
                    <input type="text" name="Coordinator" id="Coordinator" {...register('Coordinator')}></input>
                    <small className="text-danger">
                        {errors?.Coordinator && errors.Coordinator.message}
                    </small>
                </div>
                <div className="Form-row5-col1">
                    <label htmlFor="CourseName">Course Name </label>
                    <input type="text" name="CourseName" id="CourseName" {...register('CourseName')}></input>
                    <small className="text-danger">
                        {errors?.CourseName && errors.CourseName.message}
                    </small>
                </div>
                <button type="submit">Query</button>
            </form>
        </div>

    )
}
*/

/*
--HTML attribute "for" changes--
The "for" attribute in HTML is changed to "htmlFor" in React.js

--useForm "ref={register}" changes--
The "ref={register}" from "react-hook-form" has been changed to {...register('value-name')}
You can also add more properties {...register('value-name', {required: true}, etc)}

--My onSubmit function notes--
For my onSubmit function's parameter "data", "data" is an object of all the inputs. To show all data inputs
I printed to the console with "console.log(data)". To access a specific value you would type "data.input-name". An example 
would be "data.couseNumber". To print only the course number I would do "console.log(data.courseNumber)"

--REACT select WARNING--
In React if we use the html input select, we should create an attribute called "defaultValue" for our select
input. Then we should set our "defaultValue" attribute to a default option value we want. In this case, I wanted my default
value in the dropdown box to be nothing, so in my <options> in my <select> I created an <option> with value set to "" and disabled it. 
I then set the "defaultValue" attribute to "". This fixes the React warning about select.

--select Note--
I can optionally add in placeholder text for my select if I put text in between my default disabled option:
"<option value="" disable>...</option>"
*/