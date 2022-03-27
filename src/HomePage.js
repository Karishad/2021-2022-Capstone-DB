import React, { useEffect, Component } from 'react';
import axios from "./axios";
import { Carousel, Table } from "reactstrap";
import PDFFile from './PDFfile';
import { PDFDownloadLink } from '@react-pdf/renderer';

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
    axios.get('/courses').then(res => {
      console.log(res.data)
      this.setState({ courses: res.data }) // fill state variable "courses" with res.data
    })
  }

  handleClick = (id) => {
    console.log('clicked worked on id ' + id)
  }


  render() {
    return (
      <div className='mainpage'>
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
                <td>{course.RequiredFor}</td>
                <td>{course.PreRequisites}</td>
                <td>{course.CourseDescription}</td>
                <td>{course.CreditHours}</td>
                <td>{course.ContactHours}</td>
                <td>{course.Book}</td>
                <td>{course.Topics}</td>
                <td>{course.LastUpdated}</td>
                <td>{course.RoomNumberForSoftware}</td>
                <td>{course.SoftwareUsed}</td>
                <PDFDownloadLink document={<PDFFile id={course.id} CoourseNumber={course.CourseNumber} CourseName={course.CourseName} Program={course.Program} Coordinator={course.Coordinator}
                RequiredFor={course.RequiredFor} PreRequisites={course.PreRequisites} CourseDescription={course.CourseDescription} CreditHours={course.CreditHours} ContactHours={course.ContactHours}
                Book={course.Book} Topics={course.Topics} LastUpdated={course.LastUpdated} RoomNumberForSoftware={course.RoomNumberForSoftware} SoftwareUsed={course.SoftwareUsed}/>} fileName="PDF">
                  {({ loading }) => (loading ? <button>Loading PDF...</button> : <button>Download PDF</button>)}
                </PDFDownloadLink>
              </tr>
            ))}
          </tbody>
        </Table>


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
*/





