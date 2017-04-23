import React from 'react';

export default ResumeButton = () => (
	<a
		className="ResumeButton"
		href={"/files/resume.pdf"}
		download="Resume - Alex Hannan"
	>
		<img
			src={"/assets/Intro__resumeButton.png"}
			className="ResumeButton__img"
		/>
	</a>
)
