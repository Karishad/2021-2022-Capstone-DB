import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../schema/addSchema';
import axios from '../axios';

export default function UpdatePage() {

  //init react-hook-form with yup validation schema
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  let navigate = useNavigate();           //to go to another page
  const location = useLocation();
  const course = location.state.course;   //course data passed from page where update button was clicked
  
  //request to update course on submit then return to home
  const onSubmit = (req) => {
    axios.post(`/update/${course.id}`, req)
    .then( navigate('/') )
    .catch((err) => console.log(err));
  };


  return (
    <div className='outer'>
      <form className="Form-inputs" onSubmit={handleSubmit(onSubmit)}>

        <div className="Form-row1-col1">
          <div>
            <label htmlFor="Program">Program </label>
            <select name="Program" id="Program" defaultValue={course.Program} {...register('Program')}>
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
        </div>

        <div className="Form-row1-col2">
          <div>
            <label htmlFor="Required">Program Requirement</label>
            <select name="Required" id="Required" defaultValue={course.Required} {...register('Required')}>
              <option value="" disabled>Select requirement</option>
              <option value="Elective" id="Elective option">Elective</option>
              <option value="Selected Elective" id="Selected elective option">Selected Elective</option>
              <option value="Required" id="Required option">Required</option>
            </select>
            <small className="text-danger">
              {errors?.Required && errors.Required.message}
            </small>
          </div>
        </div>

        <div className="Form-row2-col1">
          <div>
            <label htmlFor="CourseNumber">Course #</label>
            <input type="text" name="CourseNumber" id="CourseNumber" defaultValue={course.CourseNumber} {...register('CourseNumber')}></input>
            <small className="text-danger">
              {errors?.CourseNumber && errors.CourseNumber.message}
            </small>
          </div>
          <div>
            <label htmlFor="Coordinator">Coordinator </label>
            <input type="text" name="Coordinator" id="Coordinator" defaultValue={course.Coordinator} {...register('Coordinator')}></input>
            <small className="text-danger">
              {errors?.Coordinator && errors.Coordinator.message}
            </small>
          </div>
          <div>
            <label htmlFor="Prerequisites">Prerequisites </label>
            <input type="text" name="Prerequisites" id="Prerequisites" defaultValue={course.Prerequisites} {...register('Prerequisites')}></input>
            <small className="text-danger">
              {errors?.Prerequisites && errors.Prerequisites.message}
            </small>
          </div>
          <div>
            <label htmlFor="ContactHours">Contact Hours </label>
            <input type="text" name="ContactHours" id="ContactHours" defaultValue={course.ContactHours} {...register('ContactHours')}></input>
            <small className="text-danger">
              {errors?.ContactHours && errors.ContactHours.message}
            </small>
          </div>
        </div>

        <div className="Form-row2-col2">
          <div>
            <label htmlFor="CourseName">Course Name </label>
            <input type="text" name="CourseName" id="CourseName" defaultValue={course.CourseName} {...register('CourseName')}></input>
            <small className="text-danger">
              {errors?.CourseName && errors.CourseName.message}
            </small>
          </div>
          <div>
            <label htmlFor="Book">Book </label>
            <input type="text" name="Book" id="Book" defaultValue={course.Book} {...register('Book')}></input>
            <small className="text-danger">
              {errors?.Book && errors.Book.message}
            </small>
          </div>
          <div>
            <label htmlFor="CreditHours"> Credit Hours </label>
            <input type="text" name="CreditHours" id="CreditHours" defaultValue={course.CreditHours} {...register('CreditHours')}></input>
            <small className="text-danger">
              {errors?.CreditHours && errors.CreditHours.message}
            </small>
          </div>
          <div>
            <label htmlFor="Topics">Topics</label>
            <input type="text" name="Topics" id="Topics" defaultValue={course.Topics} {...register('Topics')}></input>
            <small className="text-danger">
              {errors?.Topics && errors.Topics.message}
            </small>
          </div>
        </div>

        <div className="Form-row3-col12">
          <div id="CourseObjectives">
            <label htmlFor="CourseOutcome">Course Outcomes</label>
            <input type="text" name="CourseOutcome1" id="CourseOutcome1" defaultValue={course.Outcome1} {...register('Outcome1')}></input>
            <small className="text-danger">
              {errors?.Outcome1 && errors.Outcome1.message}
            </small>
            <input type="text" name="CourseOutcome2" id="CourseOutcome2" defaultValue={course.Outcome2} {...register('Outcome2')}></input>
            <small className="text-danger">
              {errors?.Outcome2 && errors.Outcome2.message}
            </small>
            <input type="text" name="CourseOutcome3" id="CourseOutcome3" defaultValue={course.Outcome3} {...register('Outcome3')}></input>
            <small className="text-danger">
              {errors?.Outcome3 && errors.Outcome3.message}
            </small>
            <input type="text" name="CourseOutcome4" id="CourseOutcome4" defaultValue={course.Outcome4} {...register('Outcome4')}></input>
            <small className="text-danger">
              {errors?.Outcome4 && errors.Outcome4.message}
            </small>
            <input type="text" name="CourseOutcome5" id="CourseOutcome5" defaultValue={course.Outcome5} {...register('Outcome5')}></input>
            <small className="text-danger">
              {errors?.Outcome5 && errors.Outcome5.message}
            </small>
            <input type="text" name="CourseOutcome6" id="CourseOutcome6" defaultValue={course.Outcome6} {...register('Outcome6')}></input>
            <small className="text-danger">
              {errors?.Outcome6 && errors.Outcome6.message}
            </small>
            <input type="text" name="CourseOutcome7" id="CourseOutcome7" defaultValue={course.Outcome7} {...register('Outcome7')}></input>
            <small className="text-danger">
              {errors?.Outcome7 && errors.Outcome7.message}
            </small>
            <input type="text" name="CourseOutcome8" id="CourseOutcome8" defaultValue={course.Outcome8} {...register('Outcome8')}></input>
            <small className="text-danger">
              {errors?.Outcome8 && errors.Outcome8.message}
            </small>
            <input type="text" name="CourseOutcome9" id="CourseOutcome9" defaultValue={course.Outcome9} {...register('Outcome9')}></input>
            <small className="text-danger">
              {errors?.Outcome9 && errors.Outcome9.message}
            </small>
          </div>
        </div>

        <div className="Form-row4-col1" id="Form-row4-col1">
          <div id="CourseObjectiveConnections">
            <label htmlFor="StudentOutcome">Course Outcome</label>
            <input type="text" name="StudentOutcomeConnection1" id="StudentOutcomeConnection1" defaultValue={course.StudentOutcomeConnection1} {...register('StudentOutcomeConnection1')}></input>
            <small className="text-danger">
              {errors?.StudentOutcomeConnection1 && errors.StudentOutcomeConnection1.message}
            </small>
            <input type="text" name="StudentOutcomeConnection2" id="StudentOutcomeConnection2" defaultValue={course.StudentOutcomeConnection2} {...register('StudentOutcomeConnection2')}></input>
            <small className="text-danger">
              {errors?.StudentOutcomeConnection2 && errors.StudentOutcomeConnection2.message}
            </small>
            <input type="text" name="StudentOutcomeConnection3" id="StudentOutcomeConnection3" defaultValue={course.StudentOutcomeConnection3} {...register('StudentOutcomeConnection3')}></input>
            <small className="text-danger">
              {errors?.StudentOutcomeConnection3 && errors.StudentOutcomeConnection3.message}
            </small>
            <input type="text" name="StudentOutcomeConnection4" id="StudentOutcomeConnection4" defaultValue={course.StudentOutcomeConnection4} {...register('StudentOutcomeConnection4')}></input>
            <small className="text-danger">
              {errors?.StudentOutcomeConnection4 && errors.StudentOutcomeConnection4.message}
            </small>
            <input type="text" name="StudentOutcomeConnection5" id="StudentOutcomeConnection5" defaultValue={course.StudentOutcomeConnection5} {...register('StudentOutcomeConnection5')}></input>
            <small className="text-danger">
              {errors?.StudentOutcomeConnection5 && errors.StudentOutcomeConnection5.message}
            </small>
            <input type="text" name="StudentOutcomeConnection6" id="StudentOutcomeConnection6" defaultValue={course.StudentOutcomeConnection6} {...register('StudentOutcomeConnection6')}></input>
            <small className="text-danger">
              {errors?.StudentOutcomeConnection6 && errors.StudentOutcomeConnection6.message}
            </small>
            <input type="text" name="StudentOutcomeConnection7" id="StudentOutcomeConnection7" defaultValue={course.StudentOutcomeConnection7} {...register('StudentOutcomeConnection7')}></input>
            <small className="text-danger">
              {errors?.StudentOutcomeConnection7 && errors.StudentOutcomeConnection7.message}
            </small>
          </div>
        </div>

        <div className="Form-row4-col2" id="Form-row4-col2">
          <div id="StudentObjectives">
            <label htmlFor="StudentOutcome">Student Outcomes</label>
            <input type="text" name="StudentOutcome1" id="StudentOutcome1" defaultValue={course.StudentOutcome1} {...register('StudentOutcome1')}></input>
            <small className="text-danger">
              {errors?.StudentOutcome1 && errors.StudentOutcome1.message}
            </small>
            <input type="text" name="StudentOutcome2" id="StudentOutcome2" defaultValue={course.StudentOutcome2} {...register('StudentOutcome2')}></input>
            <small className="text-danger">
              {errors?.StudentOutcome2 && errors.StudentOutcome2.message}
            </small>
            <input type="text" name="StudentOutcome3" id="StudentOutcome3" defaultValue={course.StudentOutcome3} {...register('StudentOutcome3')}></input>
            <small className="text-danger">
              {errors?.StudentOutcome3 && errors.StudentOutcome3.message}
            </small>
            <input type="text" name="StudentOutcome4" id="StudentOutcome4" defaultValue={course.StudentOutcome4} {...register('StudentOutcome4')}></input>
            <small className="text-danger">
              {errors?.StudentOutcome4 && errors.StudentOutcome4.message}
            </small>
            <input type="text" name="StudentOutcome5" id="StudentOutcome5" defaultValue={course.StudentOutcome5} {...register('StudentOutcome5')}></input>
            <small className="text-danger">
              {errors?.StudentOutcome5 && errors.StudentOutcome5.message}
            </small>
            <input type="text" name="StudentOutcome6" id="StudentOutcome6" defaultValue={course.StudentOutcome6} {...register('StudentOutcome6')}></input>
            <small className="text-danger">
              {errors?.StudentOutcome6 && errors.StudentOutcome6.message}
            </small>
            <input type="text" name="StudentOutcome7" id="StudentOutcome7" defaultValue={course.StudentOutcome7} {...register('StudentOutcome7')}></input>
            <small className="text-danger">
              {errors?.StudentOutcome7 && errors.StudentOutcome7.message}
            </small>
          </div>
        </div>

        <div className="Form-row5-col12">
          <div>
            <label htmlFor="CourseDescription">Course Description</label>
            <input type="text" name="CourseDescription" id="CourseDescription" defaultValue={course.CourseDescription} {...register('CourseDescription')}></input>
            <small className="text-danger">
              {errors?.CourseDescription && errors.CourseDescription.message}
            </small>
          </div>
        </div>

        <div className="Form-row6-col1">
          <div>
            <label htmlFor="SoftwareUsed">Software Used</label>
            <input type="text" name="SoftwareUsed" id="SoftwareUsed" defaultValue={course.SoftwareUsed} {...register('SoftwareUsed')}></input>
            <small className="text-danger">
              {errors?.SoftwareUsed && errors.SoftwareUsed.message}
            </small>
          </div>
        </div>

        <div className="Form-row6-col2">
          <div>
            <label htmlFor="RoomNumberForSoftware">Software Room #</label>
            <input type="text" name="RoomNumberForSoftware" id="RoomNumberForSoftware" defaultValue={course.RoomNumberForSoftware} {...register('RoomNumberForSoftware')}></input>
            <small className="text-danger">
              {errors?.RoomNumberForSoftware && errors.RoomNumberForSoftware.message}
            </small>
          </div>
        </div>

        <div className="Form-row7-col1">
          <div>
            <label htmlFor="LastUpdated">Semester Last Updated </label>
            <input type="text" name="LastUpdated" id="LastUpdated" defaultValue={course.LastUpdated} {...register('LastUpdated')}></input>
            <small className="text-danger">
              {errors?.LastUpdated && errors.LastUpdated.message}
            </small>
          </div>
        </div>

        <div className="Buttons">
          <button className="ResetButton" type="reset">Reset</button>
          <button className="SubmitButton" type="submit">Submit</button>
        </div>
      </form>
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
"<option value="" disable>...</option>". Also, there is another HTML form element called "datalist".
It shows predefined selections but the user can type in anything they want.

<img className="pdf-image" src={space} alt="" />
*/

/*
//I added an ID to the div that contains the outcomes and named it "Objectives".
  //Duplicates Objective input field and appends it to the parent Objectives div.
  const copyNode = () => {
    const node = document.getElementById("CourseOutcome")
    const clone = node.cloneNode();
    document.getElementById("CourseObjectives").appendChild(clone);
  }

  const deleteNode = () => {
    const node = document.getElementById("CourseObjectives")
    if (node.children[2] != null) {
      node.removeChild(node.lastChild);
    }
  }
  
<div className="ObjectiveButton">
          <input type="button" value="Add Objective" onClick={copyNode}></input>
        </div>
        <div className="ObjectiveDeleteButton">
          <input type="button" value="Delete Objective" onClick={deleteNode}></input>
        </div>
*/

