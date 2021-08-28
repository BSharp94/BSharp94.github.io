import React from "react";
import Layout from "../components/Layout/Layout.component";
import TextTyping from '../components/TextTyping/TextTyping.component';
import AboutMeSummary from '../components/AboutMeSummary/AboutMeSummary.component';
import Projects from '../components/Projects/Projects.component';
import Services from '../components/Services/Services.component';
import Resume from '../components/Resume/Resume.component';

import './index.css';

const IndexPage = () => (
  <Layout>
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <div id="about-me" >
      <TextTyping text="Hi. My name is Brian Sharp. :)" />
      <AboutMeSummary />
      <Services />
    </div>

    <div id="projects" >
      <Projects />
    </div>

    <div id="resume">
      <Resume />
    </div>
  </Layout>
);

export default IndexPage;

