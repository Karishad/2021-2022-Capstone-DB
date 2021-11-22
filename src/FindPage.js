import React from "react"

export default function FindPage(){
    return(
        <form>
            <div>
                <label for="department">Department </label>
                <select name="department" id="department">
                    <option disabled selected value></option>
                    <option value="Computer Science" id="Computer Science option">Computer Science</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                </select>
            </div>

            <div>
                <label for="courseNumber">Course Number </label>
                <input type="text" name="courseNumber" id="courseNumber"></input>
            </div>


            <div>
                <label for="courseName">Course Name </label>
                <input type="text" name="courseName" id="courseName"></input>
            </div>

            <div>
                <label for="courseInstructor">Course Instructor </label>
                <input type="text" name="courseInstructor" id="courseInstructor"></input>
            </div>

            <button type="submit">Query</button>

        </form>
    )
}