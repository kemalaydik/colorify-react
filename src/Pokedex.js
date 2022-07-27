import React, { Component } from 'react';
import Pokecard from './Pokecard';

export default class Pokedex extends Component {
	render() {
		const { arr, sum, isWinner } = this.props;
		return (
			<div className='container mx-auto'>
				<h1 className='my-4 text-center text-gray-600'>
					Pokedex {sum} {isWinner && 'Winner!!!'}
				</h1>
				<div className='grid justify-between grid-cols-4 gap-4 justify-items-center'>
					{arr.map(e => (
						<Pokecard key={e.id} id={e.id} name={e.name} type={e.type} exp={e.base_experience} />
					))}
				</div>
			</div>
		);
	}
}
