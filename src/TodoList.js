import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForom from './NewTodoForm';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		this.change = this.change.bind(this);
		this.state = {
			todos: []
		};
	}

	add(todo) {
		this.setState({ todos: [...this.state.todos, todo] });
	}

	remove(id) {
		this.setState({ todos: this.state.todos.filter(e => e.id !== id) });
	}

	change(id, todo) {
		const idx = this.state.todos.findIndex(todo => todo.id === id);
		this.setState({
			todos: this.state.todos.map((e, i) => {
				if (idx === i) e.todo = todo;
				return e;
			})
		});
	}

	render() {
		return (
			<>
				{this.state.todos.map(e => (
					<Todo todo={e.todo} key={e.id} removeTodo={this.remove} changeTodo={this.change} id={e.id} />
				))}
				<NewTodoForom addTodo={this.add} />
			</>
		);
	}
}
