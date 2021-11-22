import React, { Component } from 'react'

export class DepartmentForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'khang',
            department: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        console.log(event)
        event.preventDefault()
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="department">Department </label>
                    <select name="department" id="department" onChange={this.handleChange}>
                        <option disabled selected value></option>
                        <option value="Computer Science" id="Computer Science option">Computer Science</option>
                        <option value="Computer Engineering">Computer Engineering</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default DepartmentForm

/*
In the handleChange(event) {...} function above, the "event" parameter it receives is the user input.
An onChange event handler (the handleChange function above) returns a Synthetic Event object (think local variable, NOT the actual this.state values of the class) which contains useful meta data such as the target input’s id, name, and current value.
We can access the target input’s value inside of the handleChange by accessing event.target.value. Therefore, to log the name of the input field, we can log event.target.name.

The handleChange function above takes in an event object that contains the users input, and assigns it to a local variable value using setState. "value" is assigned with "event.target.value". 
REMEMBER, this does not change the actual this.state variables of the class even if you name it the same thing since its a local variable.

Doing console.log(event) will show all the meta data of that synthetic event object.
*/

//"<input type="submit" value="Submit" />" same as "<button type="submit">Submit</button>