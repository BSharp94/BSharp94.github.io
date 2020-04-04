import React from "react"

import Layout from "../components/layout"
import TextTyping from '../components/text_typing/text_typing'
import Timeline from '../components/timeline/timeline'

const IndexPage = () => (
  <Layout>
    
    <TextTyping text = "Hi. My name is Brian Sharp and I am a Software Engineer and Data Scientist. :)" />

    <Timeline title = "Work Experience" />

  </Layout>
)

export default IndexPage
