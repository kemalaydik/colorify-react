import { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import DragDrop from './DragDrop';
import Sidebar from './Sidebar';
import { DrawerHeader, MuiAppBar as AppBar, Main } from '../componentStyles';
import EmojiPicker from 'emoji-picker-react';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Button, IconButton, Box, Toolbar, Snackbar } from '@mui/material';

export default function New() {
	const [open, setOpen] = useState(true);
	const [sbOpen, setSbOpen] = useState(false);
	const [palette, setPalette] = useState([]);
	const [isSaving, setIsSaving] = useState(0);
	const [selectedEmoji, setSelectedEmoji] = useState('');
	const seedColors = useContext(UserContext);

	const handleEmoji = ({ emoji }) => {
		setSelectedEmoji(emoji);
		setSbOpen(true);
		setIsSaving(2);
	};

	const handleCreatePalette = () => {
		setIsSaving(1);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			{isSaving === 1 && (
				<div className='absolute left-1/2 top-96 z-10'>
					<EmojiPicker onEmojiClick={handleEmoji} skinTonesDisabled lazyLoadEmojis />
				</div>
			)}

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
					<Button variant='contained' color='error' onClick={handleCreatePalette}>
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
	);
}
