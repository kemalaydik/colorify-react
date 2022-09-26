import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function ControlledOpenSelect({ changeColor, colorMode }) {
	const [open, setOpen] = useState(false);

	const handleChange = event => {
		changeColor(event.target.value);
	};

	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id='demo-controlled-open-select-label'>Color</InputLabel>
				<Select
					labelId='demo-controlled-open-select-label'
					id='demo-controlled-open-select'
					open={open}
					onClose={() => setOpen(false)}
					onOpen={() => setOpen(true)}
					value={colorMode}
					label='Color'
					onChange={handleChange}>
					<MenuItem value='colorHex'>
						<em>HEX</em>
					</MenuItem>
					<MenuItem value='colorRgb'>RGB</MenuItem>
					<MenuItem value='colorRgba'>RGBA</MenuItem>
					<MenuItem value='colorHsl'>HSL</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
