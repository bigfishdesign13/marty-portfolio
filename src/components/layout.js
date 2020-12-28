import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
        style={{
          margin: `0 auto`,
          width: `90%`,
          maxWidth: 1366,
          height: `100%`,
          padding: `0 1.0875rem 1.45rem`,
          position: `relative`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`,
          display: `none`,
        }}>
          © {new Date().getFullYear()} Martin Brutvan
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
