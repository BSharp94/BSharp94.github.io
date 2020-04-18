
import React from "react"
import './contact_me.css'
import {
    Button,
    Form
} from 'react-bootstrap'

class ContactMe extends React.Component {

    constructor(props) {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        }
    }

    submitHandler = event => {
        event.preventDefault()

        if (this.checkValidFormState()) {
            // submit form
        } else {
            event.target.className += " was-validated";

            // Send Email
        }
    }

    checkValidFormState() {
        let valid = (this.state.firstName.length > 0 && this.state.firstName != "")
        valid = valid && (this.state.lastName.length > 0 && this.state.lastName != "") 
        valid = valid && (this.state.email.length > 0 && this.state.email != "")
        valid = valid && (this.state.message.length > 0 && this.state.message != "" && this.checkValidEmail(this.state.email))
        return valid 
    }
    
    checkValidEmail(emailStr) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(emailStr); 
    }

    handleFormUpdate(event) {
        let updatedState = this.state
        updatedState[event.target.name] = event.target.value
        this.setState(updatedState)
    }

    render() {
        return (
        <div className = "contact_me__panel">
            <div className = "contact_me__content" >
                <h3>Contact</h3>

                <Form onSubmit = {this.submitHandler} noValidate>
                    <div className = "row">
                        <Form.Group controlId="formName" className = "col-sm-4" required>
                            <Form.Control type="text" placeholder="First Name *" id = "txtFirstName" value = {this.state.firstName} name = "firstName" onChange={this.handleFormUpdate.bind(this)} required/>
                            <div className="invalid-feedback">
                                Please provide your First Name.
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formName" className = "col-sm-4">
                            <Form.Control type="text" placeholder="Last Name *" id = "txtLastName" value = {this.state.lastname} name = "lastName" onChange={this.handleFormUpdate.bind(this)} required/>
                            <div className="invalid-feedback">
                                Please enter a valid Last Name.
                            </div>
                        </Form.Group>
                        
                        <Form.Group controlId="formName" className = "col-sm-4">
                            <Form.Control type="email" placeholder="Email *" id = "txtEmail" value = {this.state.email} name = "email" onChange = {this.handleFormUpdate.bind(this)} required/>
                            <div className="invalid-feedback">
                                Please enter a valid Email Address.
                            </div>
                        </Form.Group>
                        
                        <div className = "col-sm-12">
                            <Form.Control as="textarea" rows="3" placeholder="Message *" value = {this.state.message} name = "message" onChange = {this.handleFormUpdate.bind(this)} required/>
                        </div>
                    </div>
                    <div className = "row justify-content-end">
                        <Button variant="primary" type="submit" id="contact_me__submit" classname = "contact_me__submit_btn" >
                            Send
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
        )
    }
}

export default ContactMe
