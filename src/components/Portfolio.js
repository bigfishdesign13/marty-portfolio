import React, { Component } from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import PortfolioSlider from "./PortfolioSlider/"
import PortfolioSlide from "./PortfolioSlider/PortfolioSlide"

const PortfolioWrap = styled.div`
	margin: 0 auto;
	// padding-top: 60px;
	height: auto;
	opacity: 1.0;
	// transition: height 500ms 500ms, opacity 500ms 0ms;

	&.inactive {
		// display: none;
		height: 0;
    	opacity: 0;
	}
`

// const Portfolio = (props) => {
class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewclass: 'inactive',
		};
	}

	changeView = (showit) => {
		const newview = showit ? 'active' : 'inactive';
		// console.log(showit + " :: " + newview);
		this.setState({
			viewclass: newview
		});
	}

	render() {
		return(
			<PortfolioWrap className={this.state.viewclass}>
				<PortfolioSlider className='marty'>

					<PortfolioSlide
						title='Kaplan Financial Education Re-skin'
						skills={ ['Graphic Design', 'HTML', 'CSS/SCSS', 'Javascript', 'jQuery', 'Responsive'] }
						description='CSS, jQuery and plain Javascript were used to apply a new UI skin on top of a 10+ year old site that had a relevant codebase with a dated front-end design.  The site, built before mobile devices took over the world, is now responsive.'
						image='portfolio-ecampus-home.jpg'
						link='https://ecampus.smartpros.com'
						/>

					<PortfolioSlide
						title='Kaplan eLearning Player'
						skills={ ['Graphic Design', 'HTML', 'CSS', 'Javascript', 'jQuery', 'Responsive', 'Streaming Video', 'SCORM'] }
						description='The eLearning Player is a single page application developed as the primary platform for delivering the core course products for SmartPros, A Kaplan Company.  The original coursware was developed in Adobe Flash and eventually converted to full native HTML application.  The platform offers varying course styles with multiple learning components available and supports thousands of course titles.'
						image='portfolio-elp.jpg'
						link=''
						/>

					<PortfolioSlide
						title='Gender &amp; Diversity KPI Alliance'
						skills={ ['HTML', 'CSS/SCSS', 'Javascript', 'Responsive', 'Pantheon WebOps', 'WordPress' ] }
						description={ 'The WordPress CMS was used to rapidly develop and deploy a responsive website for the Gender & Diversity KPI Alliance.  Once the site\'s designs were completed, the site was up and running within a week.' }
						link='https://gdka.org'
						image='portfolio-gdka.jpg'
						/>

					<PortfolioSlide
						title='UIA Talent Agency'
						skills={ ['HTML', 'CSS/SCSS', 'Javascript', 'jQuery', 'Responsive', 'WordPress'] }
						description={ 'The WordPress CMS was used to develop and deploy a responsive website for the UIA Talent Agency.  The site contains multiple custom page templates where Javascript and jQuery are utilized to customize page styling depending on a page\'s point of entry.' }
						link='https://uiatalent.com'
						image='portfolio-uia.jpg' 
						/>
					
					<PortfolioSlide
						title='The Gardiner Gazette'
						skills={ ['Graphic Design', 'HTML', 'CSS/SCSS', 'Javascript', 'Responsive', 'Logo Design', 'WordPress'] }
						description={ 'The WordPress CMS was used to develop a mechanism for delivering The Gardiner Gazette\'s quarterly newsletter publication.  In addition to the site development, I also handled website graphic design, logo design and branding.' }
						link='https://gardinergazette.com'
						image='portfolio-gardiner-gazette.jpg'
						/>

					<PortfolioSlide
						title='AGW Events'
						skills={ ['HTML', 'CSS', 'Javascript', 'PHP', 'Database Design', 'Responsive'] }
						description={ 'The AGW platform is a scalable event registration portal.  Each event has a dedicated custom website with restricted access.  Site administrators can utilize backend utilities to pull reports on each event\'s registrants.' }
						image='portfolio-agw.jpg'
						/>
					
					<PortfolioSlide
						title='SmartPros eCampus'
						skills={ ['Graphic Design'] }
						description={ 'Mockup for desktop and mobile showing a recommended layout for the SmartPros eCampus homepage.' }
						image='portfolio-ecampus-redesign-2.jpg'
						/>

					<PortfolioSlide
						title='Kaplan ACE Subscription Packages'
						skills={ ['Graphic Design'] }
						description={ 'Mockup showing a recommended layout for a marketing landing page.' }
						image='portfolio-packages.jpg'
						/>

					<PortfolioSlide
						title='Kaplan ACE Video Catalog'
						skills={ ['Graphic Design'] }
						description={ 'Mockup showing a recommended layout for a marketing landing page.' }
						image='portfolio-browse.jpg'
						/>

					<PortfolioSlide
						title='The Count, A Musical'
						skills={ ['Logo Design', 'Print Design', 'Photography'] }
						description={ 'Logo design, print materials and event photography for The Count, A Musical.' }
						image='portfolio-the-count.jpg' 
						/>

				</PortfolioSlider>
			</PortfolioWrap>
		)
	}
}

export default Portfolio