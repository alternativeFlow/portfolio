import React from 'react';
import PropTypes from 'prop-types';
import "../CSS/HomePage.css";

import portfolioVideo from '../assets/portfolioVideo.mp4';

import Menu from './Menu';

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
					<div className="VideoCard" onClick={this.handleVideoCardFlip}>
						<div className="VideoCardAspectRatioBox">
							<video className="Video" muted loop autoPlay>
								<source src={portfolioVideo} type="video/mp4"/>
							</video>
							<div className="FlexBoxCentering">
								<p className="VideoText">
									Click Me!
								</p>
							</div>
							<div className="FlexBoxCentering">
								<p className="VideoTextFlipped">
									Flipped
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="WorkPageContainer" ref={this.workPageRef}>
				</div>
			</div>

		);
	}
}

export default HomePage;