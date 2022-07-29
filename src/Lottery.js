import React, { Component } from 'react';
import Ball from './Ball';

export default class Lottery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			winningNumbers: Array.from({ length: this.props.numBalls }),
			maxCount: this.props.maxCount
		};
		this.genRndArray = this.genRndArray.bind(this);
	}

	genRndArray() {
		this.setState({ winningNumbers: this.state.winningNumbers.map(() => ~~(Math.random() * this.props.maxCount) + 1) });
	}
	render() {
		return (
			<>
				<div className='flex'>
					{this.state.winningNumbers.map((e, i) => (
						<Ball key={i} num={e} />
					))}
				</div>
				<button onClick={this.genRndArray} className='px-4 py-2 rounded-lg bg-slate-500'>
					asdad
				</button>
			</>
		);
	}
}
