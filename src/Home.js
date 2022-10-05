import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './App';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LinkCard from './LinkCard';

export default () => {
	const seedColors = useContext(UserContext);

	return (
		<>
			<Link to='palette/new'>
				<AddCircleIcon className='absolute top-6 right-10 text-xl text-indigo-700' sx={{ fontSize: 50 }} />
			</Link>
			<nav className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10 mt-20 w-4/5 mx-auto my-5'>
				{seedColors.map(seed => (
					<Link key={seed.id} to={`palette/${seed.id}`} className='w-full'>
						<LinkCard {...seed} />
					</Link>
				))}
			</nav>
		</>
	);
};
