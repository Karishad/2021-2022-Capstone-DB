import React from "react";
import { useForm } from "react-hook-form";
import axios from './axios';


export default function FindPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            Program: "",
            RequiredFor: "",
            CourseNumber: "",
            Coordinator: "",
            CourseName: ""
        }
      });

    const onSubmit = async (req) => {
        console.log(req);
        try {
            const res = await axios.post('/findcourse', req);
            console.log(res.data);
          } catch (err) {
            console.error(err);
          };
        reset();
    };

    return (
        <div className="Findpage-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Form-row1-col1">
                    <label htmlFor="Program">Program </label>
                    <select name="Program" id="Program" {...register('Program')}>
                        <option value="" disabled>Select a program...</option>
                        <option value="CS" id="CS option">Computer Science</option>
                        <option value="CE" id="CE option">Computer Engineering</option>
                        <option value="IT" id="IT option">Information Technology</option>
                    </select>
                    <small className="text-danger">
                        {errors?.Program && errors.Program.message}
                    </small>
                </div>
                <div className="Form-row2-col1">
                    <label htmlFor="RequiredFor">Program Requirement</label>
                    <select name="RequiredFor" id="RequiredFor" {...register('RequiredFor')}>
                        <option value="" disabled>Select the program...</option>
                        <option value="CS" id="CS option">Computer Science</option>
                        <option value="CE" id="CE option">Computer Engineering</option>
                        <option value="IT" id="IT option">Information Technology</option>
                    </select>
                    <small className="text-danger">
                        {errors?.RequiredFor && errors.RequiredFor.message}
                    </small>
                </div>
                <div className="Form-row3-col1">
                    <label htmlFor="CourseNumber">Course #</label>
                    <input type="text" name="CourseNumber" id="CourseNumber" {...register('CourseNumber')}></input>
                    <small className="text-danger">
                        {errors?.CourseNumber && errors.CourseNumber.message}
                    </small>
                </div>
                <div className="Form-row4-col1">
                    <label htmlFor="Coordinator">Coordinator </label>
                    <input type="text" name="Coordinator" id="Coordinator" {...register('Coordinator')}></input>
                    <small className="text-danger">
                        {errors?.Coordinator && errors.Coordinator.message}
                    </small>
                </div>
                <div className="Form-row5-col1">
                    <label htmlFor="CourseName">Course Name </label>
                    <input type="text" name="CourseName" id="CourseName" {...register('CourseName')}></input>
                    <small className="text-danger">
                        {errors?.CourseName && errors.CourseName.message}
                    </small>
                </div>
                <button type="submit">Query</button>
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