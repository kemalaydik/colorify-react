import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

export default function ControlledOpenSelect({ changeColor }) {
	const [open, setOpen] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [mode, setMode] = useState('colorHex');

	const handleChange = event => {
		changeColor(event.target.value);
		setMode(event.target.value);
		setSnackbarOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setSnackbarOpen(false);
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
					value={mode}
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
			<Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleClose} message='Color Mode Changed'>
				<Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
					Color Mode Changed
				</Alert>
			</Snackbar>
		</div>
	);
}
