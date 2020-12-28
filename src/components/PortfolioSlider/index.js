import React, { Component } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
};

const SliderWrap = styled.div`
  width: 100%;
  max-width: 1366px;
`

// const PortfolioSlider = (props) => {
class PortfolioSlider extends Component {
	constructor(props) {
		super(props);
	}

	// this.state = {active: true};
	render() {
    return(
      <SliderWrap>
        <Slider {...settings}>

          { this.props.children }

        </Slider>
      </SliderWrap>
    )
  }
}

export default PortfolioSlider
