import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './App';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LinkCard from './LinkCard';
import { Card } from 'flowbite-react';

export default function Home() {
	const seedColors = useContext(UserContext);
	const navigate = useNavigate();
	function handleClick() {}

	return (
		<>
			<Link to='palette/new'>
				<AddCircleIcon className='absolute top-6 right-10 text-xl text-indigo-700' sx={{ fontSize: 50 }} />
			</Link>
			<nav className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10 mt-20 w-4/5 mx-auto my-5'>
				{seedColors.map(seed => (
					<Card key={seed.id} style={{ width: '100%' }} onClick={() => navigate(`/palette/${seed.id}`)} role='button'>
						<LinkCard {...seed} />
					</Card>
				))}
			</nav>
		</>
	);
}
