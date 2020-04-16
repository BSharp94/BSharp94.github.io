
import React from "react"
import './contact_me.css'
import {
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
                        
                        <div className = "col">

                            <Form.Control as="textarea" rows="3" placeholder="Message *" />
                        </div>
                    </div>
                </Form>
            </div>
        </div>
        )
    }
}

export default ContactMe
