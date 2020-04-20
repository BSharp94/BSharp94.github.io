
import React from "react"
import './contact_me.css'
import {
    Button,
    Form
} from 'react-bootstrap'
import {
    MdSend
} from 'react-icons/md'


class ContactMe extends React.Component {

    constructor(props) {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            submitted: false
        }
    }

    submitHandler = event => {
        event.preventDefault()

        if (this.checkValidFormState()) {

            // send message old school way
            const Http = new XMLHttpRequest();
            const URL = "https://us-central1-briansharpdevelopment.cloudfunctions.net/send-contact-email"
            Http.open("POST", URL)
            Http.setRequestHeader("Content-Type", "text/plain")  
            let body = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                message: this.state.message
            }


            Http.send(JSON.stringify(body))

            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
                submitted: true
            })

        } else {
            event.target.className += " was-validated";

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

        let contact_form = (
            <div id = "message_sent_success" className = "row justify-content-md-center">
                <div className = "col-lg-4 message_sent_success__message">
                    <span>Thank you! Your message was sent. I will get back to use as soon as I can.</span>
                </div>
                
                <div className = "col-lg-1">
                    <MdSend size = {32} />
                </div>
            </div>
        )

        if (!this.state.submitted) {
            contact_form = (
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
            )
        }

        return (
        <div className = "contact_me__panel">
            <div className = "contact_me__content" >
                <h3>Contact</h3>

                {contact_form}
            </div>
        </div>
        )
    }
}

export default ContactMe
