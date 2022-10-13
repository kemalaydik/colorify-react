import { TextField, Button, Snackbar } from '@mui/material';
import { useState } from 'react';

export default function ({ handleSubmit, setName, name, palette }) {
	const [open, setOpen] = useState(false);
	const submitForm = e => {
		e.preventDefault();
		if (palette.find(el => el.name === name)) {
			setOpen(true);
			return;
		}
		handleSubmit();
	};

	return (
		<form onSubmit={submitForm} className='flex flex-col items-center gap-5 mt-3'>
			<TextField id='outlined-basic' label='Color name' variant='outlined' value={name} onChange={e => setName(e.target.value)} required />
			<Button variant='contained' color='primary' type='submit'>
				Add Color
			</Button>
			<Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} message='A color with same name exists!' />
		</form>
	);
}
