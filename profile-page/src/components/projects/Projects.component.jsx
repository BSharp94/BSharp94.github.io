
import React from "react"
import './projects.css'

const ProjectItem = () => (
  <div className="col-sm-6 project_item__panel">
    <div className="project_item__content">
    </div>
  </div>
)

const Projects = () => {
  const projectList = [
    { title: "test" },
    { title: "test2" },
    { title: "test" },
    { title: "test2" }
  ];

  const renderProjectItems = () => projectList.map((item, key) => <ProjectItem title={item.title} key={`ProjectItem__${key}`} />);

  return (
    <div className="project__panel">
      <div className="project__content">
        <h3>Projects</h3>
        <div className="container">
          <div className="row">
            {renderProjectItems()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

