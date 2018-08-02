import React from 'react';
import PropTypes from 'prop-types';
import "../CSS/VideoCard.css";

import portfolioVideo from '../assets/portfolioVideo.mp4';

class VideoCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: 'false',
			ClassNames: {
				VideoCard: 'VideoCard',
				Video: 'Video',
				VideoText: 'VideoText',
				VideoTextFlipped: 'VideoTextFlipped'
			}
		};
	}

	handleVideoCardFlip = () => {
		if (this.state.clicked == 'false') {
			let ClassNames = {};
			Object.keys(this.state.ClassNames).forEach(key => {
				ClassNames[key] = key + " clicked";
			});
			this.setState({
				clicked: 'true',
				ClassNames: ClassNames
			})
		}
		else if (this.state.clicked == 'true') {
			let ClassNames = {};
			Object.keys(this.state.ClassNames).forEach(key => {
				ClassNames[key] = key;
			});
			this.setState({
				clicked: 'false',
				ClassNames: ClassNames
			});
		}
	}

	render() {

		return(
			<div className={this.state.ClassNames.VideoCard} onClick={this.handleVideoCardFlip}>
				<div className="AspectRatioBox">
					<video className={this.state.ClassNames.Video} muted loop autoPlay>
						<source src={portfolioVideo} type="video/mp4"/>
					</video>
					<div className="FlexBoxCentering">
						<p className={this.state.ClassNames.VideoText}>
							Click Me!
						</p>
					</div>
					<div className="FlexBoxCentering">
						<p className={this.state.ClassNames.VideoTextFlipped}>
							Check the backs for more info!
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default VideoCard;