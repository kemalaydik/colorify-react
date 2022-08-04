import React, { Component } from 'react';
import { v4 } from 'uuid';

export default class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = { width: '', height: '', bgColor: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.createBox({ ...this.state, id: v4() });
		this.setState({ width: '', height: '', bgColor: '' });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='width'>Width</label>
				<input type='text' id='width' name='width' value={this.state.width} onChange={this.handleChange} />
				<label htmlFor='height'>height</label>
				<input type='text' id='height' name='height' value={this.state.height} onChange={this.handleChange} />
				<label htmlFor='bgColor'>bgColor</label>
				<input type='text' id='bgColor' name='bgColor' value={this.state.bgColor} onChange={this.handleChange} />
				<button>Add item</button>
			</form>
		);
	}
}
