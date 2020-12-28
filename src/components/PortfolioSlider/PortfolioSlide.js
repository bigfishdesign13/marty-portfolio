import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { Link } from "gatsby"

import Img from "../utils/image"
import Theme from '../theme'

const SlideWrap = styled.div`
  display: flex !important;

  @media ${ Theme.device.mobileL } { 
		display: block !important;
	}

  .deets {
    flex-basis: 30%;
    padding: 20px 30px 0 20px;

    @media ${ Theme.device.mobileL } { 
      flex-basis: 100%;
    }
  }
`

const ImgWrap = styled.div`
  flex-basis: 70%;
  margin: 0 auto;
  width: 100%;
  max-width: 920px;

  @media ${ Theme.device.mobileL } { 
    flex-basis: 100%;
  }
`

const SlideTitle = styled.h3`
  margin-bottom: 5px;
`

const SkillsWrap = styled.div`
  margin: 0 0 20px;
`

const Skill = styled.span`
  display: inline-block;
  margin: 0 3px 3px 0;
  padding: 5px 7px;
  font-size: 14px;
  line-height: 14px;
  color: ${Theme.colors.white};
  background: ${Theme.colors.hilite};
`

const ExternalLink = styled.a`
  display: inline-block;
  padding: 12px 16px;
  font-size: 17px;
  line-height: 17px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${Theme.colors.white};
  background: ${Theme.colors.linkColor};
  transition: background 300ms ease;

  &:hover {
    background: ${Theme.colors.linkHoverColor};
  }

  @media ${ Theme.device.mobileL } { 
    margin-bottom: 20px;
  }
`


const PortfolioSlide = (props) => {
  const skills = props.skills.map((item) =>
    <Skill>{item}</Skill> 
  )

  return(
    <SlideWrap>
      <div className="deets">
        <SlideTitle>{ props.title }</SlideTitle>
        <SkillsWrap>
          { skills }
        </SkillsWrap>
        <p>{ props.description }</p>
        { props.link ? <ExternalLink href={ props.link } target="_blank">Visit Site</ExternalLink> : null }
      </div>
      <ImgWrap>
        <Img filename={ props.image } />
      </ImgWrap>
    </SlideWrap>
  )
}

PortfolioSlide.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
  image: PropTypes.string,
}

PortfolioSlide.defaultProps = {
  title: ``,
  description: ``,
  skills: {},
  image: ``,
}

export default PortfolioSlide
