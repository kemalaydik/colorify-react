import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const Home = () => {
	return (
		<h1>
			<Link to={'palette/material-ui-colors'}>Material UI Colors</Link>
		</h1>
	);
};

const App = () => {
	const findId = id => seedColors.find(e => e.id === id);

	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='palette/:id' element={<Palette {...generatePalette(findId(params.id))} />} />
			</Routes>
		</>
	);
};

export default App;
