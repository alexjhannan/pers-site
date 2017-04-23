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
			<div className="container">
				<div className="col s12 l10 offset-l1">
					<Intro />
				</div>
				<div className="mainView__miscRow">
					<div className="mainView__miscOne">
						<ResumeButton />
					</div>
					<div className="mainView__miscTwo">
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
