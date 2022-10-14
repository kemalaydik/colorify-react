/* eslint-disable import/no-anonymous-default-export */
import './css/app.css';
import Palette from './Palette';
import { createContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import seedColors from './seedColors';
import Home from './Home';
import New from './New/New';
import { ReactComponent as Logo } from './assets/logoKA.svg';
export const UserContext = createContext();

export default () => {
	return (
		<>
			<UserContext.Provider value={seedColors}>
				<Link to='/'>
					<Logo className='w-12 h-12 fixed bottom-5 right-5' />
				</Link>
				<div className='bg'></div>
				<div className='bg bg2'></div>
				<div className='bg bg3'></div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='palette/:id' element={<Palette />} />
					<Route path='palette/new' element={<New />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
};
