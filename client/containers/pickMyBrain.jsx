import {compose} from 'react-komposer';
import PickMyBrainComp from '/client/components/pickMyBrain.jsx';

const composerFxn = (props, onData) => {
	let links = [
		{desc: "Cracked After Hours: Which Ninja Turtle Are You?", href: "https://www.youtube.com/watch?v=dtsmluPK7Ug"},
		{desc: "Simon Sinek: How Great Leaders Inspire", href:"https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action?language=en"},
		{desc: "Prince Was Way Better At Guitar Than Everyone Else", href:"https://www.youtube.com/watch?v=6SFNW5F8K9Y"},
		{desc: "The Kuhn Cycle of Scientific Revolutions", href:"http://www.thwink.org/sustain/glossary/KuhnCycle.htm"},
		{desc: "Fixed and Growth Mindsets Shape Our Lives", href:"https://www.brainpickings.org/2014/01/29/carol-dweck-mindset/"},
		{desc: "Frontend Masters: Web Workshops", href: "frontendmasters.com"},
		{desc: "FunFunFunction: Functional JavaScript Video Series", href: "https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q"}
	];

	onData(null, {links});
}

export default PickMyBrain = compose(composerFxn)(PickMyBrainComp);