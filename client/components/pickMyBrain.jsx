import React from 'react';

export default PickMyBrain = React.createClass({
	getInitialState() {
		let unseenLinks = this.resetUnseenLinks();

		return {
			selected: null,
			unseenLinks
		}
	},
	resetUnseenLinks() {
		let unseenLinks = this.props.links.map((el, i) => {
			return i;
		});

		return unseenLinks;
	},
	render() {
		if (this.state.selected !== null) {
			return this.renderThinking();
		} else {
			return this.renderNotThinking();
		}
	},
	renderThinking() {
		let closeBubble = () => {
			if (!this.state.unseenLinks.length) {
				// reset the list if out of unseenLinks
				let unseenLinks = this.resetUnseenLinks();
				return this.setState({selected: null, unseenLinks});
			} else {
				this.setState({selected: null});
			}
		}

		let link = this.props.links[this.state.selected];

		return (
			<div>
				<div className="pickMyBrain--thoughtBubble"><a href={link.href}>{link.desc}</a></div>
				<button onClick={closeBubble}>Click!</button>
			</div>
		)
	},
	renderNotThinking() {
		let pickLink = () => {
			let links = this.props.links, unseenLinks = this.state.unseenLinks;

			// choose a random index from unseenLinks, which is itself an array of indices
			let index = Math.floor(Math.random()*unseenLinks.length);

			let selected = unseenLinks[index];
			// remove that index from unseenLinks
			unseenLinks.splice(unseenLinks.indexOf(selected), 1);
			// and update both values in state
			return this.setState({selected, unseenLinks});
		}

		return (
			<div>	
				<div className="pickMyBrain--thoughtBubble">There is no quote here.</div>
				<button onClick={pickLink}>Click!</button>
			</div>
		)
	}
});