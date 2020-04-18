

import React from "react"
import PropTypes from "prop-types"
import './about_me_summary.css'
import {
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
class AboutMeSummary extends React.Component {

    constructor(props) {
        super()
        this.state = {
            showName: ""
        }
    }

    componentDidMount() {
        setTimeout(() => {this.setState({showName: "show"})}, 300)

    }

    render() {
        return (
            <div className = {"about_me_summary__panel " + this.state.showName}>
                <div className = {this.state.showName || ""}>

                    <p className = "about_me_summary__text">
                        I am a full-stack developer with expertise in data analytics and machine learning.
                    </p>                
                    <p className = "about_me_summary__text">
                        I specialize in creating responsive data driven web-applications. 
                    </p>
                    <div>
                        <p className = "about_me_summary__text">
                        <b>Lets Chat!</b> Email me at <b>briansharpdevelopement@gmail.com</b> 
                        </p>
                    </div>
                    <div>
                        <p className = "about_me_summary__text">
                        Or <a href = "#contact-me">contact me below</a> 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}




AboutMeSummary.propTypes = {
    text: PropTypes.string.isRequired,
}
  
export default AboutMeSummary