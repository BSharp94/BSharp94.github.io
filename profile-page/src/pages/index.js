import React from "react"

import Layout from "../components/layout"
import TextTyping from '../components/text_typing/text_typing'
import Timeline from '../components/timeline/timeline'
import AboutMeSummary from '../components/about_me_summary/about_me_summary'
import HorizontalBar from '../components/horizontal_bar/horizontal_bar'


const IndexPage = () => (
  <Layout>
    
    <TextTyping text = "Hi. ~~ ~~ ~~ My name is Brian Sharp. ~~ ~~ ~~ :)" />
    <HorizontalBar />
    
    <AboutMeSummary />

    <div id = "workExperience">
      <Timeline title = "Work Experience" />
    </div>


  </Layout>
)

export default IndexPage
