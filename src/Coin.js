import React, { Component } from 'react';
import side1 from './img/1.jpg';
import side2 from './img/2.jpg';

export default class Coin extends Component {
	render() {
		return <img className='w-36' src={this.props.side ? side1 : side2} alt='coin' />;
	}
}
