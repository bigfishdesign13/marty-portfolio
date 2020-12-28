import React, { Component } from "react"

// import { Link } from "gatsby"
// import styled from 'styled-components'

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Theme from '../components/theme'
// import Img from "../components/utils/image"

import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SEO from "../components/utils/seo"

import Splash from "../components/Splash"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import favicon from '../images/favicon.png'
// import PortfolioSlider from "../components/PortfolioSlider/"
// import PortfolioSlide from "../components/PortfolioSlider/PortfolioSlide"

// const IndexPage = () => (
class App extends Component {
  constructor(props) {
    super(props);
    this.setLayout = this.setLayout.bind(this);
    this.splashRef = React.createRef();
    this.aboutRef = React.createRef();
    this.portfolioRef = React.createRef();
  }

  setLayout = (screen) => {
    // console.log('setLayout :: ' + screen);
    switch (screen) {
      case 'about' :
        this.splashRef.current.changeView(true);
        this.aboutRef.current.changeView(true);
        this.portfolioRef.current.changeView(false);
      break;

      case 'portfolio' :
        this.splashRef.current.changeView(true);
        this.aboutRef.current.changeView(false);
        this.portfolioRef.current.changeView(true);
      break;

      case 'resume' :
        window.open("resume/Martin-Brutvan-Resume.pdf", "_blank");
      break;

      case 'reset' :
        this.splashRef.current.changeView(false);
        this.aboutRef.current.changeView(false);
        this.portfolioRef.current.changeView(false);
      break;
    }    
  }

  render() {
    return(
      <Layout>
        <Helmet>
          <link rel="icon" href={favicon} />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-20ZXRJQ3B6"></script>
          <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-20ZXRJQ3B6');

            setTimeout(function() {
              console.log('hello world');
              const root = document.getElementById('___gatsby');
              root.className += 'show'; 
            }, 3000)
            `}
          </script>
        </Helmet>
        
        <SEO title="Martin Brutvan" />

        <Splash
          ref={ this.splashRef }
          className="splash-screen"
          primary='Martin Brutvan'
          secondary='UI/UX Design Engineer' 
          callback={ this.setLayout }
          />
        
        <About 
          ref={ this.aboutRef }
          className="about-screen"
          />

        <Portfolio 
          ref={ this.portfolioRef }
          className="portfolio-screen"
          />
        
      </Layout>
    )
  }
}

export default App
// const rootElement = document.getElementById("___gatsby");
// ReactDOM.render(<App />, rootElement);
