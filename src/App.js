import React, { Component } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Fish from './Fish';
import Soda from './Soda';
import Chips from './Chips';
import VendingMachine from './VendingMachine';

export default class App extends Component {
	render() {
		return (
			<>
				<nav className='flex justify-evenly'>
					<NavLink className={({ isActive }) => isActive && 'pata'} to='fish'>
						Fish
					</NavLink>
					<NavLink className={({ isActive }) => isActive && 'pata'} to='soda'>
						Soda
					</NavLink>
					<NavLink className={({ isActive }) => isActive && 'pata'} to='chips'>
						Chips
					</NavLink>
				</nav>
				<Routes>
					<Route path='/' element={<VendingMachine />}>
						<Route path='fish' element={<Fish />} />
						<Route path='soda' element={<Soda />} />
						<Route path='chips' element={<Chips />} />
					</Route>
				</Routes>
			</>
		);
	}
}
