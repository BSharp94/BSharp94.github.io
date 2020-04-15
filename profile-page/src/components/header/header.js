import PropTypes from "prop-types"
import React from "react"
import {
  Nav,
  Navbar,
} from 'react-bootstrap'
import './header.css'

const Header = ({ siteTitle }) => (
  <Navbar expand="lg">
    <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#workExperience">Experience</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


        