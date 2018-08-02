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
		if (this.state.clicked == 'false') {
			let ClassNames = {};
			Object.keys(this.state.ClassNames).forEach(key => {
				ClassNames[key] = key + " clicked";
			});
			this.setState({
				clicked: 'true',
				ClassNames: ClassNames
			});
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
			<div className={this.state.ClassNames.Menu}>
				<div className={this.state.ClassNames.MenuButton} onClick={this.handleClick}>
					<div className={this.state.ClassNames.MenuButtonBar}>
					</div>
				</div>
				<p className={this.state.ClassNames.MenuItemOne}>
					Work
				</p>
				<p className={this.state.ClassNames.MenuItemTwo}>
					Contact
				</p>
			</div>
		);
	}
}

export default Menu;