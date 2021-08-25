import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./../Header/Header.component";
import "./Layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
      <div className="overlay-layer-1"></div>
      <div className="overlay-layer-2"></div>
      <div className="overlay-layer-3"></div>
      <div className="site">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="site-content">{children}</main>
        <footer>
          © {new Date().getFullYear()}, by Brian Sharp
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
