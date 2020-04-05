import React from "react"

import Layout from "../components/layout"
import TextTyping from '../components/text_typing/text_typing'
import Timeline from '../components/timeline/timeline'
import FadeInParagraph from '../components/fade_in_paragraph/fade_in_paragraph'

const IndexPage = () => (
  <Layout>
    
    <TextTyping text = "Hi. ~~ ~~ ~~ My name is Brian Sharp. ~~ ~~ ~~ :)" />

    <FadeInParagraph 
      text = "I am a Software Engineer and Data Science currently working in Jacksonville, Fl. I have a passion for Machine Learning, Artificial Intelligence, and Web Development."  />
    

    <Timeline title = "Work Experience" />

    

  </Layout>
)

export default IndexPage
