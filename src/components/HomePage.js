import React from 'react';
import PropTypes from 'prop-types';
import "../CSS/HomePage.css";

import Menu from './Menu';
import VideoCard from './VideoCard';
import Card from './Card';

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
		else if ((topOffset > viewHeight/2)&&(topOffset <= (viewHeight*0.7))) {
			speed = 100;
			yPos = -(topOffset * speed / 100);
			workPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px);' );
			contactPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px)' );
		}
		else if ((topOffset > (viewHeight*0.7))&&(topOffset < (viewHeight*1.09))){
			speed = 10;
			yPos = -(topOffset * speed / 100) - (viewHeight*0.65);
			opacity = Math.max(0, 1-(topOffset-560)/titlePage.scrollHeight*2);
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
					<Menu />
					<p className="TitleText">Developer</p>
					<VideoCard />
				</div>
				<div className="WorkPageContainer" ref={this.workPageRef}>
					<p className="WorkTitleText">Work</p>
					<div className="CardLevel">
						<Card card="CardEthRiddle" cardTitle="EthRiddle"/>
						<Card card="CardPortfolio" cardTitle="Portfolio"/>
					</div>
					<div className="CardLevel">
						<Card card="CardMisc" cardTitle="Misc"/>
					</div>
				</div>
				<div className="ContactPageContainer" ref={this.contactPageRef}>
				</div>
			</div>

		);
	}
}

export default HomePage;