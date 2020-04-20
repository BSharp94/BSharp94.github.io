

import React from "react"
import "./services.css"

const ServicesCard = ({title, summary, color}) => (

    <div className = "services_card__panel col-sm-4">
        
        <div className = "service_card__content" >

            <div className = {"service_card__header " + color}>{title}</div>
            <div className = {"service_card__summary " + color} >
                {summary}
            </div>
        </div>
    </div>
)

class Services extends React.Component {

    constructor(props) {
        super()
    }

    render() {

        let summ = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum euismod gravida. Integer arcu arcu, facilisis id sagittis in, pulvinar blandit magna."

        return (
            <div className = "services__panel row">
                <ServicesCard 
                    title = "Web Development" 
                    summary = {"I develop full stack solutions for data driven web applications. My services range from front-end UI/UX development to designing transaction and analytical databases."}  
                    color = "blue" />
                <ServicesCard 
                    title = "Data Visualization" 
                    summary = {"I help to produce stunning data visualizations that provide useful insights to users. I use modern frontend framworks to develop fast and responsive dashboards."}  
                    color = "green" />
                <ServicesCard 
                    title = "Machine Learning" 
                    summary = {"I create cutting edge machine learning models. Specialties include computer vision, natural language processing, and predictive analytics."}  
                    color = "purple" />
            </div>
        )
    }
}

export default Services