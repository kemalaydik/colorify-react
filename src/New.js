import { useState, useContext } from 'react';
import { SketchPicker } from 'react-color';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { generateRndColor } from './colorHelpers';
import { Link } from 'react-router-dom';
import { UserContext } from './App';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { Button, ButtonGroup, IconButton, Box, Drawer, Toolbar, AppBar as MuiAppBar, TextField } from '@mui/material';

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
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end'
}));

export default function New() {
	const [open, setOpen] = useState(true);
	const [color, setColor] = useState({ r: '0', g: '0', b: '0', a: '1' });
	const [name, setName] = useState('');
	const [palette, setPalette] = useState([]);
	const seedColors = useContext(UserContext);

	const handleChange = color => {
		setColor({ ...color.rgb });
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const onDragEnd = () => console.log(23);

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
						gap: 2
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
				<ButtonGroup variant='text' aria-label='outlined button group' size='small'>
					<Button>Create Palette</Button>
					<Button onClick={() => setColor(generateRndColor())}>Random Color</Button>
				</ButtonGroup>
				<SketchPicker color={color} onChange={handleChange} />

				<TextField id='outlined-basic' label='Color name' variant='outlined' value={name} onChange={e => setName(e.target.value)} />
				<Button variant='contained' color='primary' onClick={() => setPalette([...palette, { name, color }])}>
					Add Color
				</Button>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<div>
					<DragDropContext onDragEnd={onDragEnd}>
						<Droppable droppableId='colorGrid'>
							{provided => {
								return (
									<div {...provided.droppableProps} ref={provided.innerRef} className='flex flex-col gap-5' style={{}}>
										{palette.map(({ name, color: { r, g, b, a } }, idx) => (
											<Draggable draggableId={name} index={idx} key={name}>
												{provided => {
													return (
														<div
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															className='w-40 h-40 border border-black rounded-lg hover:shadow-lg hover:scale-[1.05] ease-in-out duration-300'
															style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})` }}
														>
															{/* <p className='bottom-2 left-2 text-white'>{name}</p> */}
														</div>
													);
												}}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								);
							}}
						</Droppable>
					</DragDropContext>
				</div>
			</Main>
		</Box>
	);
}
