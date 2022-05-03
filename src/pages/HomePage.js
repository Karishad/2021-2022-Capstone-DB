import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../axios";
//import { Carousel, Table } from "reactstrap";
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

export default function HomePage() {

  //states for dynamically fetching courses after delete or update
  const [courses, setcourses] = useState([]);     //stores course
  const [change, setchange] = useState(false);    //boolean for tracking delete or update

  const navigate = useNavigate();                 //to move to another page

  //rerender page only when course is deleted or updated; fetch all courses again
  useEffect( () => {
    async function getCourses() {
      let initcourses = [];
      try {
        const res = await axios.get('/courses');
        console.log(res.data);
        initcourses = res.data;
        setcourses(initcourses);

      } catch(err) {
        console.log(err);
      }
    }
    
    getCourses();
    setchange(false);
  }, [change]);

  //request to delete course
  const deleteCourse = async (id) => {
    try {
        const res = await axios.post('/deletecourse', id);
        console.log(res.data);
        setchange(true);
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
  <div className='mainpage'>
    <TableContainer className='Table'
    component={Paper}
    sx={{
      //border: "1px solid",
      //marginRight:'auto',
      //marginLeft:'auto',
      //width:"100%",
      //width:"max-context"
      //overflow:"auto"
      maxHeight: 875
    }}
    >
      <Table >
        <TableHead>
          <TableRow sx={{borderBottom: "4px solid black"}}>
          <TableCell align="center" sx={{ minWidth: 200, backgroundColor: 'black', color: 'white', borderRight: "4px solid black"}}> Function </TableCell>
            <TableCell align="center" sx={{ minWidth: 120 }}>ID</TableCell>
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
            <TableRow key={course.id} sx={{borderBottom: "2px solid black"}}>
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
              <button onClick={() => {handleUpdate(course)}}>Update</button>
              <button onClick={() => {deleteCourse({id:course.id})}}>Delete</button></TableCell>
              <TableCell align="center" >{course.id}</TableCell>
              <TableCell align="center" sx={{fontWeight: 600, fontSize: 18}}>{course.CourseNumber}</TableCell>
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
);

}


/* 
NOTES:
'<tr onClick={()=>{this.handleClick(course.id)}} key={course.id}>'          
In the onClick event handler above, if I just put in the handsubmit function itself, like this:
'<tr onClick={this.handleClick(course.id)} key={course.id}>'  
it will run automatically when the page is loaded, which is not what I want. So instead I have to add an arrow function that THEN calls the 
handleCLick function.

component Paper makes the table look like its on top of a bigger square
*/





