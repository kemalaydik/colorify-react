import React, { Component } from 'react';

export default class Pokecard extends Component {
	render() {
		const { name, type, exp, id } = this.props;
		return (
			<div className='w-48 p-4 text-center rounded-md bg-neutral-200 hover:scale-[1.05] transition-all'>
				<h3 className='text-blue-500'>{name}</h3>
				<img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(id).padStart(3, 0)}.png`} alt='' />
				<h4>{type}</h4>
				<h4>{exp}</h4>
			</div>
		);
	}
}
