import React, { Component } from 'react';
import axios from 'axios';
import JokeList from './JokeList';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { jokes: [] };
		this.handleGet = this.handleGet.bind(this);
	}

	async componentDidMount() {
		try {
			const {
				data: { results }
			} = await axios.get('https://icanhazdadjoke.com/search?limit=10', { headers: { Accept: 'application/json' } });
			this.setState(st => ({ jokes: st.jokes.concat(results) }));
		} catch (error) {
			console.log(error);
		}
	}

	async handleGet() {
		try {
			const {
				data: { results }
			} = await axios.get('https://icanhazdadjoke.com/search?limit=10', { headers: { Accept: 'application/json' } });
			this.setState(st => ({ jokes: st.jokes.concat(results) }));
		} catch (error) {
			console.log(error);
		}
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
						<button onClick={this.handleGet} className='px-4 py-2 font-bold text-gray-500 rounded bgColor hover:scale-105 hover:transition-all'>
							Button
						</button>
					</div>
					<JokeList jokes={this.state.jokes} />
				</div>
			</div>
		);
	}
}
