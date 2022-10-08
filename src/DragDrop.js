import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box } from '@mui/material';

export default function DragDrop({ palette }) {
	const onDragEnd = () => console.log(23);
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId='colorGrid'>
				{provided => {
					return (
						<div {...provided.droppableProps} ref={provided.innerRef} className='flex flex-wrap gap-5'>
							{palette.map(({ name, color }, idx) => (
								<Draggable draggableId={name} index={idx} key={name}>
									{provided => {
										return (
											<Box
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												className='w-40 h-40 border border-black rounded-lg hover:shadow-lg ease-in-out duration-300'
												sx={{ backgroundColor: color }}
											>
												<p className='bottom-2 left-2 text-white'>{name}</p>
											</Box>
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
	);
}
