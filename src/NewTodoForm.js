import React, { Component } from 'react';
import { v4 } from 'uuid';

export default class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ todo: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo({ ...this.state, id: v4() });
		this.setState({ todo: '' });
	}

	render() {
		return (
			<form className='mx-auto mt-5' onSubmit={this.handleSubmit}>
				<div className='flex'>
					<div className='relative w-full'>
						<input
							type='text'
							id='todo'
							className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
							placeholder='New Todo'
							onChange={this.handleChange}
							value={this.state.todo}
						/>
						<button
							type='submit'
							className='absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-400 rounded-r-lg border border-gray-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
							Add TODO
						</button>
					</div>
				</div>
			</form>
		);
	}
}
