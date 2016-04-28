import {compose} from 'react-komposer';
import PickMyBrainComp from '/client/components/pickMyBrain.jsx';

const composerFxn = (props, onData) => {
	let links = [
		{desc: "Great link1", href: "#"},
		{desc: "Great link2", href: "#"},
		{desc: "Great link3", href: "#"},
		{desc: "Great link4", href: "#"},
		{desc: "Great link5", href: "#"},
		{desc: "Great link6", href: "#"},
	];

	onData(null, {links});
}

export default PickMyBrain = compose(composerFxn)(PickMyBrainComp);