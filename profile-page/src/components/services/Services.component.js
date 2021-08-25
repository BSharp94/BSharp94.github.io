

import React from "react";
import "./Services.css";
import ServicesCard from './components/ServiceCard.component.jsx';

const Services = () => (
  <div className="services__panel row">
    <ServicesCard
      title="Web Development"
      summary={"I develop full stack solutions for data driven web applications. My services range from front-end UI/UX development to designing transaction and analytical databases."}
      color="blue" />
    <ServicesCard
      title="Data Visualization"
      summary={"I help to produce stunning data visualizations that provide useful insights to users. I use modern frontend framworks to develop fast and responsive dashboards."}
      color="green" />
    <ServicesCard
      title="Machine Learning"
      summary={"I create cutting edge machine learning models. Specialties include computer vision, natural language processing, and predictive analytics."}
      color="purple" />
  </div>
)

export default Services
