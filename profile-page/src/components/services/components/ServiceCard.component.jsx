import React from 'react';

const ServicesCard = ({ title, summary, color }) => (
  <div className="services_card__panel col-sm-4">
    <div className="service_card__content" >
      <div className={"service_card__header " + color}>{title}</div>
      <div className={"service_card__summary " + color} >
        {summary}
      </div>
    </div>
  </div>
)

export default ServicesCard;

