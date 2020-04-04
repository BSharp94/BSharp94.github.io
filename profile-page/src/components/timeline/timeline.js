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

const TimelineItem = ({date, title, company, description}) => (
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
            <h4>{title}</h4>
            <h6>{company}</h6>
            <span>{description}</span>
        </Col>
    </Row>    
  )
  
class Timeline extends React.Component {
    constructor(props) {
        super()

        this.state = {
            positions : [
                {
                    date: "July 2019",
                    title: "Senior Health Business Analyst / Data Scientist",
                    company: "Florida Blue",
                    description: "Worked in the Custom Experience Measurement & Analytics department developing analysis that helped business leaders gain insights into customer satisfaction metrics. Helped maintain data mart of survey results."
                },
                {
                    date: "Janurary 2018",
                    title: "Software Engineer",
                    company: "Forcura"
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