/**
 * Component that displays timeline items in with a vertical line in order     
 */


import React from "react"
import PropTypes from "prop-types"
import {
    Col,
    Container,
    Row
} from 'react-bootstrap'
import "./timeline.css"

const TimelineItem = ({date, title, company, description, technologies}) => (
    <Row>
        <Col sm={2}> 
            <i>
                {date}
            </i>
        </Col>
        <Col sm={1} className = "timeline_item__divider">
            <div className = "timeline_item__dot" ></div>
        </Col>
        <Col sm={9} className = "timeline_item__summary">
            <h4><b>{title}</b></h4>
            <h6>{company}</h6>
            <span>{description}</span>
            <div className = "timeline_item__technologies">
                <ul>
                    {
                        technologies.map((tech, index) => (<li key = {"tech" + index}>{tech}</li>))
                    }
                </ul>
            </div>
        </Col>
    </Row>    
  )
  
class Timeline extends React.Component {
    constructor(props) {
        super()

        this.state = {
            positions : [
                {
                    date: "July 2019 - Present",
                    title: "Senior Health Business Analyst / Data Scientist",
                    company: "Florida Blue",
                    description: "Worked in the Customer Experience Measurement & Analytics department developing analysis that supported business leaders to make custmer centered decisions. Helped maintain a hive data mart that consisted of customer survey results for more than 10 unique customer surveys.",
                    technologies: ["R", "Python", "SQL", "Git", "Data Analysis", "Machine Learning"]
                },
                {
                    date: "Janurary 2018 - July 2019",
                    title: "Full Stack Software Engineer",
                    company: "Forcura",
                    description: "Worked on a small full-stack development team that supported several cloud based web products for home health and hospice agencies. Developed an API for integrating with popular EMR systems. Assisted in full UI refresh of flagship web application using React. Improved transactional database performance while supporting a 4x growth of in daily users. Promoted from associate engineer to mid-level engineer in 9 months.",
                    technologies: ["C#", "React", "SQL Server", "Python", "Amazon Cloud", "Git"]
                },
                {
                    date: "Janurary 2018 - July 2019",
                    title: "Full Stack Software Engineer",
                    company: "Caretta Data",
                    description: "Worked at a finacial technology startup that developed stock metadata products. Developed several administrative tools used to improve manual data quality tasks.Created services to perform web-scraping and API queries.",
                    technologies: ["Node", "Amazon Redshift", "Postgres", "Vue", "React"]
                }
            ]

        }
    }

    render() {
        let timeline_items = this.state.positions.map((item, key) => 
            <TimelineItem 
                date = {item.date || ""} 
                title = {item.title || ""} 
                company = {item.company || ""}
                description = {item.description || ""} 
                technologies = {item.technologies || []}
                key = {key}/>
        ); 

        return (
            <div className = "timeline_panel">
                <h2>{this.props.title}</h2>
                <Container>
                    {timeline_items}      

                </Container>
            </div>
        )
    }

}

Timeline.propTypes = {
    title: PropTypes.string.isRequired,
}
  
export default Timeline