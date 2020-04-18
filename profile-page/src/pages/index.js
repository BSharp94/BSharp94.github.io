import React from "react"

import Layout from "../components/layout"
import TextTyping from '../components/text_typing/text_typing'
import AboutMeSummary from '../components/about_me_summary/about_me_summary'
import Projects from '../components/projects/projects'
import Services from '../components/services/services'
import ContactMe from '../components/contact_me/contact_me'

import './index.css'

const IndexPage = () => (
  <Layout>
    <div id = "about-me" >

      <TextTyping text = "Hi. ~~ ~~ ~~ My name is Brian Sharp. ~~ ~~ ~~ :)" />
      <AboutMeSummary />
      <Services />

    </div>

    <div id = "projects" >
      <Projects />
    </div>

    <div id = "contact-me" >
      <ContactMe />

    </div>

  </Layout>
)

export default IndexPage
