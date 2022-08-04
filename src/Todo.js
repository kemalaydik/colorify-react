import React, { Component } from 'react';
import { FaPenSquare, FaTrash } from 'react-icons/fa';

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { isEditing: false };
	}

	handleClick(event) {
		if (event.target.style.textDecoration) {
			event.target.style.removeProperty('text-decoration');
		} else {
			event.target.style.setProperty('text-decoration', 'line-through');
		}
	}

	handleEdit() {
		this.setState({ isEditing: true, todo: this.props.todo });
	}

	handleDelete() {
		this.props.removeTodo(this.props.id);
	}

	handleChange(e) {
		this.setState({ todo: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.changeTodo(this.props.id, this.state.todo);
		this.setState({ isEditing: false });
	}

	render() {
		if (this.state.isEditing) {
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
		return (
			<div className='flex justify-between p-3 text-white todo hover:bg-red-300' onClick={this.handleClick}>
				<p>{this.props.todo}</p>
				<div className='flex gap-1'>
					<FaPenSquare className='w-5 h-5 text-white' onClick={this.handleEdit} />
					<FaTrash className='w-5 h-5 text-white cursor-pointer' onClick={this.handleDelete} />
				</div>
			</div>
		);
	}
}
