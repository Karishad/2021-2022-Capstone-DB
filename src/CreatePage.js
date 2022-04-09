import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema/addSchema';
import axios from './axios';
import space from '../src/images/space.png';
import PDFFile from './PDFfile';

/*
  Table styling for PDF Preview, incomplete

const styles = StyleSheet.create({
  OutcomePadding: {
    
  },
})
*/
export default function CreatePage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const [id, setid] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [courseName, setCourseName] = useState('');
  const [Program, setProgram] = useState('');
  const [Coordinator, setCoordinator] = useState('');
  const [Required, setRequired] = useState('');
  const [Prerequisites, setPrerequisites] = useState('');
  const [CourseDescription, setCourseDescrition] = useState('');
  const [CreditHours, setCreditHours] = useState('');
  const [ContactHours, setContactHours] = useState('');
  const [Book, setBook] = useState('');
  const [Topics, setTopics] = useState('');
  const [LastUpdated, setLastUpdated] = useState('');
  const [RoomNumber, setRoomNumber] = useState('');
  const [Software, setSoftware] = useState('');

  const [Outcome1, setOutcome1] = useState('');
  const [Outcome2, setOutcome2] = useState('');
  const [Outcome3, setOutcome3] = useState('');
  const [Outcome4, setOutcome4] = useState('');
  const [Outcome5, setOutcome5] = useState('');
  const [Outcome6, setOutcome6] = useState('');
  const [Outcome7, setOutcome7] = useState('');
  const [Outcome8, setOutcome8] = useState('');
  const [Outcome9, setOutcome9] = useState('');

  const [Student1, setStudent1] = useState('');
  const [Student2, setStudent2] = useState('');
  const [Student3, setStudent3] = useState('');
  const [Student4, setStudent4] = useState('');
  const [Student5, setStudent5] = useState('');
  const [Student6, setStudent6] = useState('');
  const [Student7, setStudent7] = useState('');

  const state = {
    pdfpreview: false
  }
  
  const onSubmit = async (req) => {
    console.log(req);
    try {
      const res = await axios.post('/courses', req);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    };
    reset();
  };

  return (
    <div className='outer'>
      <form className="Form-inputs" onSubmit={handleSubmit(onSubmit)}>

        <div className="Form-pdf">
          <PDFFile id={id}
          CourseNumber={courseNumber} CourseName={courseName} Program={Program} Coordinator={Coordinator}
            Required={Required} Prerequisites={Prerequisites} CourseDescription={CourseDescription} CreditHours={CreditHours} ContactHours={ContactHours}
            Book={Book} Topics={Topics} LastUpdated={LastUpdated} RoomNumberForSoftware={RoomNumber} SoftwareUsed={Software}
            Outcome1={Outcome1} Outcome2={Outcome2} Outcome3={Outcome3} Outcome4={Outcome4} Outcome5={Outcome5} Outcome6={Outcome6} Outcome7={Outcome7} Outcome8={Outcome8} Outcome9={Outcome9}
            Student1={Student1} Student2={Student2} Student3={Student3} Student4={Student4} Student5={Student5} Student6={Student6} Student7={Student7} />
        </div>

        <div className="Form-row1-col1">
          <div>
            <label htmlFor="Program">Program </label>
            <select name="Program" id="Program" defaultValue="" {...register('Program')} onChange={e => setProgram(e.target.value)}>
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
            <select name="Required" id="Required" defaultValue="" {...register('Required')} onChange={e => setRequired(e.target.value)}>
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
            <input type="text" name="CourseNumber" id="CourseNumber" {...register('CourseNumber')} onChange={e => setCourseNumber(e.target.value)}></input>
            <small className="text-danger">
              {errors?.CourseNumber && errors.CourseNumber.message}
            </small>
          </div>
          <div>
            <label htmlFor="Coordinator">Coordinator </label>
            <input type="text" name="Coordinator" id="Coordinator" {...register('Coordinator')} onChange={e => setCoordinator(e.target.value)}></input>
            <small className="text-danger">
              {errors?.Coordinator && errors.Coordinator.message}
            </small>
          </div>
          <div>
            <label htmlFor="Prerequisites">Prerequisites </label>
            <input type="text" name="Prerequisites" id="Prerequisites" {...register('Prerequisites')} onChange={e => setPrerequisites(e.target.value)}></input>
            <small className="text-danger">
              {errors?.Prerequisites && errors.Prerequisites.message}
            </small>
          </div>
          <div>
            <label htmlFor="ContactHours">Contact Hours </label>
            <input type="text" name="ContactHours" id="ContactHours" {...register('ContactHours')} onChange={e => setContactHours(e.target.value)}></input>
            <small className="text-danger">
              {errors?.ContactHours && errors.ContactHours.message}
            </small>
          </div>
        </div>

        <div className="Form-row2-col2">
          <div>
            <label htmlFor="CourseName">Course Name </label>
            <input type="text" name="CourseName" id="CourseName" {...register('CourseName')} onChange={e => setCourseName(e.target.value)}></input>
            <small className="text-danger">
              {errors?.CourseName && errors.CourseName.message}
            </small>
          </div>
          <div>
            <label htmlFor="Book">Book </label>
            <input type="text" name="Book" id="Book" {...register('Book')} onChange={e => setBook(e.target.value)}></input>
            <small className="text-danger">
              {errors?.Book && errors.Book.message}
            </small>
          </div>
          <div>
            <label htmlFor="CreditHours"> Credit Hours </label>
            <input type="text" name="CreditHours" id="CreditHours" {...register('CreditHours')} onChange={e => setCreditHours(e.target.value)}></input>
            <small className="text-danger">
              {errors?.CreditHours && errors.CreditHours.message}
            </small>
          </div>
          <div>
            <label htmlFor="Topics">Topics</label>
            <input type="text" name="Topics" id="Topics" {...register('Topics')} onChange={e => setTopics(e.target.value)}></input>
            <small className="text-danger">
              {errors?.Topics && errors.Topics.message}
            </small>
          </div>
        </div>

        <div className="Form-row3-col12">
          <div id="CourseObjectives">
            <label htmlFor="CourseOutcome">Course Outcomes</label>
            <input type="text" name="CourseOutcome1" id="CourseOutcome1" {...register('Outcome1')} onChange={e => setOutcome1(e.target.value)}></input>
            <input type="text" name="CourseOutcome2" id="CourseOutcome2" {...register('Outcome2')} onChange={e => setOutcome2(e.target.value)}></input>
            <input type="text" name="CourseOutcome3" id="CourseOutcome3" {...register('Outcome3')} onChange={e => setOutcome3(e.target.value)}></input>
            <input type="text" name="CourseOutcome4" id="CourseOutcome4" {...register('Outcome4')} onChange={e => setOutcome4(e.target.value)}></input>
            <input type="text" name="CourseOutcome5" id="CourseOutcome5" {...register('Outcome5')} onChange={e => setOutcome5(e.target.value)}></input>
            <input type="text" name="CourseOutcome6" id="CourseOutcome6" {...register('Outcome6')} onChange={e => setOutcome6(e.target.value)}></input>
            <input type="text" name="CourseOutcome7" id="CourseOutcome7" {...register('Outcome7')} onChange={e => setOutcome7(e.target.value)}></input>
            <input type="text" name="CourseOutcome8" id="CourseOutcome8" {...register('Outcome8')} onChange={e => setOutcome8(e.target.value)}></input>
            <input type="text" name="CourseOutcome9" id="CourseOutcome9" {...register('Outcome9')} onChange={e => setOutcome9(e.target.value)}></input>
          </div>
        </div>

        <div className="Form-row4-col1" id="Form-row4-col1">
          <div id="CourseObjectiveConnections">
            <label htmlFor="StudentOutcome">Course Outcome</label>
            <input type="text" name="StudentOutcomeConnection1" id="StudentOutcomeConnection1" {...register('StudentOutcomeConnection1')} onChange={e => setStudent1(e.target.value)}></input>
            <input type="text" name="StudentOutcomeConnection2" id="StudentOutcomeConnection2" {...register('StudentOutcomeConnection2')} onChange={e => setStudent2(e.target.value)}></input>
            <input type="text" name="StudentOutcomeConnection3" id="StudentOutcomeConnection3" {...register('StudentOutcomeConnection3')} onChange={e => setStudent3(e.target.value)}></input>
            <input type="text" name="StudentOutcomeConnection4" id="StudentOutcomeConnection4" {...register('StudentOutcomeConnection4')} onChange={e => setStudent4(e.target.value)}></input>
            <input type="text" name="StudentOutcomeConnection5" id="StudentOutcomeConnection5" {...register('StudentOutcomeConnection5')} onChange={e => setStudent5(e.target.value)}></input>
            <input type="text" name="StudentOutcomeConnection6" id="StudentOutcomeConnection6" {...register('StudentOutcomeConnection6')} onChange={e => setStudent6(e.target.value)}></input>
            <input type="text" name="StudentOutcomeConnection7" id="StudentOutcomeConnection7" {...register('StudentOutcomeConnection7')} onChange={e => setStudent7(e.target.value)}></input>

          </div>
        </div>

        <div className="Form-row4-col2" id="Form-row4-col2">
          <div id="StudentObjectives">
            <label htmlFor="StudentOutcome">Student Outcomes</label>
            <input type="text" name="StudentOutcome1" id="StudentOutcome1" {...register('StudentOutcome1')}></input>
            <input type="text" name="StudentOutcome2" id="StudentOutcome2" {...register('StudentOutcome2')}></input>
            <input type="text" name="StudentOutcome3" id="StudentOutcome3" {...register('StudentOutcome3')}></input>
            <input type="text" name="StudentOutcome4" id="StudentOutcome4" {...register('StudentOutcome4')}></input>
            <input type="text" name="StudentOutcome5" id="StudentOutcome5" {...register('StudentOutcome5')}></input>
            <input type="text" name="StudentOutcome6" id="StudentOutcome6" {...register('StudentOutcome6')}></input>
            <input type="text" name="StudentOutcome7" id="StudentOutcome7" {...register('StudentOutcome7')}></input>
          </div>
        </div>

        <div className="Form-row5-col12">
          <div>
            <label htmlFor="CourseDescription">Course Description</label>
            <input type="text" name="CourseDescription" id="CourseDescription" {...register('CourseDescription')} onChange={e => setCourseDescrition(e.target.value)}></input>
            <small className="text-danger">
              {errors?.CourseDescription && errors.CourseDescription.message}
            </small>
          </div>
        </div>

        <div className="Form-row6-col1">
          <div>
            <label htmlFor="SoftwareUsed">Software Used</label>
            <input type="text" name="SoftwareUsed" id="SoftwareUsed" defaultValue="" {...register('SoftwareUsed')} onChange={e => setSoftware(e.target.value)}></input>
            <small className="text-danger">
              {errors?.SoftwareUsed && errors.SoftwareUsed.message}
            </small>
          </div>
        </div>

        <div className="Form-row6-col2">
          <div>
            <label htmlFor="RoomNumberForSoftware">Software Room #</label>
            <input type="text" name="RoomNumberForSoftware" id="RoomNumberForSoftware" defaultValue="" {...register('RoomNumberForSoftware')} onChange={e => setRoomNumber(e.target.value)}></input>
            <small className="text-danger">
              {errors?.RoomNumberForSoftware && errors.RoomNumberForSoftware.message}
            </small>
          </div>
        </div>

        <div className="Form-row7-col1">
          <div>
            <label htmlFor="LastUpdated">Semester Last Updated </label>
            <input type="text" name="LastUpdated" id="LastUpdated" {...register('LastUpdated')} onChange={e => setLastUpdated(e.target.value)}></input>
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

/*  Course Decscription
  <div className="courseDescriptionTextArea">
          <label htmlFor="CourseDescription">Course Description </label>
          <textarea name="CourseDescription" id="CourseDescription" {...register('CourseDescription')}></textarea>
  </div>
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

