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
	}

	handleVideoCardFlip = () => {

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