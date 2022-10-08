import { IconButton, Drawer } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import ColorPicker from './ColorPicker';
import { useState } from 'react';
import { generateRndColor } from './colorHelpers';
import DrawerHeader from './DrawerHeader';
import ColorForm from './ColorForm';
const drawerWidth = 300;

export default function Sidebar({ handlePalette, handleClose, open }) {
	const [color, setColor] = useState('');
	const [name, setName] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		handlePalette({ name, color });
	};

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
					alignItems: 'center',
					gap: 2,
					backgroundColor: 'D3D3D3'
				}
			}}
			variant='persistent'
			anchor='left'
			open={open}
		>
			<DrawerHeader className='self-end'>
				<IconButton onClick={handleClose}>
					<ChevronLeftIcon />
				</IconButton>
			</DrawerHeader>
			<ColorPicker setColor={setColor} />
			<ColorForm setName={setName} handleSubmit={handleSubmit} name={name} />
		</Drawer>
	);
}
