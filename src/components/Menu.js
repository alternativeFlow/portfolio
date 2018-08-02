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

	handleItemOneClick = () => {
		this.handleClick();
		document.documentElement.scrollTop = window.innerHeight/2;
	}

	handleItemTwoClick = () => {
		this.handleClick();
		this.props.refs.workPageRef.current.setAttribute('style', 'transform: translateY('+(-window.innerHeight/2)+'px)');
		document.documentElement.scrollTop = window.innerHeight*1.11;	
	}

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
	refs: PropTypes.shape({}).isRequired
}

export default Menu;