import React, { Component } from 'react';
import { IoChevronDownCircleSharp, IoChevronUpCircleSharp } from 'react-icons/io5';

export default class Joke extends Component {
	render() {
		return (
			<div className='flex gap-3 py-2'>
				<div className='flex items-center justify-center gap-1'>
					<IoChevronDownCircleSharp className='cursor-pointer fill-lime-500 hover:fill-lime-700' />
					<div className='flex items-center justify-center flex-shrink-0 w-6 h-6 border-2 rounded-full border-lime-500'>0</div>
					<IoChevronUpCircleSharp className='cursor-pointer fill-lime-500 hover:fill-lime-700' />
				</div>
				<p>{this.props.joke}</p>
			</div>
		);
	}
}
