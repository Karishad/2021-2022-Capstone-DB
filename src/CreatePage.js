import { useForm } from "react-hook-form"

export default function CreatePage() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="department">Department </label>
          <select name="department" id="department" defaultValue="" {...register('department')}>
            <option value="" disabled>Select a department...</option>
            <option value="Computer Science" id="Computer Science option">Computer Science</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
          </select>
        </div>

        <div>
          <label htmlFor="courseNumber">Course Number </label>
          <input type="text" name="courseNumber" id="courseNumber" {...register('courseNumber')}></input>
        </div>

        <div>
          <label htmlFor="courseName">Course Name </label>
          <input type="text" name="courseName" id="courseName" {...register('courseName')}></input>
        </div>

        <div className="courseDescriptionTextArea">
          <label htmlFor="courseDescription">Course Descripion </label>
          <textarea name="courseDescription" id="courseDescription" {...register('courseDescription')}></textarea>
        </div>

        <div>
          <label htmlFor="courseInstructor">Course Instructor </label>
          <input type="text" name="courseInstructor" id="courseInstructor" {...register('courseInstructor')}></input>
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

