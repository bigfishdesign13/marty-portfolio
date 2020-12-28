import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavMenu from "./NavMenu"
import NavButton from "./NavMenu/NavButton"
import theme from "./theme"

const SplashWrap = styled.div`
  display: flex;
  align-items: center;
  // align-content: center;
  flex-wrap: wrap;
  height: 100%;
  transition: all ${ theme.transitions.speed } ease;

  &.banner {
    height: 80px;
    margin-bottom: 60px;

    .innards {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 100%;
      
      @media ${ theme.device.mobileL } {
        display: block;
        margin-top: 10px;
      }
    }
    @media ${ theme.device.mobileL } { 
      // text-align: center;
    }
    h1 {
      font-size: 27px;
      cursor: pointer;
    }
    h2 {
      font-size: 15px;
      cursor: pointer;

      @media ${ theme.device.mobileL } {
        margin-top: 0px;
      }
    }
    .nav-menu {
      // display: inline-block;
      // flex-basis: 50%;
      margin-top: 10px;
      text-align: right;

      @media ${ theme.device.mobileL } {
        display: block;
        margin: 0;
        text-align: left;
      }

      button {
        font-size: 21px;
        
        @media ${ theme.device.mobileL } {
          display: inline-block;
          margin: 10px 5px 0 0;
          padding: 0 15px;
          line-height: 44px;
          font-size: 18px;
          color: #fff;
          background: ${ theme.colors.linkColor };
        }

        @media ${ theme.device.mobileS } {
          margin: 10px 5px 0 0;
          padding: 0 10px;
          line-height: 44px;
          font-size: 15px;
          color: #fff;
          background: ${ theme.colors.linkColor };
        }
      }
    }
  }
`
const SplashInnards = styled.div`
  
`
const Headers = styled.div`
  // display: inline-block;
  
`
const PrimaryHeader = styled.h1`
  margin: 0;
  font-family: ${ theme.fonts.sansSerif };
  font-size: 61px;
  font-weight: normal;

  @media ${ theme.device.laptop } { 
    font-size: 54px;
  }
  @media ${ theme.device.mobileL } { 
    font-size: 38px;
  }
`
const SecondaryHeader = styled.h2`
  margin: 0;
  font-family: ${ theme.fonts.sansSerif };
  font-size: 31px;
  font-weight: normal;

  @media ${ theme.device.laptop } { 
    font-size: 27px;
  }
  @media ${ theme.device.mobileL } { 
    margin-top: 5px;
    font-size: 21px;
  }
`

// const Splash = ( props ) => {
class Splash extends Component {
  constructor(props) {
    super(props);
    // this.changeView = this.changeView.bind(this);
    this.state = {
        isBanner: false,
    };
  }

  changeView = (isit) => {
    // console.log('isBanner == ' + isit)
    this.setState({
      isBanner: isit
    });
  }
  
  render() {
    return (
      <SplashWrap className={this.state.isBanner ? 'banner': 'null'} >
        <div className="innards">
          <Headers onClick={() => this.props.callback( 'reset' )}>
            <PrimaryHeader>{ this.props.primary }</PrimaryHeader>
            <SecondaryHeader>{ this.props.secondary }</SecondaryHeader>
          </Headers>
          <NavMenu>
            <NavButton label="About" id="about" clickHandler={ this.props.callback } />
            <NavButton label="Resume" id="resume" clickHandler={ this.props.callback } />
            <NavButton label="Portfolio" id="portfolio" clickHandler={ this.props.callback } />
          </NavMenu>
        </div>
      </SplashWrap>
    )
  }
}

Splash.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
}

export default Splash
