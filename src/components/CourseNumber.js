import React, { Component } from 'react'

export class CourseNumber extends Component {

    constructor(props) {
        super(props)

        this.state = {
            coursenum: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert('A course number was submitted: ' + this.state.value)
        console.log(event)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label for="courseNumber">Course Number </label>
                <input type="text" name="courseNumber" id="courseNumber" onChange={this.handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CourseNumber
