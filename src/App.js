import React, { Component } from 'react';
import TodoList from './TodoList';

export default class App extends Component {
	render() {
		return (
			<div className='p-4 mx-auto mt-5 bg-red-400 shadow-2xl w-96'>
				<TodoList />
			</div>
		);
	}
}
