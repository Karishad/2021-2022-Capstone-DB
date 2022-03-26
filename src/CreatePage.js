import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema/addSchema';
import axios from './axios';
import space from '../src/images/space.png';

export default function CreatePage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  //I added an ID to the div that contains the outcomes and named it "Objectives".
  //Duplicates Objective input field and appends it to the parent Objectives div.
  const copyNode = () => {
    const node = document.getElementById("StudentOutcome")
    const clone = node.cloneNode();
    document.getElementById("Objectives").appendChild(clone);
  }

  const deleteNode = () => {
    const node = document.getElementById("StudentOutcome")
    document.getElementById("Objectives").removeChild(node);
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
    <form className="Form-inputs" onSubmit={handleSubmit(onSubmit)}>

      <div className="Form-pdf"> Possible PDF preview?
        <img className="pdf-image" src={space} alt="" />
      </div>

      <div className="Form-row1-col1">
        <div>
          <label htmlFor="Program">Program </label>
          <select name="Program" id="Program" defaultValue="" {...register('Program')}>
            <option value="" disabled>Select a program...</option>
            <option value="CS" id="CS option">Computer Science</option>
            <option value="CE" id="CE option">Computer Engineering</option>
            <option value="IT" id="IT option">Information Technology</option>
          </select>
          <small className="text-danger">
            {errors?.Program && errors.Program.message}
          </small>
        </div>
      </div>

      <div className="Form-row1-col2">
        <div>
          <label htmlFor="RequiredFor">Program Requirement</label>
          <select name="RequiredFor" id="RequiredFor" defaultValue="" {...register('RequiredFor')}>
            <option value="" disabled>Select the program...</option>
            <option value="CS" id="CS option">Computer Science</option>
            <option value="CE" id="CE option">Computer Engineering</option>
            <option value="IT" id="IT option">Information Technology</option>
          </select>
          <small className="text-danger">
            {errors?.RequiredFor && errors.RequiredFor.message}
          </small>
        </div>
      </div>

      <div className="Form-row2-col1">
        <div>
          <label htmlFor="CourseNumber">Course #</label>
          <input type="text" name="CourseNumber" id="CourseNumber" {...register('CourseNumber')}></input>
          <small className="text-danger">
            {errors?.CourseNumber && errors.CourseNumber.message}
          </small>
        </div>
        <div>
          <label htmlFor="Coordinator">Coordinator </label>
          <input type="text" name="Coordinator" id="Coordinator" {...register('Coordinator')}></input>
          <small className="text-danger">
            {errors?.Coordinator && errors.Coordinator.message}
          </small>
        </div>
        <div>
          <label htmlFor="Prerequisites">Prerequisites </label>
          <input type="text" name="Prerequisites" id="Prerequisites" {...register('Prerequisites')}></input>
          <small className="text-danger">
            {errors?.Prerequisites && errors.Prerequisites.message}
          </small>
        </div>
        <div>
          <label htmlFor="ContactHours">Contact Hours </label>
          <input type="text" name="ContactHours" id="ContactHours" {...register('ContactHours')}></input>
          <small className="text-danger">
            {errors?.ContactHours && errors.ContactHours.message}
          </small>
        </div>
      </div>

      <div className="Form-row2-col2">
        <div>
          <label htmlFor="CourseName">Course Name </label>
          <input type="text" name="CourseName" id="CourseName" {...register('CourseName')}></input>
          <small className="text-danger">
            {errors?.CourseName && errors.CourseName.message}
          </small>
        </div>
        <div>
          <label htmlFor="Book">Book </label>
          <input type="text" name="Book" id="Book" {...register('Book')}></input>
          <small className="text-danger">
            {errors?.Book && errors.Book.message}
          </small>
        </div>
        <div>
          <label htmlFor="CreditHours"> Credit Hours </label>
          <input type="text" name="CreditHours" id="CreditHours" {...register('CreditHours')}></input>
          <small className="text-danger">
            {errors?.CreditHours && errors.CreditHours.message}
          </small>
        </div>
        <div>
          <label htmlFor="Topics">Topics</label>
          <input type="text" name="Topics" id="Topics" {...register('Topics')}></input>
          <small className="text-danger">
            {errors?.Topics && errors.Topics.message}
          </small>
        </div>
      </div>

      <div className="Form-row3-col1">
        <div>
          <label htmlFor="Outcome"> Outcome</label>
          <input type="text" name="Outcome" id="Outcome" defaultValue="blank" {...register('Outcome')}></input>
        </div>
      </div>

      <div className="Form-row3-col2" id="Form-row3-col2">
        <div id="Objectives">
          <label htmlFor="StudentOutcome">Student Outcome</label>
          <input type="text" name="StudentOutcome" id="StudentOutcome" defaultValue="blank" {...register('StudentOutcome')}></input>
        </div>
        <div className="ObjectiveButton">
          <input type="button" value="Add Objective" onClick={copyNode}></input>
        </div>
        <div className="ObjectiveDeleteButton">
          <input type="button" value="Delete Objective" onClick={deleteNode}></input>
        </div>
      </div>

      <div className="Form-row4-col12">
        <div>
          <label htmlFor="CourseDescription">Course Description</label>
          <input type="text" name="CourseDescription" id="CourseDescription" {...register('CourseDescription')}></input>
          <small className="text-danger">
            {errors?.CourseDescription && errors.CourseDescription.message}
          </small>
        </div>
      </div>

      <div className="Form-row5-col1">
        <div>
          <label htmlFor="SoftwareUsed">Software Used</label>
          <input type="text" name="SoftwareUsed" id="SoftwareUsed" {...register('SoftwareUsed')}></input>
          <small className="text-danger">
            {errors?.SoftwareUsed && errors.SoftwareUsed.message}
          </small>
        </div>
      </div>

      <div className="Form-row5-col2">
        <div>
          <label htmlFor="RoomNumberForSoftware">Software Room #</label>
          <input type="text" name="RoomNumberForSoftware" id="RoomNumberForSoftware" {...register('RoomNumberForSoftware')}></input>
          <small className="text-danger">
            {errors?.RoomNumberForSoftware && errors.RoomNumberForSoftware.message}
          </small>
        </div>
      </div>

      <div className="Form-row6-col1">
        <div>
          <label htmlFor="LastUpdated">Semester Last Updated </label>
          <input type="text" name="LastUpdated" id="LastUpdated" {...register('LastUpdated')}></input>
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

