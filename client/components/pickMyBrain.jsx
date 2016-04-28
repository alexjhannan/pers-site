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
	componentDidUpdate() {
		if (this.state.selected !== null) {
			$(".pickMyBrain--thoughtBubble, .pickMyBrain--link").animate({opacity: 1});
		} else {
			$(".pickMyBrain--thoughtBubble").animate({opacity: 0});
		}
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
			<div className="pickMyBrain--container">
				<img className="pickMyBrain--brainAndSign" src={"/assets/pickMyBrain--brainAndSign.png"} onClick={closeBubble} />
				<div className="pickMyBrain--thoughtBubble">
					<div className="pickMyBrain--linkContainer">
					<a className="pickMyBrain--linkText" href={link.href} target="_blank">{link.desc}</a>
					</div>
				</div>
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
			<div className="pickMyBrain--container">	
				<img className="pickMyBrain--brainAndSign" src={"/assets/pickMyBrain--brainAndSign.png"} onClick={pickLink} />
				<div className="pickMyBrain--thoughtBubble">
				</div>
			</div>
		)
	}
});