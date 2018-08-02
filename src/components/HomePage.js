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
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		let top = window.pageYOffset;
		let titlePage = this.titlePageRef.current;
		let workPage = this.workPageRef.current;
		var speed = 75
		var yPos = -(top * 10 / 100);
		var opacity = Math.max(0, 1-top/titlePage.scrollHeight);
		titlePage.setAttribute('style', 'transform: translateY('+yPos+'px); opacity:'+opacity+';' );
		workPage.setAttribute('style', 'transform: translateY('+(-top)+'px)' );
	}

	render() {

		return(
			<div className="Container" ref={this.containerRef}>
				<div className="TitlePageContainer" ref={this.titlePageRef}>
					<Menu />
					<p className="TitleText">Developer</p>
					<VideoCard />
				</div>
				<div className="WorkPageContainer" ref={this.workPageRef}>
				</div>
			</div>

		);
	}
}

export default HomePage;