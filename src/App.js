import React, { Component } from 'react';

export default class App extends Component {
	static defaultProps = {
		colorsArr: [
			'bg-zinc-500',
			'bg-neutral-500',
			'bg-stone-500',
			'bg-red -50',
			'bg-orange-500',
			'bg-amber-500',
			'bg-yellow-500',
			'bg-lime-500',
			'bg-green-500',
			'bg-emerald-500',
			'bg-teal-500',
			'bg-cyan-500',
			'bg-sky -50',
			'bg-blue-500',
			'bg-indigo-500',
			'bg-violet-500',
			'bg-purple-500',
			'bg-fuchsia-500',
			'bg-pink-500',
			'bg-rose-500'
		]
	};

	constructor(props) {
		super(props);
		this.state = {
			bgColor: Array.from({ length: 20 }, (e, i) => {
				return { [i]: this.genRndColor() };
			})
		};
		this.handleClick = this.handleClick.bind(this);
		this.genRndColor = this.genRndColor.bind(this);
	}

	genRndColor() {
		return this.props.colorsArr[~~(Math.random() * 20)];
	}

	handleClick(e) {
		const idx = e.target.getAttribute('idx');
		this.setState(st => (st.bgColor[idx] = { [idx]: this.genRndColor() }));
	}

	render() {
		return (
			<div className='grid grid-cols-5'>
				{this.state.bgColor.map((e, i) => (
					<div onClick={this.handleClick} className={`w-full h-24 ${e[i]}`} key={i} idx={i}></div>
				))}
			</div>
		);
	}
}
