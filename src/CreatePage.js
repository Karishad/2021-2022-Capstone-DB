import { useForm } from "react-hook-form";
import './App.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from './axios';


export default function CreatePage() {
  const schema = yup.object({
    Department: yup.string().length(4).required(),
    CourseNumber: yup.number().positive().integer().lessThan(10000).moreThan(999).required(),
    CourseName: yup.string().max(50).required(),
    CourseDescription: yup.string().max(250),
    CourseInstructor: yup.string().max(50).required()
  }).required();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (req) => {
    //console.log(req);
    try {
      const res = await axios.post('/courses', req);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    };
    reset();
  };

  return (
    <div className="Createpage">

      <div className="Form-header"> Possible PDF preview?</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Program">Program </label>
          <select name="Program" id="Program" defaultValue="" {...register('Program')}>
            <option value="" disabled>Select a Program...</option>
            <option value="CS" id="CS option">Computer Science</option>
            <option value="CE" id="CE option">Computer Engineering</option>
            <option value="IT" id="IT option">Information Technology</option>
          </select>
        </div>

        <div>
          <label htmlFor="CourseNumber">Course #</label>
          <input type="text" name="CourseNumber" id="CourseNumber" {...register('CourseNumber')}></input>
        </div>

        <div>
          <label htmlFor="CourseName">Course Name </label>
          <input type="text" name="CourseName" id="CourseName" {...register('CourseName')}></input>
        </div>

        <div>
          <label htmlFor="CourseCoordinator">Coordinator </label>
          <input type="text" name="CourseCoordinator" id="CourseCoordinator" {...register('CourseCoordinator')}></input>
        </div>

        <div>
          <label htmlFor="CourseBook">Book </label>
          <input type="text" name="CourseBook" id="CourseBook" {...register('CourseBook')}></input>
        </div>

        <div>
          <label htmlFor="Prerequisites">Prerequisites </label>
          <input type="text" name="Prerequisites" id="Prerequisites" {...register('Prerequisites')}></input>
        </div>

        <div>
          <label htmlFor="CreditHours"> Credit Hours </label>
          <input type="text" name="CreditHours" id="CreditHours" {...register('CreditHours')}></input>
        </div>

        <div>
          <label htmlFor="ContactHours">Contact Hours </label>
          <input type="text" name="ContactHours" id="ContactHours" {...register('ContactHours')}></input>
        </div>

        <div>
          <label htmlFor="ProgramRequired">Program Requirement</label>
          <select name="ProgramRequired" id="ProgramRequired" defaultValue="" {...register('ProgramRequired')}>
            <option value="" disabled>Select the requirement...</option>
            <option value="Required" id="Required option">Required</option>
            <option value="Elective" id="Elective option">Elective</option>
            <option value="Selective" id="Selective option">Selective Elective</option>
          </select>
        </div>

        <div>
          <label htmlFor="Outcome"> Outcome</label>
          <input type="text" name="Outcome" id="Outcome" {...register('Outcome')}></input>
        </div>

        <div>
          <label htmlFor="CourseDescription">Course Description</label>
          <input type="text" name="CourseDescription" id="CourseDescription" {...register('CourseDescription')}></input>
        </div>

        <div>
          <label htmlFor="StudentOutcome">Student Outcome</label>
          <input type="text" name="StudentOutcome" id="StudentOutcome" {...register('StudentOutcome')}></input>
        </div>

        <div>
          <label htmlFor="Topics">Topics</label>
          <input type="text" name="Topics" id="Topics" {...register('Topics')}></input>
        </div>

        <div>
          <label htmlFor="SemesterUpdated">Semester Last Updated </label>
          <input type="text" name="SemesterUpdated" id="SemesterUpdated" {...register('SemesterUpdated')}></input>
        </div>

        <div>
          <label htmlFor="RoomNumber">Room #</label>
          <input type="text" name="RoomNumber" id="RoomNumber" {...register('RoomNumber')}></input>
        </div>

        <div>
          <label htmlFor="SoftwareUsed">Software Used</label>
          <input type="text" name="SoftwareUsed" id="SoftwareUsed" {...register('SoftwareUsed')}></input>
        </div>



        <button className="ResetButton" type="reset">Reset</button>
        <button className="SubmitButton" type="submit">Submit</button>

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
*/

