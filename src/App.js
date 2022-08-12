import React, { Component } from 'react';
import axios from 'axios';
import JokeList from './JokeList';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = JSON.parse(localStorage.getItem('icanhazdadjoke')) || { page: 1, jokes: [] };
		this.getJokes = this.getJokes.bind(this);
		this.handleVote = this.handleVote.bind(this);
	}

	push2LS() {
		localStorage.setItem('icanhazdadjoke', JSON.stringify(this.state));
	}

	async getJokes() {
		const axiosConfig = { headers: { Accept: 'application/json' }, params: { page: this.state.page, limit: 10 } };
		try {
			const {
				data: { results }
			} = await axios.get('https://icanhazdadjoke.com/search', axiosConfig);
			const fResults = results.map(e => ({ ...e, score: 0 }));
			this.setState(st => {
				return { jokes: st.jokes.concat(fResults), page: this.state.page + 1 };
			}, this.push2LS);
		} catch (error) {
			console.log(error);
		}
	}

	handleVote(id, delta) {
		this.setState(
			{
				jokes: this.state.jokes.map(e => (e.id === id ? { ...e, score: e.score + delta } : e)).sort((a, b) => b.score - a.score)
			},
			() => this.push2LS()
		);
	}

	componentDidMount() {
		if (this.state.jokes.length) return;
		this.getJokes();
	}

	render() {
		return (
			<div className='flex items-center justify-center h-screen min-h-screen bgColor'>
				<div className='flex w-5/6 h-4/6'>
					<div className='flex flex-col items-center justify-center h-full scale-110 bg-blue-500 basis-1/3'>
						<h1 className='mb-3 font-bold'>
							Dad <span className='font-thin'>Jokes</span>
						</h1>
						<p className='mb-3 text-9xl'>🤣</p>
						<button onClick={this.getJokes} className='px-4 py-2 font-bold text-gray-500 rounded bgColor hover:scale-105 hover:transition-all'>
							Button
						</button>
					</div>
					<JokeList jokes={this.state.jokes} handleVote={this.handleVote} />
				</div>
			</div>
		);
	}
}
