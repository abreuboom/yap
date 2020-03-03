/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "../css/style.css";
import "../css/variables.css";

import { graphql, useStaticQuery } from "gatsby";

import Feed from "./feed";
import Header from "./header";
import PropTypes from "prop-types";
import React from "react";
import css from "../css/Layout.module.css";

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={css.container}>
        {/* <main> {children} </main> */}
        <Feed />
        <footer>
          ©{new Date().getFullYear()}, Built with
          <a href='https://www.gatsbyjs.org'> Gatsby </a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
