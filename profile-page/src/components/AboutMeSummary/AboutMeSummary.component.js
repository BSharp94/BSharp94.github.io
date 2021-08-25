import React from "react"
import './AboutMeSummary.css'

const AboutMeSummary = () => {
  return (
    <div className={"about_me_summary__panel show"}>
      <div className={"show"}>

        <p className="about_me_summary__text">
          I am a full-stack developer with expertise in data analytics and machine learning.
        </p>
        <p className="about_me_summary__text">
          I specialize in creating responsive data driven web-applications.
        </p>
        <div>
          <p className="about_me_summary__text">
            <b>Lets Chat!</b> Email me at <b>briansharpdevelopement@gmail.com</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSummary

