import React from 'react';

export default ResumeButton = () => (
	<a className="resumeButton--button waves-effect waves-light waves-accent" href={"/files/resume.pdf"} download="Resume - Alex Hannan">
		<div className="resumeButton--textBox">
			<p>
				RESUME
				<span className="resumeButton--smallText">(download PDF)</span>
				<img src={"/assets/resumeButton--squigglyLine.svg"} />
				<img src={"/assets/resumeButton--squigglyLine.svg"} />
				<img src={"/assets/resumeButton--squigglyLine.svg"} />
			</p>
		</div>
	</a>
)