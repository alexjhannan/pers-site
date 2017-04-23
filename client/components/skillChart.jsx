import React from 'react';

export default SkillChart = () => (
	<div className="skillChart--container">
		<div className="row">
			<div className="skillChart--header col s5 offset-s1">Confident In</div>
			<div className="skillChart--text col s5">React, Storybook, Webpack, Git, JS, HTML, CSS</div>
		</div>
		<div className="skillChart--divider"></div
		><div className="row">
			<div className="skillChart--header col s5 offset-s1">Still Learning</div>
			<div className="skillChart--text col s5">Redux, Node, Sketch</div>
		</div>
		<div className="skillChart--divider"></div>
		<div className="row">
			<div className="skillChart--header col s5 offset-s1">Totally Usesless</div>
			<div className="skillChart--text col s5">Thai Boxing, Pen Dismantling, Wet Shaving</div>
		</div>
	</div>
);
