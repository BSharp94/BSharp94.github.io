

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
    }


    render() {
        return (
            <div className = "about_me_summary__panel">
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
                &nbsp;
                <div className = "about_me_summary__icon_links">
                    
                    <a href = "https://github.com/BSharp94"><FaGithub size = {30}  color = "#CCC"/></a>
                    <a href = "https://www.linkedin.com/in/brian-sharp-b79a06a0/"><FaLinkedin size = {30} color = "#CCC"/></a>
                </div>
            </div>
        )
    }
}




AboutMeSummary.propTypes = {
    text: PropTypes.string.isRequired,
}
  
export default AboutMeSummary