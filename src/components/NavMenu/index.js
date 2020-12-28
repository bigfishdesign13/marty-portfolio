import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
// import { Link } from "gatsby"
// import NavButton from './NavButton'
// import theme from '../theme'

const TheMenu = styled.nav`
	margin-top: 40px;
	// display: inline-block;

	&._banner {
		position: absolute;
		top: 0;
		right: 0;
		margin-top: 20px;
	}
`

// const NavMenu = (props) => {
class NavMenu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<TheMenu className="nav-menu">
				{ this.props.children }
			</TheMenu>
		)
	}
}

NavMenu.propTypes = {
	activeSection: PropTypes.string,
}
	
export default NavMenu
