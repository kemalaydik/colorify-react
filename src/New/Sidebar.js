import { IconButton, Drawer } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import ColorPicker from './ColorPicker';
import { useState } from 'react';
import { DrawerHeader } from '../componentStyles';
import ColorForm from './ColorForm';
import { useEffect } from 'react';
const drawerWidth = 300;

export default function Sidebar({ setPalette, setOpen, open, palette }) {
	const [paletteColor, setPaletteColor] = useState('');
	const [name, setName] = useState('');

	const handleSubmit = () => {
		setPalette([...palette, { name, paletteColor }]);
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
				<IconButton onClick={() => setOpen(false)}>
					<ChevronLeftIcon />
				</IconButton>
			</DrawerHeader>
			<ColorPicker setPaletteColor={setPaletteColor} />
			<ColorForm setName={setName} handleSubmit={handleSubmit} name={name} palette={palette} />
		</Drawer>
	);
}
