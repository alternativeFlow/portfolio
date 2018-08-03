import React from 'react';
import PropTypes from 'prop-types';

import resume from '../assets/SoftwareDevResume.pdf';

class PdfPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {

		return(
			<div style={{height: '900px', width: 'inherit'}}>
				<iframe src={resume+'#zoom=100'} height='100%' width='100%' />
			</div>
		);
	}
}


export default PdfPage;