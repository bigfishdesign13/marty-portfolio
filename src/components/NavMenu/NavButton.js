import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import theme from '../theme'
// import { render } from "react-dom"

const TheButton = styled.button`
	display: inline-block;
	position: relative;
	margin: 0 0 0 40px;
	padding: 0;
	font-family: ${theme.fonts.sansSerif};
	font-size: 25px;
	text-align: right;
	border: 0;
	outline: 0;
	background: transparent;
	color: ${theme.colors.linkColor};
	cursor: pointer;
	opacity: 0.9;
	transition: all ${theme.transitions.speed};

	&:first-child {
		margin: 0;
	}
	
	&:hover {
		transform: scale(1.1);
		opacity: 1;
	}

	@media ${ theme.device.mobileL } { 
		display: block;
		margin: 30px 0 0;
		font-size: 27px;
		text-align: center !important;
	}
`

// const NavButton = (props) => {
class NavButton extends Component {
	constructor(props) {
		super(props);
	}

	// this.state = {active: true};
	render() {
		return (
			// <TheButton onClick={ props.clickHandler, 'about' }>
			<TheButton onClick={() => this.props.clickHandler( this.props.id )}>
				{ this.props.label }
			</TheButton>
		)
	}
}

NavButton.propTypes = {
	active: PropTypes.bool,
	label: PropTypes.string,
}

NavButton.defaultProps = {
	active: false,
	label: 'Button',
}
	
export default NavButton
