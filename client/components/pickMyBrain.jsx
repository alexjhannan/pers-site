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
		let selected = this.state.selected;

		if (selected !== null) {
			$(".pickMyBrain--thoughtBubble, .pickMyBrain--linkText, .pickMyBrain--thoughtBubbleArrow").animate({opacity: 1}, 1000);

			let link = this.props.links[selected];

			$('.modal-trigger').leanModal({ready: () => {
					// inject content into iframe on modal open
					$("#pickMyBrain--iframe").attr("src", link.href);
				}, complete: () => {
					// remove content from iframe on modal close
					$("#pickMyBrain--iframe").attr("src", "");
				}
			});
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
			<div>
				<div className="pickMyBrain--container">
					<img className="pickMyBrain--brainAndSign" src={"/assets/pickMyBrain--brainAndSign.png"} onClick={closeBubble} />
					<svg className="pickMyBrain--thoughtBubble" width="280px" height="194px" viewBox="-10 0 290 194">
			            <path className="pickMyBrain--thoughtBubblePathAnimated" fill="none" strokeWidth="5" stroke="#07939E" strokeLinecap="round" d="M155,7.10542736e-14 C131.000003,4 139.329419,25 154.999997,32 C170.670575,39 231.619853,30.0923137 253.999997,59 C277.999997,90.0000006 290.329414,187.743695 256.329414,187.743695 C222.329414,187.743695 157.329427,187.743695 139.32942,187.743695 C121.329412,187.743695 73.3294144,187.743695 24.3294145,187.743695 C-24.6705855,187.743695 13.9656901,114.53646 24.3294136,95.0000018 C35.9999995,73.0000018 43,70.9999989 50,51.9999995 C57,33.0000001 30.6705884,29.9999995 20.0000009,51.9999993 C3.47981744,86.0603573 175.6123,34.5265105 205,54.8718414 C218.000006,63.8718455 209,73 209,73"></path>
					</svg>
					<img className="pickMyBrain--thoughtBubbleArrow" src={"/assets/pickMyBrain--thoughtBubbleArrow.svg"} />
					<div className="pickMyBrain--linkContainer">
						<a className="pickMyBrain--linkText modal-trigger" href="#pickMyBrain--modal" >{link.desc}</a>
					</div>
				</div>

				<div id="pickMyBrain--modal" className="modal modal-footer">
					<div id="pickMyBrain--modalContent" className="modal-content center">
						<h5 className="accentText">{link.desc}</h5>
						<div className="row">
							<div className="col s10 offset-s1">
								<div className="video-container">
									<iframe id="pickMyBrain--iframe"></iframe>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col s6 center">
							<button href="#!" className="modal-action modal-close waves-effect waves-light waves-accent btn-flat white-text">Close</button>
						</div>
						<div className="col s6 center">
							<button href={link.href} target="_blank" className="modal-action modal-close waves-effect waves-light waves-accent btn-flat white-text">Open in New Tab</button>
						</div>
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
				<svg className="pickMyBrain--thoughtBubble" width="280px" height="194px" viewBox="-10 0 290 194">
		            <path fill="none" strokeWidth="5" stroke="#07939E" strokeLinecap="round" d="M209,73 C209,73 218.000006,63.8718455 205,54.8718414 C175.6123,34.5265105 3.47981744,86.0603573 20.0000009,51.9999993 C30.6705884,29.9999995 57,33.0000001 50,51.9999995 C43,70.9999989 35.9999995,73.0000018 24.3294136,95.0000018 C13.9656901,114.53646 -24.6705855,187.743695 24.3294145,187.743695 C73.3294144,187.743695 121.329412,187.743695 139.32942,187.743695 C157.329427,187.743695 222.329414,187.743695 256.329414,187.743695 C290.329414,187.743695 277.999997,90.0000006 253.999997,59 C231.619853,30.0923137 170.670575,39 154.999997,32 C139.329419,25 131.000003,4 155,1.56319402e-13" id="Path-43"></path>
				</svg>
				<img className="pickMyBrain--thoughtBubbleArrow" src={"/assets/pickMyBrain--thoughtBubbleArrow.svg"} />
			</div>
		)
	}
});