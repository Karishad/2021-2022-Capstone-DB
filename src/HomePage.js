import React, { useEffect, Component } from 'react';
import axios from "./axios";
//import { Carousel, Table } from "reactstrap";
import PDFFile from './PDFfile';
import { PDFDownloadLink } from '@react-pdf/renderer';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tab } from '@material-ui/core';


class HomePage extends Component {
  //functions go before render(). To call a function, use "this.myfunction" inside the render()

  state = {
    courses: [] //courses has an empty array that will get filled by res.data
  }

  //constructor for useState
  constructor() {
    super() //must call super() every time we want to use State. super() gives us a lot of methods into our class?
    this.getCourses();
  }

  getCourses = async () => {
    try {
      const res = await axios.get('/courses');
      console.log(res.data)
      this.setState({ courses: res.data }) // fill state variable "courses" with res.data
    } catch (err) {
      console.log(err);
    }
  };

  deleteCourse = async (id) => {
    //console.log(id);
    try {
      const res = await axios.post('/deletecourse', id);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    this.getCourses();
  };

  handleClick = (id) => {
    console.log('clicked worked on id ' + id)
  }

  render() {
    return (
      <div className='mainpage'>
        <TableContainer className='Table'
        component={Paper}
        sx={{
          //border: "1px solid",
          //marginRight:'auto',
          //marginLeft:'auto',
          //width:"100%",
          width:"max-context"
          //overflow:"auto"
        }}
        >
          <Table sx={{ minWidth: 1500 }} >
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Course #</TableCell>
                <TableCell align="left" sx={{width:300}}>Course Name</TableCell>
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
              {this.state.courses.map(course => (
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
                  </PDFDownloadLink><button onClick={() => {this.deleteCourse({id:course.id})}}>Delete</button></TableCell>
                </TableRow>))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}

export default HomePage;
/* 
NOTES:
'<tr onClick={()=>{this.handleClick(course.id)}} key={course.id}>'          
In the onClick event handler above, if I just put in the handsubmit function itself, like this:
'<tr onClick={this.handleClick(course.id)} key={course.id}>'  
it will run automatically when the page is loaded, which is not what I want. So instead I have to add an arrow function that THEN calls the 
handleCLick function.

component Paper makes the table look like its on top of a bigger square
*/

/*

 <Table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course #</th>
              <th>Course Name</th>
              <th>Program</th>
              <th>Coordinator</th>
              <th>Required</th>
              <th>Prerequisites</th>
              <th>Course Description</th>
              <th>Credit Hours</th>
              <th>Contact Hours</th>
              <th>Book</th>
              <th>Topics</th>
              <th>LastUpdated</th>
              <th>Room # for Software</th>
              <th>Software Used</th>
              <th>Outcome1</th>
              <th>Outcome2</th>
              <th>Outcome3</th>
              <th>Outcome4</th>
              <th>Outcome5</th>
              <th>Outcome6</th>
              <th>Outcome7</th>
              <th>Outcome8</th>
              <th>Outcome9</th>
              <th>Student1</th>
              <th>Student2</th>
              <th>Student3</th>
              <th>Student4</th>
              <th>Student5</th>
              <th>Student6</th>
              <th>Student7</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => (
              <tr onClick={() => { this.handleClick(course.id) }} key={course.id}>
                <td>{course.id}</td>
                <td>{course.CourseNumber}</td>
                <td>{course.CourseName}</td>
                <td>{course.Program}</td>
                <td>{course.Coordinator}</td>
                <td>{course.Required}</td>
                <td>{course.PreRequisites}</td>
                <td>{course.CourseDescription}</td>
                <td>{course.CreditHours}</td>
                <td>{course.ContactHours}</td>
                <td>{course.Book}</td>
                <td>{course.Topics}</td>
                <td>{course.LastUpdated}</td>
                <td>{course.RoomNumberForSoftware}</td>
                <td>{course.SoftwareUsed}</td>
                <td>{course.Outcome1}</td>
                <td>{course.Outcome2}</td>
                <td>{course.Outcome3}</td>
                <td>{course.Outcome4}</td>
                <td>{course.Outcome5}</td>
                <td>{course.Outcome6}</td>
                <td>{course.Outcome7}</td>
                <td>{course.Outcome8}</td>
                <td>{course.Outcome9}</td>
                <td>{course.StudentOutcomeConnection1}</td>
                <td>{course.StudentOutcomeConnection2}</td>
                <td>{course.StudentOutcomeConnection3}</td>
                <td>{course.StudentOutcomeConnection4}</td>
                <td>{course.StudentOutcomeConnection5}</td>
                <td>{course.StudentOutcomeConnection6}</td>
                <td>{course.StudentOutcomeConnection7}</td>
                <td><PDFDownloadLink document={<PDFFile id={course.id} CoourseNumber={course.CourseNumber} CourseName={course.CourseName} Program={course.Program} Coordinator={course.Coordinator}
                Required={course.Required} PreRequisites={course.PreRequisites} CourseDescription={course.CourseDescription} CreditHours={course.CreditHours} ContactHours={course.ContactHours}
                Book={course.Book} Topics={course.Topics} LastUpdated={course.LastUpdated} RoomNumberForSoftware={course.RoomNumberForSoftware} SoftwareUsed={course.SoftwareUsed}
                Outcome1={course.Outcome1} Outcome2={course.Outcome2} Outcome3={course.Outcome3} Outcome4={course.Outcome4} Outcome5={course.Outcome5} Outcome6={course.Outcome6} Outcome7={course.Outcome7}
                Outcome8={course.Outcome8} Outcome9={course.Outcome9} Student1={course.StudentOutcomeConnection1} Student2={course.StudentOutcomeConnection2} Student3={course.StudentOutcomeConnection3}
                Student4={course.StudentOutcomeConnection4} Student5={course.StudentOutcomeConnection5} Student6={course.StudentOutcomeConnection6} Student7={course.StudentOutcomeConnection7}
                />} fileName="PDF">
                  {({ loading }) => (loading ? <button>Loading PDF...</button> : <button>Download PDF</button>)}
                </PDFDownloadLink></td>
              </tr>
            ))}
          </tbody>
        </Table>
*/

/*
<TableRow>
                  <TableCell align="right">{course.id}</TableCell>
                  <TableCell align="right">{course.CourseNumber}</TableCell>
                  <TableCell align="right">{course.CourseName}</TableCell>
                  <TableCell align="right">{course.Program}</TableCell>
                  <TableCell align="right">{course.Coordinator}</TableCell>
                  <TableCell align="right"></TableCell>{course.Required}</TableCell>
                  <TableCell align="right">{course.PreRequisites}</TableCell>
                  <TableCell align="right">{course.CourseDescription}</TableCell>
                  <TableCell align="right">{course.CreditHours}</TableCell>
                  <TableCell align="right">{course.ContactHours}</TableCell>
                  <TableCell align="right">{course.Book}</TableCell>
                  <TableCell align="right">{course.Topics}</TableCell>
                  <TableCell align="right">{course.LastUpdated}</TableCell>
                  <TableCell align="right">{course.RoomNumberForSoftware}</TableCell>
                  <TableCell align="right">{course.SoftwareUsed}</TableCell>
                  <TableCell align="right"></TableCell>{course.Outcome1}</TableCell>
                  <TableCell align="right">{course.Outcome2}</TableCell>
                  <TableCell align="right">{course.Outcome3}</TableCell>
                  <TableCell align="right">{course.Outcome4}</TableCell>
                  <TableCell align="right">{course.Outcome5}</TableCell>
                  <TableCell align="right">{course.Outcome6}</TableCell>
                  <TableCell align="right">{course.Outcome7}</TableCell>
                  <TableCell align="right">{course.Outcome8}</TableCell>
                  <TableCell align="right">{course.Outcome9}</TableCell>
                  <TableCell align="right">{course.StudentOutcomeConnection1}</TableCell>
                  <TableCell align="right">{course.StudentOutcomeConnection2}</TableCell>
                  <TableCell align="right">{course.StudentOutcomeConnection3}</TableCell>
                  <TableCell align="right">{course.StudentOutcomeConnection4}</TableCell>
                  <TableCell align="right">{course.StudentOutcomeConnection5}</TableCell>
                  <TableCell align="right">{course.StudentOutcomeConnection6}</TableCell>
                  <TableCell align="right">{course.StudentOutcomeConnection7}</TableCell>
                  <TableCell align="right"><PDFDownloadLink document={<PDFFile id={course.id} CoourseNumber={course.CourseNumber} CourseName={course.CourseName} Program={course.Program} Coordinator={course.Coordinator}
                    Required={course.Required} PreRequisites={course.PreRequisites} CourseDescription={course.CourseDescription} CreditHours={course.CreditHours} ContactHours={course.ContactHours}
                    Book={course.Book} Topics={course.Topics} LastUpdated={course.LastUpdated} RoomNumberForSoftware={course.RoomNumberForSoftware} SoftwareUsed={course.SoftwareUsed}
                    Outcome1={course.Outcome1} Outcome2={course.Outcome2} Outcome3={course.Outcome3} Outcome4={course.Outcome4} Outcome5={course.Outcome5} Outcome6={course.Outcome6} Outcome7={course.Outcome7}
                    Outcome8={course.Outcome8} Outcome9={course.Outcome9} Student1={course.StudentOutcomeConnection1} Student2={course.StudentOutcomeConnection2} Student3={course.StudentOutcomeConnection3}
                    Student4={course.StudentOutcomeConnection4} Student5={course.StudentOutcomeConnection5} Student6={course.StudentOutcomeConnection6} Student7={course.StudentOutcomeConnection7}
                  />} fileName="PDF">
                    {({ loading }) => (loading ? <button>Loading PDF...</button> : <button>Download PDF</button>)}
                  </PDFDownloadLink></TableCell>
                </TableRow>))}
*/





