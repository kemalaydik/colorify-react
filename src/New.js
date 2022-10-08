import { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { UserContext } from './App';
import DragDrop from './DragDrop';
import Sidebar from './Sidebar';
import DrawerHeader from './DrawerHeader';

import { Menu as MenuIcon } from '@mui/icons-material';
import { Button, IconButton, Box, Toolbar, AppBar as MuiAppBar } from '@mui/material';

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

export default function New() {
	const [open, setOpen] = useState(true);
	const [palette, setPalette] = useState([]);
	const seedColors = useContext(UserContext);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handlePalette = ({ name, color }) => {
		setPalette(palette => [...palette, { name, color }]);
	};

	const handleClose = () => setOpen(false);
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
			<Sidebar handlePalette={handlePalette} handleClose={handleClose} open={open} />
			<Main open={open}>
				<DrawerHeader />
				<DragDrop palette={palette} />
			</Main>
		</Box>
	);
}
