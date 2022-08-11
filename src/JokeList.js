import React, { Component } from 'react';
import Joke from './Joke';

export default class JokeList extends Component {
	render() {
		return (
			<div className='w-full h-full px-2 py-5 pl-8 overflow-scroll text-sm divide-y-2 divide-gray-300 bg-slate-200 divide-solid'>
				{this.props.jokes.map(e => (
					<Joke joke={e.joke} key={e.id} />
				))}
			</div>
		);
	}
}
