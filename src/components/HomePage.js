import React from 'react';
import PropTypes from 'prop-types';
import "../CSS/HomePage.css";

import Menu from './Menu';
import VideoCard from './VideoCard';

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
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		//Parallax effect

		let topOffset = window.pageYOffset;
		let titlePage = this.titlePageRef.current;
		let workPage = this.workPageRef.current;
		let contactPage = this.contactPageRef.current;

		if (topOffset <= 375) {
			var speed = 10;
			var yPos = -(topOffset * speed / 100);
			var opacity = Math.max(0, 1-topOffset/titlePage.scrollHeight*2);
			titlePage.setAttribute('style', 'transform: translateY('+yPos+'px); opacity:'+opacity+';' );
			workPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px)' );
			contactPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px)' );
		}
		else if ((topOffset > 375)&&(topOffset <= 560)) {
			speed = 100;
			yPos = -(topOffset * speed / 100);
			workPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px);' );
			contactPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px)' );
		}
		else if ((topOffset > 560)&&(topOffset < 920)){
			speed = 10;
			yPos = -(topOffset * speed / 100);
			opacity = Math.max(0, 1-(topOffset-560)/titlePage.scrollHeight*2);
			workPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px); opacity:'+opacity+';' );
			contactPage.setAttribute('style', 'transform: translateY('+(-topOffset)+'px)' );
		}
		else if (topOffset >= 920) {
			contactPage.setAttribute('style', 'transform: translateY('+(-(topOffset+20))+'px)' );
		}

		console.log(topOffset);
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
					<div className="FlexBoxCentering">
						<p> test content </p>
					</div>
				</div>
				<div className="ContactPageContainer" ref={this.contactPageRef}>
				</div>
			</div>

		);
	}
}

export default HomePage;