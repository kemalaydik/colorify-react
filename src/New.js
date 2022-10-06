import { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import { generateRndColor } from './colorHelpers';
import { Link } from 'react-router-dom';
import { UserContext } from './App';
import ColorPicker from './ColorPicker';
import DragDrop from './DragDrop';

import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { Button, IconButton, Box, Drawer, Toolbar, AppBar as MuiAppBar, TextField } from '@mui/material';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	})
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-end'
}));

export default function New() {
	const [open, setOpen] = useState(true);
	const [color, setColor] = useState(generateRndColor());
	const [name, setName] = useState('');
	const [palette, setPalette] = useState([]);
	const seedColors = useContext(UserContext);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleColor = color => setColor(color);

	const handleSubmit = e => {
		e.preventDefault();
		setPalette([...palette, { name, color }]);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar position='fixed' open={open}>
				<Toolbar className='flex gap-2 justify-end'>
					<IconButton color='inherit' aria-label='open drawer' onClick={handleDrawerOpen} edge='start' sx={{ mr: 'auto', ...(open && { display: 'none' }) }}>
						<MenuIcon />
					</IconButton>
					<Link to='/'>
						<Button variant='contained' color='warning'>
							Go Back
						</Button>
					</Link>
					<Button variant='contained' color='error'>
						Save Palette
					</Button>
				</Toolbar>
			</AppBar>
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
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</DrawerHeader>
				<ColorPicker handleColor={handleColor} />
				<form onSubmit={handleSubmit} className='flex flex-col items-center gap-3 mt-3'>
					<TextField id='outlined-basic' label='Color name' variant='outlined' value={name} onChange={e => setName(e.target.value)} required />
					<Button variant='contained' color='primary' type='submit'>
						Add Color
					</Button>
				</form>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<DragDrop palette={palette} />
			</Main>
		</Box>
	);
}
