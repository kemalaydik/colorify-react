import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import DragDrop from './DragDrop';
import Sidebar from './Sidebar';
import FormDialog from './FormDialog';
import { DrawerHeader, MuiAppBar as AppBar, Main } from '../componentStyles';
import EmojiPicker from 'emoji-picker-react';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Button, IconButton, Box, Toolbar, Snackbar } from '@mui/material';

export default function New() {
	const [open, setOpen] = useState(true);
	const [sbOpen, setSbOpen] = useState(false);
	const [palette, setPalette] = useState([]);
	const [epOpen, setEpOpen] = useState(false);
	const [selectedEmoji, setSelectedEmoji] = useState('');
	const [fdOpen, setFdOpen] = useState(false);
	const [paletteName, setPaletteName] = useState('');

	const seedColors = useContext(UserContext);

	const handleEmoji = ({ emoji }) => {
		setSelectedEmoji(emoji);
		setSbOpen(true);
		setEpOpen(false);
		setFdOpen(true);
	};

	const savePalette = () => {
		seedColors.push({ paletteName, id: paletteName.toLowerCase().replace(' ', '-'), emoji: selectedEmoji, colors: palette });
		setFdOpen(false);
	};

	return (
		<>
			{epOpen && (
				<div className='fixed left-1/2 top-1/3 z-10'>
					<EmojiPicker onEmojiClick={handleEmoji} skinTonesDisabled lazyLoadEmojis />
				</div>
			)}

			{fdOpen && <FormDialog open={fdOpen} setOpen={setFdOpen} setPaletteName={setPaletteName} savePalette={savePalette} />}

			<Box sx={{ display: 'flex' }}>
				<Snackbar open={sbOpen} autoHideDuration={3000} onClose={() => setSbOpen(false)} message={`"${selectedEmoji}" selected`} />

				<AppBar position='fixed' open={open}>
					<Toolbar className='flex gap-2 justify-end'>
						<IconButton color='inherit' aria-label='open drawer' onClick={() => setOpen(true)} edge='start' sx={{ mr: 'auto', ...(open && { display: 'none' }) }}>
							<MenuIcon />
						</IconButton>
						<Link to='/'>
							<Button variant='contained' color='warning'>
								Go Back
							</Button>
						</Link>
						<Button variant='contained' color='error' onClick={() => setEpOpen(true)}>
							Create Palette
						</Button>
					</Toolbar>
				</AppBar>
				<Sidebar setPalette={setPalette} setOpen={setOpen} open={open} palette={palette} />
				<Main open={open}>
					<DrawerHeader />
					<DragDrop palette={palette} setPalette={setPalette} />
				</Main>
			</Box>
		</>
	);
}
