import React from 'react';
import PropTypes from 'prop-types';
import "../CSS/Card.css";

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: 'false',
			ClassNames: {
				Card: this.props.card,
				CardTitle: 'CardTitle'
			}
		};
	}

	handleClick = () => {
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
			<div className={this.state.ClassNames.Card}>
				<div className="AspectRatioBox">
					<div className="FlexBoxCentering">
						<p className={this.state.ClassNames.CardTitle}>
							{this.props.cardTitle}
						</p>
					</div>
					<div className="FlexBoxCentering">
					</div>
					<div className="FlexBoxCentering">
					</div>
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	card: PropTypes.string.isRequired,
	cardTitle: PropTypes.string
}
export default Card;