import React from 'react';
import PickMyBrain from '/client/containers/pickMyBrain.jsx';

let MainView = React.createClass({
	render() {
		return (
			<div>
				<h1 className="center">Main View</h1>
				<PickMyBrain />
			</div>
		);
	}
});

export default MainView;