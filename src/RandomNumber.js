import React, { Component } from 'react';

export default class RandomNumber extends Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		const number = ~~(Math.random() * 10);
		this.setState({ number });
	}
	render() {
		return (
			<>
				<h1 className='my-2 text-center'>{this.state.number}</h1>
				<button onClick={this.handleClick} className={`block px-4 py-2 mx-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700${this.state.number === 7 && ' hidden'}`}>
					test
				</button>
			</>
		);
	}
}
