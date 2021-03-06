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
			$(".PickMyBrain__thoughtBubble, .PickMyBrain__linkText, .PickMyBrain__thoughtBubbleArrow").animate({opacity: 1}, 1000);

			let link = this.props.links[selected];

			$('.modal-trigger').leanModal({ready: () => {
					// inject content into iframe on modal open
					$("#PickMyBrain__iframe").attr("src", link.href);
				}, complete: () => {
					// remove content from iframe on modal close
					$("#PickMyBrain__iframe").attr("src", "");
				}
			});
		} else {
			$(".PickMyBrain__thoughtBubble, .PickMyBrain__thoughtBubbleArrow").animate({opacity: 0}, 250);
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
			<div className="PickMyBrain">
				<div className="PickMyBrain__content">
					<img className="PickMyBrain__brainAndSign" src={"/assets/PickMyBrain__brainAndSign.png"} onClick={closeBubble} />
					<svg className="PickMyBrain__thoughtBubble" width="280px" height="194px" viewBox="-10 0 290 194">
			            <path className="PickMyBrain__thoughtBubblePathAnimated" fill="none" strokeWidth="5" stroke="#07939E" strokeLinecap="round" d="M155,7.10542736e-14 C131.000003,4 139.329419,25 154.999997,32 C170.670575,39 231.619853,30.0923137 253.999997,59 C277.999997,90.0000006 290.329414,187.743695 256.329414,187.743695 C222.329414,187.743695 157.329427,187.743695 139.32942,187.743695 C121.329412,187.743695 73.3294144,187.743695 24.3294145,187.743695 C-24.6705855,187.743695 13.9656901,114.53646 24.3294136,95.0000018 C35.9999995,73.0000018 43,70.9999989 50,51.9999995 C57,33.0000001 30.6705884,29.9999995 20.0000009,51.9999993 C3.47981744,86.0603573 175.6123,34.5265105 205,54.8718414 C218.000006,63.8718455 209,73 209,73"></path>
					</svg>
					<img className="PickMyBrain__thoughtBubbleArrow" src={"/assets/PickMyBrain__thoughtBubbleArrow.svg"} />
					<div className="PickMyBrain__linkContainer">
						<a className="PickMyBrain__linkText modal-trigger" href="#PickMyBrain__modal" >{link.desc}</a>
					</div>
				</div>

				<div id="PickMyBrain__modal" className="modal modal-footer">
					<div id="PickMyBrain__modalContent" className="modal-content center">
						<h5 className="accentText">{link.desc}</h5>
						<div className="row">
							<div className="col s10 offset-s1">
								<div className="video-container">
									<svg width="77px" height="43px" viewBox="12 28 77 43" className="PickMyBrain__loadingSVGContainer">
									    <path stroke="#07939E" strokeWidth="2" strokeLinecap="round" fill="none" className="PickMyBrain__loadingSVG" d="M38.0272635,49.2867104 C7.3147174,42.0379027 12.164064,74.3164671 15.3969639,67.8506676 C18.6298637,61.3848681 31.561463,27.4394198 34.7943629,29.0558696 C38.0272627,30.6723195 20.2463136,66.2342188 28.3285632,66.2342177 C36.4108128,66.2342166 41.2601625,61.3848669 38.0272627,61.3848669 C34.7943629,61.3848669 46.1095123,72.7000174 52.5753119,66.2342166 C59.0411116,59.7684159 49.3424121,24.2065209 59.0411116,38.7545691 C68.7398111,53.3026173 31.561463,32.2887698 41.2601625,33.9052194 C50.958862,35.521669 75.2056108,50.0697185 73.5891609,40.371019 C71.9727109,30.6723196 73.5891609,79.1658181 68.7398111,67.8506676 C63.8904614,56.5355171 70.356261,51.6861695 76.8220607,54.9190683 C83.2878604,58.151967 91.3701099,32.2887691 86.5207602,37.1381189 C81.6714104,41.9874686 81.6714104,67.8506665 81.6714104,67.8506665"></path>
									</svg>
									<iframe id="PickMyBrain__iframe"></iframe>
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
			<div className="PickMyBrain">
				<div className="PickMyBrain__content">
					<img className="PickMyBrain__brainAndSign" src={"/assets/PickMyBrain__brainAndSign.png"} onClick={pickLink} />
					<svg className="PickMyBrain__thoughtBubble" width="280px" height="194px" viewBox="-10 0 290 194">
			            <path fill="none" strokeWidth="5" stroke="#07939E" strokeLinecap="round" d="M209,73 C209,73 218.000006,63.8718455 205,54.8718414 C175.6123,34.5265105 3.47981744,86.0603573 20.0000009,51.9999993 C30.6705884,29.9999995 57,33.0000001 50,51.9999995 C43,70.9999989 35.9999995,73.0000018 24.3294136,95.0000018 C13.9656901,114.53646 -24.6705855,187.743695 24.3294145,187.743695 C73.3294144,187.743695 121.329412,187.743695 139.32942,187.743695 C157.329427,187.743695 222.329414,187.743695 256.329414,187.743695 C290.329414,187.743695 277.999997,90.0000006 253.999997,59 C231.619853,30.0923137 170.670575,39 154.999997,32 C139.329419,25 131.000003,4 155,1.56319402e-13" id="Path-43"></path>
					</svg>
					<img className="PickMyBrain__thoughtBubbleArrow" src={"/assets/PickMyBrain__thoughtBubbleArrow.svg"} />
				</div>
			</div>
		)
	}
});
