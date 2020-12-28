import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { Link } from "gatsby"

const StyledHeader = styled.header`
  margin-bottom: 40px;
  background: rgb(0,25,54);
  background: linear-gradient(90deg, rgba(0,25,54,1) 0%, rgba(0,96,138,1) 100%);
  font-size: 32px;
  color: white;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1360,
        padding: `1.45rem 1.0875rem`,
        textAlign: `center`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
