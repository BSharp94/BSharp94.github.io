import React from "react"
import PropTypes from "prop-types"
import './projects.css'
import Picture1 from './../../images/Picture1.jpg'

const ProjectSummary  = ({project_title, project_summary, project_image}) => (
    <div className = "project_summary__panel" >
        <img src={Picture1} className = "project_summary__image"/>
        <h4 className = "project_summary__title">{project_title}</h4>
        <p className = "project_summary__summary">{project_summary}</p>
    </div>
)

class Projects extends React.Component {

    constructor(props) {
        super()

        this.state = {
            projects: [
                {
                    project_title: "Personal Website",
                    project_summary: "This is my personal website that you are viewing right now. It was built using gatsby and react.",
                    project_image: Picture1
                }
            ]
        }
    }

    render() {

        let project_summary = this.state.projects.map((project, key) => (
            <ProjectSummary 
                project_title ={project.project_title} 
                project_summary = {project.project_summary}
            />
        ))

        return (
            <div className = "projects__panel" >
                <h2>Projects</h2>
                {project_summary}
            </div>
        )
    }
}

export default Projects