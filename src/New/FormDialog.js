import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function FormDialog({ open, setOpen, setPaletteName, savePalette }) {
	const handleClose = () => setOpen(false);
	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle sx={{ width: '80vw' }}>Pick a name for your palette</DialogTitle>
				<DialogContent>
					<TextField autoFocus margin='dense' id='name' label='PaletteName' type='text' fullWidth variant='standard' onChange={e => setPaletteName(e.target.value)} />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={savePalette}>Save Palette</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
