import React from 'react';
import PickMyBrain from '/client/containers/pickMyBrain.jsx';

let MainView = React.createClass({
	render() {
		return (
			<div>
				<h1 className="center">Main View</h1>
				<div className="row">
					<div className="col s10 offset-s1 l4">
						<PickMyBrain />
					</div>
				</div>
			</div>
		);
	}
});

export default MainView;