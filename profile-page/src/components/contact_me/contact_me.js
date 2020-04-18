
import React from "react"
import './contact_me.css'
import {
    Button,
    Form
} from 'react-bootstrap'

class ContactMe extends React.Component {

    constructor(props) {
        super()
    }

    render() {
        return (
        <div className = "contact_me__panel">
            <div className = "contact_me__content" >
                <h3>Contact</h3>

                <Form>
                    <div className = "row">
                        <Form.Group controlId="formName" className = "col-sm-4">
                            <Form.Control type="text" placeholder="First Name *" />
                        </Form.Group>

                        <Form.Group controlId="formName" className = "col-sm-4">
                            <Form.Control type="text" placeholder="Last Name *" />
                        </Form.Group>
                        
                        <Form.Group controlId="formName" className = "col-sm-4">
                            <Form.Control type="text" placeholder="Email *" />
                        </Form.Group>
                        
                        <div className = "col-sm-12">

                            <Form.Control as="textarea" rows="3" placeholder="Message *" />
                        </div>
                    </div>
                    <div className = "row justify-content-end">
                        <Button variant="primary" type="submit" id="contact_me__submit" classname = "contact_me__submit_btn">
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
