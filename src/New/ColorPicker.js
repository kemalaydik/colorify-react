import { useState, memo,useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { generateRndColor } from '../colorHelpers';
import { Button } from '@mui/material';

function ColorPicker({ setColor }) {
	const rndColor = generateRndColor();
	const [bgColor, setBgColor] = useState(rndColor);

	const change2RndColor = () => {
		const rndColor = generateRndColor();
		setBgColor(rndColor);
		setColor(rndColor);
	};
useEffect(()=>setColor(bgColor))
	return (
		<>
			<Button onClick={change2RndColor} variant='contained' color='secondary'>
				Random Color
			</Button>
			<SketchPicker color={bgColor} onChange={color => setBgColor(color.hex)} onChangeComplete={color => setColor(color.hex)} disableAlpha />
		</>
	);
}

export default memo(ColorPicker);
