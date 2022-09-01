import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import Dogs from './Dogs';
import Nav from './nav';
import Home from './home';
const App = () => {
	const location = useLocation();
	console.log(location);
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-200 via-orange-100 to-gray-300'>
			<Nav />
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path=':dogs' element={<Dogs />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
