import React from "react"

import Layout from "../components/layout"
import TextTyping from '../components/text_typing/text_typing'
import AboutMeSummary from '../components/about_me_summary/about_me_summary'
import Projects from '../components/projects/projects'
import Services from '../components/services/services'
import ContactMe from '../components/contact_me/contact_me'

const IndexPage = () => (
  <Layout>
    <div id = "about-me"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >

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
