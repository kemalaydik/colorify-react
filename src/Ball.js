import React, { Component } from 'react';

export default class Ball extends Component {
	render() {
		return <div className='flex items-center justify-center w-12 h-12 font-bold text-white bg-red-500 rounded-full'>{this.props.num}</div>;
	}
}
