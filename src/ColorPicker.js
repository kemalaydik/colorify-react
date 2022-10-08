import { useState, memo, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { generateRndColor } from './colorHelpers';
import { Button } from '@mui/material';

function ColorPicker({ setColor }) {
	const rndColor = generateRndColor();
	const [colorBG, setColorBG] = useState(rndColor);

	useEffect(() => {
		setColor(rndColor);
	}, []);

	const handleColorChange = color => setColorBG(color.hex);
	const change2RndColor = () => {
		const rndColor = generateRndColor();
		setColor(rndColor);
		setColorBG(rndColor);
	};

	return (
		<>
			<Button onClick={change2RndColor} variant='contained' color='secondary'>
				Random Color
			</Button>
			<SketchPicker color={colorBG} onChange={handleColorChange} onChangeComplete={() => setColor(colorBG)} disableAlpha />
		</>
	);
}

export default memo(ColorPicker);
