import PropTypes from "prop-types";
import React from "react";
import {
  Nav,
  Navbar,
} from 'react-bootstrap';
import {
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa';

import './Header.css';

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="lg" className="justify-content-between">
    <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/#projects">Projects</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="https://github.com/BSharp94">
          <FaGithub size={24} />
        </Nav.Link>
        <Nav.Link eventKey={2} href="https://www.linkedin.com/in/brian-sharp-b79a06a0/">
          <FaLinkedinIn size={24} />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

