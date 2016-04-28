import {compose} from 'react-komposer';
import PickMyBrainComp from '/client/components/pickMyBrain.jsx';

const composerFxn = (props, onData) => {
	let links = [
		{desc: "Cracked After Hours: Which Ninja Turtle Are You?", href: "https://www.youtube.com/watch?v=dtsmluPK7Ug"},
		{desc: "Zero Punctuation: A Review of Dark Souls 3", href: "http://www.escapistmagazine.com/videos/view/zero-punctuation/116862-Dark-Souls-3-Review"},
		{desc: "Standpoint Theory: Understand Things More Good", href:"https://en.wikipedia.org/wiki/Standpoint_theory"},
		{desc: "TED Talk - Simon Sinek: How Great Leaders Inspire Action", href:"https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action?language=en"},
		{desc: "Prince Was Way Better At Guitar Than Everyone Else", href:"https://www.youtube.com/watch?v=6SFNW5F8K9Y"},
		{desc: "The Kuhn Cycle of Scientific Revolutions", href:"http://www.thwink.org/sustain/glossary/KuhnCycle.htm"},
		{desc: "Fixed and Growth Mindsets Shape Our Lives", href:"https://www.brainpickings.org/2014/01/29/carol-dweck-mindset/"},
		{desc: "Frontend Masters - Classes for Continued Web Education", href: "frontendmasters.com"},
		{desc: "FunFunFunction - A refreshing perspective on development", href: "https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q"}
	];

	onData(null, {links});
}

export default PickMyBrain = compose(composerFxn)(PickMyBrainComp);