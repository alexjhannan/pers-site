import React from 'react';
import PickMyBrain from '/client/containers/pickMyBrain.jsx';
import Intro from '/client/components/intro.jsx';

let MainView = React.createClass({
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col s12 m6 l8">
						<Intro />
					</div>
					<div className="col s12 m6 l4">
						<div className="mainView--spacer hide-on-small-only"></div>
						<PickMyBrain />
					</div>
				</div>
			</div>
		);
	}
});

export default MainView;