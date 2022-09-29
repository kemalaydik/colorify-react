import Palette from './Palette';
import { createContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import seedColors from './seedColors';

const Home = () => {
	return (
		<nav>
			<Link to={'palette/material-ui-colors'}>Material UI Colors</Link>
			<Link to={'palette/flat-ui-colors-v1'}>Flat UI Colors</Link>
			<Link to={'palette/flat-ui-colors-dutch'}>Flat UI Colors Dutch</Link>
		</nav>
	);
};

const App = () => {
	const UserContext = createContext();
	return (
		<>
			<UserContext.Provider value={seedColors}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='palette/:id' element={<Palette />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
};
