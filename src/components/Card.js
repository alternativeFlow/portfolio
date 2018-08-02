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
				CardImage: 'CardImage',
				CardTextFlipped: 'CardTextFlipped',
				CardLinksFlipped: 'CardLinksFlipped'
			}
		};
	}

	handleClick = () => {
		let oldClassNames = this.state.ClassNames;
		if (this.state.clicked === 'false') {
			let ClassNames = {};
			Object.keys(oldClassNames).forEach(key => {
				ClassNames[key] = oldClassNames[key] + " clicked";
			});
			this.setState({
				clicked: 'true',
				ClassNames: ClassNames
			});
		}
		else if (this.state.clicked === 'true') {
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
						{ this.props.cardTitle ? (
							<p className={this.state.ClassNames.CardTitle}>
								{this.props.cardTitle}
							</p>
							) : (
							<div></div>
						)}
						{ this.props.cardImage ? (
							<div className={this.state.ClassNames.CardImage}>
								{this.props.cardImage}
							</div>
							) : (
							<div></div>
						)}
					</div>
					<div className="FlexBoxCentering">
						<div className={this.state.ClassNames.CardTextFlipped}>
							{this.props.cardTextFlipped}
						</div>
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
	cardImage: PropTypes.element,
	cardTextFlipped: PropTypes.element,
	cardLinksFlipped: PropTypes.element
}
export default Card;