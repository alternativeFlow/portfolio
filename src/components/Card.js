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
				CardTitle: 'CardTitle',
				CardTextFlipped: 'CardTextFlipped',
				CardLinksFlipped: 'CardLinksFlipped'
			}
		};
	}

	handleClick = () => {
		let oldClassNames = this.state.ClassNames;
		if (this.state.clicked == 'false') {
			let ClassNames = {};
			Object.keys(oldClassNames).forEach(key => {
				ClassNames[key] = oldClassNames[key] + " clicked";
			});
			this.setState({
				clicked: 'true',
				ClassNames: ClassNames
			});
		}
		else if (this.state.clicked == 'true') {
			let ClassNames = {};
			Object.keys(oldClassNames).forEach(key => {
				ClassNames[key] = oldClassNames[key].substring(0, oldClassNames[key].indexOf(' '));
			});
			this.setState({
				clicked: 'false',
				ClassNames: ClassNames
			});
		}
	}

	render() {

		return(
			<div className={this.state.ClassNames.Card} onClick={this.handleClick}>
				<div className="AspectRatioBox">
					<div className="FlexBoxCentering">
						<p className={this.state.ClassNames.CardTitle}>
							{this.props.cardTitle}
						</p>
					</div>
					<div className="FlexBoxCentering">
						<p className={this.state.ClassNames.CardTextFlipped}>
							{this.props.cardTextFlipped}
						</p>
						<div className={this.state.ClassNames.CardLinksFlipped}>
							{this.props.cardLinksFlipped}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	card: PropTypes.string.isRequired,
	cardTitle: PropTypes.string,
	cardTextFlipped: PropTypes.element,
	cardLinksFlipped: PropTypes.element
}
export default Card;