import { Component } from "react"
import CourseNumber from "./components/CourseNumber"
import DepartmentForm from "./components/DepartmentForm"

export class CreatePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      department: 'CSCETest',
      coursenum: '4901Test'
    }

  }

  render() {
    return (
      <div>
        <CourseNumber/>
        <DepartmentForm/>
        <form className="form">

          <div>
            <label for="department">Department </label>
            <select name="department" id="department">
              <option disabled selected value></option>
              <option value="Computer Science" id="Computer Science option">Computer Science</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
            </select>
            <button type="submit">Submit</button>
          </div>

          <div>
            <label for="courseNumber">Course Number </label>
            <input type="text" name="courseNumber" id="courseNumber"></input>
            <button type="submit">Submit</button>
          </div>

          <div>
            <label for="courseName">Course Name </label>
            <input type="text" name="courseName" id="courseName"></input>
          </div>

          <div className="courseDescriptionTextArea">
            <label for="courseDescription">Course Descripion </label>
            <textarea name="courseDescription" id="courseDescription"></textarea>
          </div>

          <div>
            <label for="courseInstructor">Course Instructor </label>
            <input type="text" name="courseInstructor" id="courseInstructor"></input>
          </div>

          <button type="reset">Reset</button>
          <button type="submit">Submit</button>

        </form>
      </div>
    )
  }


}

export default CreatePage
