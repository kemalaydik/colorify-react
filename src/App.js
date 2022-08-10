import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { deckId: '', cards: [], rotations: Array.from({ length: 52 }, () => ~~(Math.random() * 40)) };
		this.handleDraw = this.handleDraw.bind(this);
	}

	componentDidMount() {
		const getCard = async () => {
			const {
				data: { deck_id: deckId }
			} = await axios.get('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
			this.setState({ deckId: deckId });
		};
		getCard();
	}

	async handleDraw() {
		const { data } = await axios.get(`https://www.deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`);
		if (data.success) this.setState({ cards: [...this.state.cards, data.cards[0].image] });
		else alert('bitti');
	}

	render() {
		return (
			<>
				<button onClick={this.handleDraw} className='block px-4 py-2 mx-auto mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
					Pick a Card
				</button>
				<div className='relative flex justify-center'>
					{this.state.cards.map((e, i) => {
						const className = `block mx-auto absolute translate-x-4 skew-y-3 rotate-[${this.state.rotations[i]}deg] mt-6`;
						return <img key={i} className={className} src={e} alt={e} />;
					})}
				</div>
			</>
		);
	}
}
