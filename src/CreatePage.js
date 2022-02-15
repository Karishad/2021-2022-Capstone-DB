import { useForm } from "react-hook-form";
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

  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Department">Department </label>
          <select name="Department" id="Department" defaultValue="" {...register('Department')}>
            <option value="" disabled>Select a department...</option>
            <option value="CSCE" id="CSCE option">CSCE</option>
            <option value="EENG">EENG</option>
          </select>
        </div>

        <div>
          <label htmlFor="CourseNumber">Course Number </label>
          <input type="text" name="CourseNumber" id="CourseNumber" {...register('CourseNumber')}></input>
        </div>

        <div>
          <label htmlFor="CourseName">Course Name </label>
          <input type="text" name="CourseName" id="CourseName" {...register('CourseName')}></input>
        </div>

        <div className="courseDescriptionTextArea">
          <label htmlFor="CourseDescription">Course Description </label>
          <textarea name="CourseDescription" id="CourseDescription" {...register('CourseDescription')}></textarea>
        </div>

        <div>
          <label htmlFor="CourseInstructor">Course Instructor </label>
          <input type="text" name="CourseInstructor" id="CourseInstructor" {...register('CourseInstructor')}></input>
        </div>

        <button type="reset">Reset</button>
        <button type="submit">Submit</button>

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
"<option value="" disable>...</option>"
*/

