import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Img from "./utils/image"
import theme from './theme'
// import FadeIn from 'react-fade-in';
// import { CSSTransitionGroup } from 'react-transition-group'

const AboutWrap = styled.div`
  display: flex;
  margin: 0 auto;
  // padding-top: 60px;
  width: 100%;
  max-width: 1080px;
  // height: 90%;
  height: auto;
  opacity: 1.0;
  // transition: all ${ theme.transitions.speed } ease;
  // transition: height 500ms 500ms, opacity 500ms 0ms;

  &.inactive {
    // display: none;
    height: 0;
    opacity: 0;
  }

  @media ${ theme.device.mobileL } {
    display: block;
  }

  p {
    @media ${ theme.device.mobileL } {
      font-size: 15px;
      line-height: 23px;
    }
  }
`
const Innards = styled.div`
  flex-basis: 50%;
`
const StyledImg = styled(Img)`
  width: 50% !important;
  border-radius: 50% !important;
  display: none;
`
const ImgWrap = styled.div`
  margin: auto;
  width: 50%;
  img {
    border-radius: 50%;
  }

  @media ${ theme.device.mobileL } {
    width: 40%;
    margin-bottom: 20px;
  }
`

class About extends Component {
  constructor(props) {
    super(props);
    // this.parentClickHandler = this.parentClickHandler.bind(this);
    this.state = {
        viewclass: 'inactive',
    };
  }

  changeView = (showit) => {
    const newview = showit ? 'active fade-appear' : 'inactive';
    // console.log(showit + " :: " + newview);
    this.setState({
      viewclass: newview
    });
  }
  
  render() {
    if (this.props.hide) return null;

    return (
      <AboutWrap className={this.state.viewclass}>
        <Innards className="theinnards">
          <ImgWrap>
            <StyledImg className="theimage" filename="marty-looking.jpg" alt="Martin Brutvan, UI/UX Design Engineer" />
          </ImgWrap>
        </Innards>

        <Innards>
          {/* <h3>About</h3> */}
          <p>I am a seasoned UI/UX engineer with over 20 years experience in graphic design, UI/UX design, and web development. I work seamlessly with both designers and developers, often bridging the gap between the two disciplines.</p>
          <p>During the past 10+ years, my main role has been UI/UX design for private in-house systems.  During that same period, I have also been integrating with web development teams to ensure design fidelity is met before deployment, guiding front-end developers and providing solutions for challenges met when translating from mockups to code.</p>
          <p>Independently, I have most recently been focusing on WordPress projects, handling all aspects of the web development cycle from start to finish &ndash; including designing wireframes and mockups, coding custom themes and page templates, configuring hosting and deploying the final product.</p>
        </Innards>
      </AboutWrap>
    )
  }
}

About.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
}

export default About
