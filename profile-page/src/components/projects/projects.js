
import React from "react"
import './projects.css'

const ProjectItem = ({title}) => (
    <div className = "col-sm-6 project_item__panel">
        <div className = "project_item__content">
            

        </div>
    </div>
)

class Projects extends React.Component {

    constructor(props) {
        super()

        this.state = {
            projects: [
                {title: "test"},
                {title: "test2"},
                {title: "test"},
                {title: "test2"}
            ]
        }
    }


    render() {
        let project_items = this.state.projects.map((item, key) =>
            <ProjectItem 
                title = {item.title || ""} 
                key = {key } />
        )        

        return (
            <div className = "project__panel">
                <div className = "project__content">
                    <h3>Projects</h3>
                    <div className="container">
                        <div className="row">
                            {project_items}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects