import React from 'react';

export default ResumeButton = () => (
	<a className="resumeButton--button waves-effect waves-light waves-accent" href={"/files/resume.pdf"} download>
		<div className="resumeButton--textBox">
			<p className="resumeButton--bigText">
				RESUME
				<img src={"/assets/resumeButton--squigglyLine.svg"} className="resumeButton--squigglyLine" />
				<img src={"/assets/resumeButton--squigglyLine.svg"} className="resumeButton--squigglyLine" />
				<img src={"/assets/resumeButton--squigglyLine.svg"} className="resumeButton--squigglyLine" />
			</p>
		</div>
	</a>
)