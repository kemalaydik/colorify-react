/* eslint-disable import/no-anonymous-default-export */
import ColorCard from './ColorCard';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SelectColor from './SelectColor';

export default ({ paletteName, id, emoji, shades }) => {
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
	return (
		<div className='flex flex-col min-h-screen'>
			<header className='flex items-center gap-5 h-[6vh] bg-gray-300 p-20 border-b-2 border-b-black'>
				<LightModeSharpIcon color='warning' fontSize='large' />
				<Slider aria-label='shades' defaultValue={500} valueLabelDisplay='on' step={100} marks={marks} min={100} max={900} onChange={el => setLevel(el.target.value)} />
				<NightlightIcon fontSize='large' />
				<SelectColor changeColor={changeColor} colorMode={colorMode} />
			</header>
			<div className='grid grid-cols-1 mt-0 md:grid-cols-4 grow'>
				{shades[level].map(color => (
					<ColorCard key={color.name} {...color} colorMode={color[colorMode]} />
				))}
			</div>
			<footer className='h-[8vh] bg-orange-400 text-3xl flex justify-around items-center text-white border-t-black border-t-2 font-bold'>
				<p>{paletteName}</p>
				<p>{emoji}</p>
			</footer>
		</div>
	);
};
