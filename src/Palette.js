/* eslint-disable import/no-anonymous-default-export */
import ColorCard from './ColorCard';
import { useState, useContext } from 'react';
import Slider from '@mui/material/Slider';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SelectColor from './SelectColor';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams } from 'react-router-dom';
import { UserContext } from './App';
import generatePalette from './colorHelpers';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
export default () => {
	const seedColors = useContext(UserContext);
	const findId = id => seedColors.find(e => e.id === id);
	const { id } = useParams();
	const { paletteName, emoji, shades } = generatePalette(findId(id));
	const [level, setLevel] = useState(500);
	const [colorMode, setColorMode] = useState('colorHex');

	const changeColor = mode => setColorMode(mode);

	const marks = [
		{ value: 100, label: '100' },
		{ value: 200, label: '200' },
		{ value: 300, label: '300' },
		{ value: 400, label: '400' },
		{ value: 500, label: '500' },
		{ value: 600, label: '600' },
		{ value: 700, label: '700' },
		{ value: 800, label: '800' },
		{ value: 900, label: '900' }
	];

	const matches = useMediaQuery('(min-width:800px)');

	return (
		<div className='flex flex-col min-h-screen'>
			<header className='flex justify-end items-center h-24 gap-5 pt-16 pb-12 bg-gray-300/60 md:px-4'>
				<Link to='/' className='text-blue-600 mr-auto'>
					<ArrowBackIcon sx={{ fontSize: 72 }} />
				</Link>
				<LightModeSharpIcon color='warning' fontSize='large' />
				<Slider
					aria-label='shades'
					defaultValue={500}
					valueLabelDisplay='on'
					step={100}
					marks={matches ? marks : true}
					min={100}
					max={900}
					onChange={el => setLevel(el.target.value)}
					sx={{
						width: 500
					}}
				/>
				<NightlightIcon fontSize='large' />
				<SelectColor changeColor={changeColor} />
			</header>
			<div className='grid grid-cols-1 gap-4 m-3 md:grid-cols-4 grow'>
				{shades[level].map(color => (
					<ColorCard key={color.name} {...color} colorMode={color[colorMode]} />
				))}
			</div>
			<footer className='h-[8vh] bg-gray-700/75 text-3xl flex justify-around items-center text-white border-t-black border-t-1 font-bold'>
				<p>{paletteName}</p>
				<p>{emoji}</p>
			</footer>
		</div>
	);
};
