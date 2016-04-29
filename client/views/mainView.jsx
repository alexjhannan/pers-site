import React from 'react';

let MainView = React.createClass({
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col s12 l10 offset-l1">
						<Intro />
					</div>
				</div>
				<div className="row">
					<div className="col s6 m4 offset-m2 l4 offset-l2">
						<ResumeButton />
					</div>
					<div className="col s6 m4 l4">
						<PickMyBrain />
					</div>
				</div>
				<div className="row">
					<div className="col s12 l10 offset-l1">
						<SkillChart />
					</div>
				</div>
			</div>
		);
	}
});

export default MainView;