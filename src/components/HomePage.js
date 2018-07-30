import React from 'react';
import PropTypes from 'prop-types';
import "../CSS/HomePage.css";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {

		return(
			<div className="TitlePageContainer">
				<div className="Menu">
				</div>
				<h1 className="TitleText">Developer</h1>
				<div className="VideoCard">
				</div>
			</div>
		);
	}
}

export default HomePage;