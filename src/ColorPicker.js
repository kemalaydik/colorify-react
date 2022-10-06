import { useState } from 'react';
import { SketchPicker } from 'react-color';
import { generateRndColor } from './colorHelpers';
import { Button } from '@mui/material';

export default function ColorPicker({ handleColor }) {
	const [colorBG, setColorBG] = useState(generateRndColor());
	const handleColorChange = color => setColorBG(color.hex);
	const handleColorComplete = () => handleColor(colorBG);
	const change2RndColor = () => {
		const rndColor = generateRndColor();
		handleColor(rndColor);
		setColorBG(rndColor);
	};

	return (
		<>
			<Button onClick={change2RndColor} variant='contained' color='secondary'>
				Random Color
			</Button>
			<SketchPicker color={colorBG} onChange={handleColorChange} onChangeComplete={handleColorComplete} disableAlpha />
		</>
	);
}
