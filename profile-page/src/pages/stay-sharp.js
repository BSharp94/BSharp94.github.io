import React from "react"
import Layout from "../components/layout"
import { FaRegClock } from "react-icons/fa"
import { AiOutlineCodeSandbox } from 'react-icons/ai'
import { MdSend } from 'react-icons/md'
import {
    Button,
    Form
} from 'react-bootstrap'
import './stay-sharp.css'

const StaySharp = () => (
  <Layout>
      <div id="main-content">
        <div id="main-content__center">
            <Title></Title>
                
            <Content></Content>
            <SubscribeForm></SubscribeForm>
        </div>

      </div>
  </Layout>
)

function Title() {
    return (
        <div className = "title__panel">
            <div className = "title__content">
                <div className = "title__icon">
                    <FaRegClock size = {64} />
                </div>
                <div className = "title__text">
                    <h3>Stay Sharp</h3>
                    <h2>Minute Tech Tips</h2>
                </div>
            </div>
        </div>
    )
}

function Content() {
    return (
        <div className = "content__panel">
            <p>Stay Sharp Minute Tech Tips is a weekly tech email subscription that is 100% free. Each week,  I give you one lesson about one of the following topics:</p>
            <ul>
                <li><AiOutlineCodeSandbox color={"#8E44AD"} size = {32}/>Javascript / Node.js</li>
                <li><AiOutlineCodeSandbox color={"#8E44AD"} size = {32}/>React</li>
                <li><AiOutlineCodeSandbox color={"#8E44AD"} size = {32}/>Python</li>
                <li><AiOutlineCodeSandbox color={"#8E44AD"} size = {32}/>Machine Learning</li>
                <li><AiOutlineCodeSandbox color={"#8E44AD"} size = {32}/>Database Design</li>
            </ul>
            <p>Weekly emails are normally sent every Thursday morning. Please message me with suggestions for future topics.</p>
        </div>
    )
}

const SubscribeForm = () => {
    let iframe_style = {
        display: "block",
        margin: "0px auto",
        maxWidth: "100%"
    }
    return(
        <iframe width="540" height="305" src="https://cb3d8459.sibforms.com/serve/MUIEAHdV035Efs_I-8dtGSX04NQ6konPWHDZeCA-zw6MtwBdn2qfDgb5A52lnCEns1r2gSu-XOewzhNYotMUQoezLFsAUrcKPNWbismI_ZoXKR60hYxeZT3uUR1QyVQBd2bAM7zhfIwLH38-ncTk5L4VUfQRg7BOrXg65N0EfRle1o8-ydLNDesWjcyP9nhagxo3pNEnnOs2OSof" frameborder="0" scrolling="auto" allowfullscreen style={iframe_style}></iframe>
    )
}

// class SubscribeForm extends React.Component {

//     constructor(props) {
//         super()

//         this.state = {
//             email: "",
//             submitted: false
//         }
//     }

//     submitHandler = event => {
//         event.preventDefault()

//         if (this.checkValidEmail(this.state.email)) {
//             // const Http = new XMLHttpRequest();
//             // const URL = ""
//             // Http.open("POST", URL)
//             // Http.setRequestHeader("Content-Type", "text/plain")
//             // let body = {
//             //     email: this.state.email
//             // }

//             // Http.send(JSON.stringify(body))

//             this.setState({
//                 email: "",
//                 submitted: true
//             })

//         } else {
//             event.target.className += " was-validated"
//         }
//     }

//     checkValidEmail(emailStr) {
//         var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         return emailPattern.test(emailStr); 
//     }

//     handleFormUpdate(event) {
//         let updateState = this.state;
//         updateState[event.target.name] = event.target.value
//         this.setState(updateState)
//     }

//     render() {

//         if (this.state.submitted) {
//             return (
//                 <div className = "subscription_submitted__success">
//                     <h3>Subscription Confirmed!</h3>
//                 </div>                    
//             )
//         } else {
//             return (
//                 <Form className = "row" onSubmit = {this.submitHandler} noValidate>
//                     <div className = "col-sm-10">
//                         <Form.Group controlId="formName">
//                             <Form.Control type="email" placeholder="Email *" id = "txtEmail" name = "email"  value = {this.state.email} onChange = {this.handleFormUpdate.bind(this)} required/>
//                             <div className="invalid-feedback">
//                                 Please enter a valid Email
//                             </div>
//                         </Form.Group>   
//                     </div>
//                     <div className = "col-sm-2">
//                         <Button variant="primary" type="submit" id="subscribe_form__btn" >
//                             Subscribe
//                         </Button>
//                     </div>
//                 </Form>
//             )
//         }      

//     }
// }

export default StaySharp
