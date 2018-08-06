import React from 'react';
import PropTypes from 'prop-types';
import "../CSS/Menu.css";


class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: 'false',
			ClassNames: {
				Menu: 'Menu',
				MenuButton: 'MenuButton',
				MenuButtonBar: 'MenuButtonBar',
				MenuItemOne: 'MenuItemOne',
				MenuItemTwo: 'MenuItemTwo'
			}
		};
	}

	handleClick = () => {
		if (this.state.clicked === 'false') {
			this.props.onMenuClickDetectionForTitle(true);

			let ClassNames = {};
			Object.keys(this.state.ClassNames).forEach(key => {
				ClassNames[key] = key + " clicked";
			});
			this.setState({
				clicked: 'true',
				ClassNames: ClassNames
			});
		}
		else if (this.state.clicked === 'true') {
			this.props.onMenuClickDetectionForTitle(false);

			let ClassNames = {};
			Object.keys(this.state.ClassNames).forEach(key => {
				ClassNames[key] = key;
			});
			this.setState({
				clicked: 'false',
				ClassNames: ClassNames
			});
		}
	};

	handleItemOneClick = () => {
		this.handleClick();
		//Scroll down to work page
		document.documentElement.scrollTop = window.innerHeight/2;
	};

	handleItemTwoClick = () => {
		this.handleClick();
		//Move Work Page up to get it out of the way
		this.props.refs.workPageRef.current.setAttribute('style', 'transform: translateY('+(-window.innerHeight/2)+'px)');
		//Scroll down to contact page
		document.documentElement.scrollTop = window.innerHeight*1.11;	
	};

	render() {

		return(
			<div className={this.state.ClassNames.Menu}>
				<div className={this.state.ClassNames.MenuButton} onClick={this.handleClick}>
					<div className={this.state.ClassNames.MenuButtonBar}>
					</div>
				</div>
				<p className={this.state.ClassNames.MenuItemOne} onClick={this.handleItemOneClick}>
					Work
				</p>
				<p className={this.state.ClassNames.MenuItemTwo} onClick={this.handleItemTwoClick}>
					Contact
				</p>
			</div>
		);
	}
}

Menu.propTypes = {
	refs: PropTypes.shape({}).isRequired,
	onMenuClickDetectionForTitle: PropTypes.func.isRequired
}

export default Menu;