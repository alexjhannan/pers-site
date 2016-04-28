import React from 'react';
import PickMyBrain from '/client/containers/pickMyBrain.jsx';

let MainView = React.createClass({
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col s12 m6">
						<img src={"/assets/intro--logo.png"} />
					</div>
					<div className="col s12 m6">
						<div className="mainView--spacer hide-on-small-only"></div>
						<PickMyBrain />
					</div>
				</div>
			</div>
		);
	}
});

export default MainView;