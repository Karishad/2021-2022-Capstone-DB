import React, { useEffect, Component } from 'react';
import instance from './axios';
import axios from "./axios";
import { Table } from "reactstrap";

//TODO save response as object then output on homepage
//useState for object

/*
export default function HomePage() {
  useEffect(() => {
    async function getAllCourses() {
      try {
        const res = await axios.get('/courses');
        console.log(res.data);
        //console.log(res.data[0]); displays first array object
      } catch (err) {
        console.error(err);
      };
    };

    getAllCourses();
  });


  return (
    <div className="Homepage">
      
    </div>

  )
}
*/

class HomePage extends React.Component {
  //functions go before render(). To call a function, use "this.myfunction" inside the render()

  state = {
    courses: [] //courses has an empty array that will get filled by res.data
  }

  //constructor for useState
  constructor() {
    super() //must call super() every time we want to use State. super() gives us a lot of methods into our class?
    instance.get('/courses').then(res => {
      console.log(res.data)
      this.setState({ courses: res.data }) // fill state variable "courses" with res.data
    })
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
              <th>Course Description</th>
              <th>Coordinator</th>
              <th>Book</th>
              <th>Prerequisites</th>
              <th>Credit Hours</th>
              <th>Contact Hours</th>
              <th>Required</th>
              <th>Topics</th>
              <th>Program</th>
              <th>LastUpdated</th>
              <th>Room # for Software</th>
              <th>Software Used</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => (
              <tr>
                <td>{course.id}</td>
                <td>{course.CourseNumber}</td>
                <td>{course.CourseName}</td>
                <td>{course.CourseDescription}</td>
                <td>{course.Coordinator}</td>
                <td>{course.Book}</td>
                <td>{course.PreRequisites}</td>
                <td>{course.CreditHours}</td>
                <td>{course.ContactHours}</td>
                <td>{course.RequiredFor}</td>
                <td>{course.Topics}</td>
                <td>{course.Program}</td>
                <td>{course.LastUpdated}</td>
                <td>{course.RoomNumberForSoftware}</td>
                <td>{course.SoftwareUsed}</td>
                <div className="Delete">
                  <input type="button" value="Delete Syllabus"></input>
                </div>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default HomePage

/*
async getAllCourses() {
    try {
      const res = await axios.get('/courses');
      console.log(res.data);
      //console.log(res.data[0]); displays first array object
    } catch (err) {
      console.error(err);
    };
  };

   {this.state.courses.map(course => <p key={course.id}>{course.id}{course.CourseNumber}{course.CourseName}
        {course.CourseDescription}{course.Coordinator}{course.Book}{course.PreRequisites}{course.CreditHours}
        {course.ContactHours}{course.RequiredFor}{course.Topics}{course.Program}{course.LastUpdated}{course.RoomNumberForSoftware}
        {course.SoftwareUsed}</p> )}

*/





