//Find Page: search for courses with exact match to query
//Query may include Program, Required, CourseNumber, CourseName, and Coordinator
//Table populated after receiving results: can download pdf, update, or delete course
//After a delete, query is resubmitted to reflect the current database
//Update directs to Update Page, and course's contents are passed into the new form

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from '../axios';

import PDFFile from '../pdf/PDFfile';
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

    const navigate = useNavigate();                 //to move to another page

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
    let initcourses = useRef([]); //array to initially hold res.data

    //rerender page only when course is deleted; resubmit query
    useEffect(() => {
        //if statement to prevent rerender after navigating to Find
        if (values.Program !== "" || values.Required !== "" || values.CourseNumber !== "" || values.Coordinator !== "" || values.CourseName !== "") {
            onSubmit(values);
            setchange(false);
        }
    }, [change]);


    //request to find courses after submission
    const onSubmit = async (req) => {
        try {
            const res = await axios.post('/findcourse', req);
            //console.log(res.data);
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
        try {
            setchange(true);
            await axios.post('/deletecourse', id);
        } catch (err) {
            console.log(err);
        }
    };

    //navigate to Update page with course data to prepopulate form
    const handleUpdate = (course) => {
        navigate(`/update/${course.id}`, {
            state: {
                course: course
            }
        });
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
                <TableContainer className='Table'
                    component={Paper}
                    sx={{
                        //border: "1px solid",
                        //marginRight:'auto',
                        //marginLeft:'auto',
                        //width:"100%",
                        //width:"max-context"
                        //overflow:"auto"
                        // sx={{ minWidth: 5000 }}
                        maxHeight: 875
                    }}
                >
                    <Table >
                        <TableHead>
                            <TableRow sx={{ borderBottom: "4px solid black" }}>
                                <TableCell align="center" sx={{ minWidth: 200, backgroundColor: 'black', color: 'white', borderRight: "4px solid black" }}> Function </TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 ,fontSize: 20, fontWeight: 600, borderRight: "4px solid black"}}>ID</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Course #</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Course Name</TableCell>
                                <TableCell align="center" sx={{ minWidth: 150 }}>Program</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Coordinator</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Required</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Prerequisites</TableCell>
                                <TableCell align="center" sx={{ minWidth: 420 }}>Course Description</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Credit Hours</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Contact Hours</TableCell>
                                <TableCell align="center" sx={{ minWidth: 420 }}>Book</TableCell>
                                <TableCell align="center" sx={{ minWidth: 420 }}>Topics</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>LastUpdated</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Room #</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Software Used</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Outcome 1</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Outcome 2</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Outcome 3</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Outcome 4</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Outcome 5</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Outcome 6</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Outcome 7</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Outcome 8</TableCell>
                                <TableCell align="center" sx={{ minWidth: 220 }}>Outcome 9</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Student 1</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Student 2</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Student 3</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Student 4</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Student 5</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Student 6</TableCell>
                                <TableCell align="center" sx={{ minWidth: 120 }}>Student 7</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courses.map(course => (
                                <TableRow key={course.id} sx={{ borderBottom: "2px solid black" }}>
                                    <TableCell sx={{ backgroundColor: '#006a31', borderRight: "4px solid black" }}><PDFDownloadLink document={<PDFFile id={course.id}
                                        CourseNumber={course.CourseNumber}
                                        CourseName={course.CourseName}
                                        Program={course.Program}
                                        Coordinator={course.Coordinator}
                                        Required={course.Required}
                                        Prerequisites={course.Prerequisites}
                                        CourseDescription={course.CourseDescription}
                                        CreditHours={course.CreditHours}
                                        ContactHours={course.ContactHours}
                                        Book={course.Book}
                                        Topics={course.Topics}
                                        LastUpdated={course.LastUpdated}
                                        RoomNumberForSoftware={course.RoomNumberForSoftware}
                                        SoftwareUsed={course.SoftwareUsed}
                                        Outcome1={course.Outcome1} Outcome2={course.Outcome2} Outcome3={course.Outcome3} Outcome4={course.Outcome4} Outcome5={course.Outcome5} Outcome6={course.Outcome6} Outcome7={course.Outcome7}
                                        Outcome8={course.Outcome8} Outcome9={course.Outcome9}
                                        Student1={course.StudentOutcomeConnection1} Student2={course.StudentOutcomeConnection2} Student3={course.StudentOutcomeConnection3}
                                        Student4={course.StudentOutcomeConnection4} Student5={course.StudentOutcomeConnection5} Student6={course.StudentOutcomeConnection6} Student7={course.StudentOutcomeConnection7}
                                        StudentOutcome1={course.StudentOutcome1} StudentOutcome2={course.StudentOutcome2} StudentOutcome3={course.StudentOutcome3}
                                        StudentOutcome4={course.StudentOutcome4} StudentOutcome5={course.StudentOutcome5} StudentOutcome6={course.StudentOutcome6} StudentOutcome7={course.StudentOutcome7}
                                    />} fileName={course.CourseNumber + " " + course.CourseName + " syllabus"}>
                                        {({ loading }) => (loading ? <button>Loading PDF...</button> : <button>Download PDF</button>)}</PDFDownloadLink>
                                        <button onClick={() => { handleUpdate(course) }}>Update</button>
                                        <button onClick={() => { deleteCourse({ id: course.id }) }}>Delete</button></TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 600, fontSize: 20, borderRight: "4px solid black" }}>{course.id}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 600, fontSize: 18 }}>{course.CourseNumber}</TableCell>
                                    <TableCell align="center" >{course.CourseName}</TableCell>
                                    <TableCell align="center">{course.Program}</TableCell>
                                    <TableCell align="center">{course.Coordinator}</TableCell>
                                    <TableCell align="center">{course.Required}</TableCell>
                                    <TableCell align="center">{course.Prerequisites}</TableCell>
                                    <TableCell align="center">{course.CourseDescription}</TableCell>
                                    <TableCell align="center">{course.CreditHours}</TableCell>
                                    <TableCell align="center">{course.ContactHours}</TableCell>
                                    <TableCell align="center">{course.Book}</TableCell>
                                    <TableCell align="center">{course.Topics}</TableCell>
                                    <TableCell align="center">{course.LastUpdated}</TableCell>
                                    <TableCell align="center">{course.RoomNumberForSoftware}</TableCell>
                                    <TableCell align="center">{course.SoftwareUsed}</TableCell>
                                    <TableCell align="center">{course.Outcome1}</TableCell>
                                    <TableCell align="center">{course.Outcome2}</TableCell>
                                    <TableCell align="center">{course.Outcome3}</TableCell>
                                    <TableCell align="center">{course.Outcome4}</TableCell>
                                    <TableCell align="center">{course.Outcome5}</TableCell>
                                    <TableCell align="center">{course.Outcome6}</TableCell>
                                    <TableCell align="center">{course.Outcome7}</TableCell>
                                    <TableCell align="center">{course.Outcome8}</TableCell>
                                    <TableCell align="center">{course.Outcome9}</TableCell>
                                    <TableCell align="center">{course.StudentOutcomeConnection1}</TableCell>
                                    <TableCell align="center">{course.StudentOutcomeConnection2}</TableCell>
                                    <TableCell align="center">{course.StudentOutcomeConnection3}</TableCell>
                                    <TableCell align="center">{course.StudentOutcomeConnection4}</TableCell>
                                    <TableCell align="center">{course.StudentOutcomeConnection5}</TableCell>
                                    <TableCell align="center">{course.StudentOutcomeConnection6}</TableCell>
                                    <TableCell align="center">{course.StudentOutcomeConnection7}</TableCell>
                                </TableRow>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}


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