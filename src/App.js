import React, { Component } from 'react';
import Lottery from './Lottery';

export default class App extends Component {
	render() {
		return (
			<div className='container flex justify-center gap-2 mx-auto my-3'>
				<Lottery className='' numBalls={3} maxCount={409} />
			</div>
		);
	}
}
