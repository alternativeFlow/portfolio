import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "../CSS/HomePage.css";

import Loader from './Loader';
import Menu from './Menu';
import Card from './Card';

import portfolioVideo from '../assets/portfolioVideo.mp4';
import portfolioPic from '../assets/profilepic.jpg';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TitleTextClassName: "TitleText"
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
			titlePage.setAttribute('style', 'transform: translateY('+(-(topOffset*10/100))+'px); opacity:'+0+';' );
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

	handleMailClick = () => {
		alert('danxue@gmail.com');
	};
	//hideTitle is a bool given based on whether menu is clicked or not
	onMenuClickDetectionForTitle = (hideTitle) => {
		if (hideTitle) {
			this.setState({
				TitleTextClassName: "TitleText HideTitle"
			})
		}
		else if (!hideTitle) {
			this.setState({
				TitleTextClassName: "TitleText"
			})
		}
	};

	render() {
		//For Menu scroll
		let refs = {
			workPageRef: this.workPageRef
		}

		return(
			<div>
				<Loader />
				<div className="Container" ref={this.containerRef}>

					<div className="TitlePageContainer" ref={this.titlePageRef}>
						<video className='Video' muted loop autoPlay>
							<source src={portfolioVideo} type="video/mp4"/>
						</video>
						<Menu onMenuClickDetectionForTitle={this.onMenuClickDetectionForTitle} refs={refs}/>
						<p className={this.state.TitleTextClassName}>Developer</p>
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
											<a className='fa fa-github' href='https://github.com/alternativeFlow/ethriddle-react'>
											</a>
										</div>
										<div className='CardLinkItem'>
											<a className='fa fa-github' href='https://github.com/alternativeFlow/ethriddle-api'>
											</a>
										</div>
										<div className='CardLinkItem'>
											<a className='fa fa-window-maximize' href='https://ethriddle.herokuapp.com'>
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
											<a className='fa fa-github' href='https://github.com/alternativeFlow/portfolio'>
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
											<a className='fa fa-github' href='https://github.com/alternativeFlow/alternatePortfolio'>
											</a>
										</div>
										<div className='CardLinkItem'>
											<a className='fa fa-window-maximize' href='https://danxue.herokuapp.com'>
											</a>
										</div>
										<div className='CardLinkItem'>
											<a className='fa fa-github' href='https://github.com/alternativeFlow/webPortfolio'>
											</a>
										</div>
										<div className='CardLinkItem'>
											<a className='fa fa-window-maximize' href='https://danxue-portfolio.herokuapp.com'>
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
								<img src={portfolioPic} style={{width: '10vh', height: '10vh', borderRadius: '50%'}} alt=''/>
							}
							cardTextFlipped={
								<p>
									“It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.” ― J.R.R. Tolkien, The Lord of the Rings	
								</p>
							}
						/>
						<div className="ContactBox">
							<div className="ContactItem">
								<Link className='fa fa-folder-o' to="/resume">
								</Link>
							</div>
							<div className="ContactItem">
								<a className='fa fa-github' href='https://github.com/alternativeFlow'>
								</a>
							</div>
							<div className="ContactItem">
								<a className='fa fa-mail-reply' onClick={this.handleMailClick}>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default HomePage;