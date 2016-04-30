import React from 'react';

let MainView = React.createClass({
	componentDidMount() {
		$(window).resize(this.addVerticalOffset);
	},
	addVerticalOffset() {
		let windowHeight = $(window).height();
		let contentHeight = $(".mainView--container").height();

		if (windowHeight > contentHeight) {
			let verticalOffset = (windowHeight - contentHeight) / 2.2 + "px";
			$(".mainView--container").css("marginTop", verticalOffset);
		} else {
			$(".mainView--container").css("marginTop", 0);
		}
	},
	render() {
		return (
			<div className="container mainView--container">
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