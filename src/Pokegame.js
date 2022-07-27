import React, { Component } from 'react';
import Pokedex from './Pokedex';

const pokemons = [
	{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
	{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
	{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
	{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
	{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
	{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
	{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
	{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

export default class Pokegame extends Component {
	render() {
		const newArr = pokemons
			.map(x => [Math.random(), x])
			.sort(([a], [b]) => a - b)
			.map(([_, x]) => x);
		const deck1 = newArr.slice(0, newArr.length / 2);
		const deck2 = newArr.slice(newArr.length / 2);
		const score1 = deck1.reduce((acc, el) => acc + el.base_experience, 0);
		const score2 = deck2.reduce((acc, el) => acc + el.base_experience, 0);
		return (
			<>
				<Pokedex arr={deck1} sum={score1} isWinner={score1 > score2} />
				<Pokedex arr={deck2} sum={score2} isWinner={score2 > score1} />
			</>
		);
	}
}
