import React from 'react';
import PropTypes from 'prop-types';
import "../CSS/HomePage.css";

import Menu from './Menu';
import VideoCard from './VideoCard';
import Card from './Card';

import portfolioVideo from '../assets/portfolioVideo.mp4';
import portfolioPic from '../assets/profilepic.jpg';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.containerRef = React.createRef();
		this.titlePageRef = React.createRef();
		this.workPageRef = React.createRef();
		this.contactPageRef = React.createRef();
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.handleResize);
	}

	handleScroll = (event) => {
		//Parallax effect

		let topOffset = window.pageYOffset;
		let viewHeight = window.innerHeight;
		let titlePage = this.titlePageRef.current;
		let workPage = this.workPageRef.current;
		let contactPage = this.contactPageRef.current;

		if (topOffset <= viewHeight/2) {
			var speed = 10;
			var yPos = -(topOffset * speed / 100);
			var opacity = Math.max(0, 1-topOffset/titlePage.scrollHeight*2);
			titlePage.setAttribute('style', 'transform: translateY('+yPos+'px); opacity:'+opacity+';' );
			workPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px)' );
			contactPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px)' );
		}
		//Second Page is 150%vh so some portion is scrolled normally
		else if ((topOffset > viewHeight/2)&&(topOffset <= (viewHeight*0.6))) {
			speed = 100;
			yPos = -(topOffset * speed / 100);
			titlePage.setAttribute('style', 'transform: translateY('+(-(topOffset*10/100))+'px); opacity:'+0+';' );
			workPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px);' );
			contactPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px)' );
		}
		else if ((topOffset > (viewHeight*0.6))&&(topOffset < (viewHeight*1.09))){
			speed = 10;
			yPos = -(topOffset * speed / 100) - (viewHeight*0.55);
			opacity = Math.max(0, 1-(topOffset-viewHeight*0.6)/titlePage.scrollHeight*2);

			workPage.setAttribute('style', 'transform: translateY('+yPos+'px); opacity:'+opacity+';' );
			contactPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px)' );
		}
		//Smoothing scrolling
		else if (topOffset >= (viewHeight*1.09)) {
			contactPage.setAttribute('style', 'transform: translateY('+(-(topOffset+35))+'px)' );
		}
	};

	handleResize = (event) => {
		let topOffset = window.pageYOffset;
		let viewHeight = window.innerHeight;
		let workPage = this.workPageRef.current;
		let contactPage = this.contactPageRef.current;

		if ((topOffset>viewHeight/2)&&(topOffset<viewHeight*0.895)) {
			workPage.scrollIntoView(false);
		}
		else if ((topOffset>=viewHeight*0.895)) {
			contactPage.scrollIntoView(false);
		}
	};

	render() {

		return(
			<div className="Container" ref={this.containerRef}>
				<div className="TitlePageContainer" ref={this.titlePageRef}>
					<video className='Video' muted loop autoPlay>
						<source src={portfolioVideo} type="video/mp4"/>
					</video>
					<Menu />
					<p className="TitleText">Developer</p>
					<Card 
						card="CardTitlePage" 
						cardTitle="Click Me!"
						cardTextFlipped={
							<p>
								Check the backs for more info!
							</p>
						}
					/>
				</div>
				<div className="WorkPageContainer" ref={this.workPageRef}>
					<p className="WorkTitleText">Work</p>
					<div className="CardLevel">
						<Card 
							card="CardEthRiddle" 
							cardTitle="EthRiddle"
							cardTextFlipped={
								<p>
									A web app built with:
									<br/>React/Redux/ES6/Node/Solidity
									<br/>Previously built with jQuery and PHP
								</p>
							}
							cardLinksFlipped={
								<div style={{display: 'contents'}}>
									<div className='CardLinkItem'>
										<a className='fa fa-github' href='https://www.github.com'>
										</a>
									</div>
									<div className='CardLinkItem'>
										<a className='fa fa-google' href='https://www.google.com'>
										</a>
									</div>
								</div>
							}
						/>
						<Card 
							card="CardPortfolio" 
							cardTitle="Portfolio"
							cardTextFlipped={
								<p>
									This site built with:
									<br/>React/ES6/CSS3/SASS
								</p>
							}
							cardLinksFlipped={
								<div style={{display: 'contents'}}>
									<div className='CardLinkItem'>
										<a className='fa fa-github' href='https://www.github.com'>
										</a>
									</div>
									<div className='CardLinkItem'>
										<a className='fa fa-google' href='https://www.google.com'>
										</a>
									</div>
								</div>
							}
						/>
					</div>
					<div className="CardLevel">
						<Card 
							card="CardMisc" 
							cardTitle="Misc"
							cardTextFlipped={
								<p>
									Alternate Portfolios:
									<br/>Built with same stack as this portfolio
								</p>
							}
							cardLinksFlipped={
								<div style={{display: 'contents'}}>
									<div className='CardLinkItem'>
										<a className='fa fa-github' href='https://www.github.com'>
										</a>
									</div>
									<div className='CardLinkItem'>
										<a className='fa fa-google' href='https://www.google.com'>
										</a>
									</div>
								</div>
							}
						/>
					</div>
				</div>
				<div className="ContactPageContainer" ref={this.contactPageRef}>
					<p className="ContactTitleText">
						Contact
					</p>
					<Card 
						card="CardContactPage" 
						cardImage={
							<img src={portfolioPic} style={{width: '10vh', height: '10vh', 'border-radius': '50%'}}/>
						}
						cardTextFlipped={
							<p>
								“It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.” ― J.R.R. Tolkien, The Lord of the Rings	
							</p>
						}
					/>
					<div className="ContactBox">
					</div>
				</div>
			</div>

		);
	}
}

export default HomePage;