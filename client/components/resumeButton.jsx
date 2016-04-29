import React from 'react';

export default ResumeButton = () => (
	<div className="resumeButton--button waves-effect waves-light waves-accent">
		<div className="resumeButton--textBox">
			<p className="resumeButton--bigText">
				RESUME
				<img src={"/assets/resumeButton--squigglyLine.svg"} className="resumeButton--squigglyLine" />
				<img src={"/assets/resumeButton--squigglyLine.svg"} className="resumeButton--squigglyLine" />
				<img src={"/assets/resumeButton--squigglyLine.svg"} className="resumeButton--squigglyLine" />
			</p>
		</div>
	</div>
)