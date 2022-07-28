import React, { Component } from 'react';
import { SVGSource, SVG } from './img/svg';

export default class Dice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dice1: 3,
			dice2: 3,
			isRolling: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	genRnd() {
		return ~~(Math.random() * 6) + 1;
	}

	handleClick(e) {
		this.setState({ isRolling: true });
		setTimeout(() => this.setState({ dice1: this.genRnd(), dice2: this.genRnd(), isRolling: false }), 1000);
	}

	render() {
		return (
			<div className='flex flex-col justify-center mt-5'>
				<SVGSource />
				<div className={`flex justify-center h-48 gap-5 ${this.state.isRolling && 'animate-wiggle'}`}>
					<SVG id={this.state.dice1} width='100' />
					<SVG id={this.state.dice2} width='100' />
				</div>
				<button onClick={this.handleClick} class='relative px-6 py-2 group w-48 mx-auto'>
					<span class='absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
					<span class='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
					<span class='relative text-black group-hover:text-white'>{this.state.isRolling ? 'Rolling!!' : 'Roll'}</span>
				</button>
			</div>
		);
	}
}
