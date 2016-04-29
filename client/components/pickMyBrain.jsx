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
			$(".pickMyBrain--thoughtBubble, .pickMyBrain--link, .pickMyBrain--thoughtBubbleArrow").animate({opacity: 1});
		} else {
			$(".pickMyBrain--thoughtBubble, .pickMyBrain--thoughtBubbleArrow").animate({opacity: 0}, 250);
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
				<svg className="pickMyBrain--thoughtBubble" width="280px" height="194px" viewBox="-10 0 290 194">
		            <path fill="none" strokeWidth="5" stroke="#07939E" strokeLinecap="round" d="M209,73 C209,73 218.000006,63.8718455 205,54.8718414 C175.6123,34.5265105 3.47981744,86.0603573 20.0000009,51.9999993 C30.6705884,29.9999995 57,33.0000001 50,51.9999995 C43,70.9999989 35.9999995,73.0000018 24.3294136,95.0000018 C13.9656901,114.53646 -24.6705855,187.743695 24.3294145,187.743695 C73.3294144,187.743695 121.329412,187.743695 139.32942,187.743695 C157.329427,187.743695 222.329414,187.743695 256.329414,187.743695 C290.329414,187.743695 277.999997,90.0000006 253.999997,59 C231.619853,30.0923137 170.670575,39 154.999997,32 C139.329419,25 131.000003,4 155,1.56319402e-13" id="Path-43"></path>
				</svg>
				<img className="pickMyBrain--thoughtBubbleArrow" src={"/assets/pickMyBrain--thoughtBubbleArrow.svg"} />
				<div className="pickMyBrain--linkContainer">
					<a className="pickMyBrain--linkText" href={link.href}>{link.desc}</a>
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
				<svg className="pickMyBrain--thoughtBubble" width="280px" height="194px" viewBox="-10 0 290 194">
		            <path fill="none" strokeWidth="5" stroke="#07939E" strokeLinecap="round" d="M209,73 C209,73 218.000006,63.8718455 205,54.8718414 C175.6123,34.5265105 3.47981744,86.0603573 20.0000009,51.9999993 C30.6705884,29.9999995 57,33.0000001 50,51.9999995 C43,70.9999989 35.9999995,73.0000018 24.3294136,95.0000018 C13.9656901,114.53646 -24.6705855,187.743695 24.3294145,187.743695 C73.3294144,187.743695 121.329412,187.743695 139.32942,187.743695 C157.329427,187.743695 222.329414,187.743695 256.329414,187.743695 C290.329414,187.743695 277.999997,90.0000006 253.999997,59 C231.619853,30.0923137 170.670575,39 154.999997,32 C139.329419,25 131.000003,4 155,1.56319402e-13" id="Path-43"></path>
				</svg>
				<img className="pickMyBrain--thoughtBubbleArrow" src={"/assets/pickMyBrain--thoughtBubbleArrow.svg"} />
			</div>
		)
	}
});