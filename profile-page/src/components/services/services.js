

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
                <ServicesCard title = "Web Development" summary = {summ}  color = "blue" />
                <ServicesCard title = "Data Visualization" summary = {summ}  color = "green" />
                <ServicesCard title = "Machine Learning" summary = {summ}  color = "purple" />
            </div>
        )
    }
}

export default Services