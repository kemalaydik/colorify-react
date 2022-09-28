import Palette from './Palette';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
	return (
		<h1>
			<Link to={'palette/material-ui-colors'}>Material UI Colors</Link>
		</h1>
	);
};

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='palette/:id' element={<Palette />} />
			</Routes>
		</>
	);
};

export default App;
