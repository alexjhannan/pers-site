import {compose} from 'react-komposer';
import PickMyBrainComp from '/client/components/pickMyBrain.jsx';

const composerFxn = (props, onData) => {
	let links = [
		{desc: "Cracked After Hours: Which Ninja Turtle Are You?", href: "https://www.youtube.com/embed/dtsmluPK7Ug"},
		{desc: "Simon Sinek: Start With Why", href:"https://www.youtube.com/embed/sioZd3AxmnE"},
		{desc: "Prince Was Way Better At Guitar Than Everyone Else", href:"https://www.youtube.com/embed/6SFNW5F8K9Y"},
		{desc: "The Kuhn Cycle of Scientific Revolutions", href:"http://www.thwink.org/sustain/glossary/KuhnCycle.htm"},
		{desc: "Fixed and Growth Mindsets Shape Our Lives", href:"https://www.brainpickings.org/2014/01/29/carol-dweck-mindset/"},
		{desc: "Frontend Masters: Web Workshops", href: "https://www.frontendmasters.com"},
		{desc: "FunFunFunction: Some General Views on Coding", href: "https://www.youtube.com/embed/TbLvrszqi_8"},
		{desc: "Kurt Vonnegut on the Shape of Stories", href: "https://www.youtube.com/embed/oP3c1h8v2ZQ"},
		{desc: "Everything is a Remix Pt. 2", href: "https://www.youtube.com/embed/Z-HuenDPZw0"},
		{desc: "Jimquisition: The Perfect Pasta Sauce", href: "https://www.youtube.com/embed/irZ-159xsZY"},
		{desc: "Weasel vs. LHC Headliner Ends in Double TKO", href: "http://www.npr.org/sections/thetwo-way/2016/04/29/476154494/weasel-shuts-down-world-s-most-powerful-particle-collider"}
	];

	onData(null, {links});
}

export default PickMyBrain = compose(composerFxn)(PickMyBrainComp);