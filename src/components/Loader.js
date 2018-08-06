import React from 'react';
import PropTypes from 'prop-types';
import "../CSS/Loader.css";

class Loader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaderClassName: 'LoaderWrapper'
		};
	}

	componentDidMount() {
		setTimeout(this.handleLoadingFinished, 2000);
	}

	handleLoadingFinished = () => {
		this.setState({
			loaderClassName: 'LoaderWrapper done'
		});
	};

	render() {

		return(
			<div className={this.state.loaderClassName}>
				<div className="Loader">
				</div>
			</div>

		);
	}
}


export default Loader;