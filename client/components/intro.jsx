import React from 'react';
import PalateCleanserLaunch from '/client/components/PalateCleanserLaunch.jsx';

export default Intro = () => (
	<div className="Intro">
		<div className="Intro__topBar">
			<div className="Intro__logoContainer">
				<img
					className="Intro__logo"
					src={"/assets/Intro__logo.png"}
				/>
			</div>
			<a href="https://www.github.com/alexjhannan" className="Intro__tab">
				<img
					className="Intro__tabImg"
					src={"/assets/Intro__gitHubIcon.svg"}
				/>
			</a>
			<a href="https://www.linkedin.com/in/alexjhannan" className="Intro__tab">
				<img
					className="Intro__tabImg"
					src={"/assets/Intro__linkedInIcon.svg"}
				/>
			</a>
		</div>
		<div className="Intro__textBox">
			<p>
				Welcome to my site! My name is Alex Hannan, and I’m an up-and-coming UI developer.
			</p>
			<p>
				My career began in college, where I tutored other students in math and physics. After receiving a B.S. in Physics, I took a job teaching high school math, physics, and test prep. Teaching others gave me a way to help people with their lives, but I longed for a way to make more of a difference.
			</p>
			<p>
				As a kid, I found meaning in technology. I learned more from the internet than I ever did in class, and no wonder - the net is a goldmine! Leading gaming organizations taught me real-world teamwork and leadership skills, and wandering around the digital world allowed me to grow my consciousness in my own unique way.
			</p>
			<p>
				Transitioning my career to tech just felt right - booming market, great opportunities, fun work, exciting atmosphere, maybe even a chance to make a big difference. I used my teaching experience to home-school myself in frontend development. Within a year, I’d worked on a production application serving a million users.
			</p>
			<p>
				Now I'm living in New York City, working for a mid-sized ed tech startup, and having a blast building cutting-edge UIs. I aspire to bridge the gap between design and development, introduce modern workflows like component-driven development, and create design patterns that enable non-engineers to join the conversation.
			</p>
			<p>
				If you'd like to learn more about me, check out my LinkedIn/Github profiles (tabs, above), my resume (the big button, below), or click on the brain to see some silly links (also below). Thanks for stopping by!
			</p>
		</div>
	</div>
)

// <p className="center">Hi! My name is Alex, and <span className="accentText">I’m a self-taught developer</span> in NYC.</p>
// <p>A year ago, I was teaching <span className="accentText">calculus</span> and <span className="accentText">physics</span> at a private high school. Disappointing career options had my eyes wandering towards other paths. The market is pushing towards tech, like it always has, and I have always been a techy at heart. It just made sense to make the switch.</p>
// <p>I was a bit skeptical of the canned education that bootcamps were offering, and I was also pretty confident in managing an educational plan. <span className="accentText">So, I taught myself how to code.</span> It didn’t hurt that I studied physics in school and had already learned many of the underlying concepts. <span className="accentText">Before I knew it, I was building and deploying web applications by myself.</span> Nowadays, I play with design on top of the full stack, and am always looking for the next skill to add to my capabilities.</p>
// <p>If you’re a part of a team that’s interested in an <span className="accentText">ambitious and independent coder</span>, or a client interested in hiring for some contract work, please <span className="accentText">feel free to email me at alexjhannan@gmail.com!</span> I am currently looking for both full-time positions and contracts.</p>
// <p className="center">Thanks, and have a great day!</p>
// <p>PS: Check out the table below for a brief overview of my skill set, my resume for a more in-depth look, or just “pick my brain” for some interesting links to get a sense of who I am.</p>
