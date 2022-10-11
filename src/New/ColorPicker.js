import { useState, memo, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { generateRndColor } from '../colorHelpers';
import { Button } from '@mui/material';

function ColorPicker({ setPaletteColor }) {
	const rndColor = generateRndColor();
	const [color, setColor] = useState(rndColor);

	const change2RndColor = () => {
		const rndColor = generateRndColor();
		setColor(rndColor);
		setPaletteColor(rndColor);
	};

	return (
		<>
			<Button onClick={change2RndColor} variant='contained' color='secondary'>
				Random Color
			</Button>
			<SketchPicker color={color} onChange={color => setColor(color.hex)} onChangeComplete={color => setPaletteColor(color.hex)} disableAlpha />
		</>
	);
}

export default memo(ColorPicker);
