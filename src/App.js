import React, { Component } from 'react';
import Coin from './Coin';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numTails: 0,
			numFlips: 0,
			numHeads: 0,
			rnd: 0
		};
		this.flip = this.flip.bind(this);
	}
	flip() {
		const rnd = ~~(Math.random() * 2);
		this.setState(st => ({
			numFlips: st.numFlips + 1,
			[rnd ? 'numTails' : 'numHeads']: rnd ? st.numTails + 1 : st.numHeads + 1,
			rnd
		}));
	}
	render() {
		return (
			<div className='container flex flex-col items-center justify-center gap-2 mx-auto my-3'>
				<h1>Lets flip a coin</h1>
				<Coin side={this.state.rnd} />
				<button
					onClick={this.flip}
					type='button'
					class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
					Flip me!!
				</button>
				<p>{`flips:${this.state.numFlips}, heads:${this.state.numHeads}, tails:${this.state.numTails}`}</p>
			</div>
		);
	}
}
