import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import { useEffect, useState } from 'react';
import chroma from 'chroma-js';

export default function DragDrop({ palette, setPalette }) {
	const [items, setItems] = useState(palette);
	useEffect(() => {
		setItems(palette);
	}, [palette]);
	function onChange(sourceId, sourceIndex, targetIndex, targetId) {
		const nextState = swap(items, sourceIndex, targetIndex);
		setPalette(nextState);
	}

	return (
		<GridContextProvider onChange={onChange}>
			<GridDropZone id='items' boxesPerRow={~~(window.innerWidth / 300)} rowHeight={window.innerHeight / 4} style={{height:"80vh"}}>
				{items.map(({ name, color }) => (
					<GridItem key={name}>
						<div
							style={{
								width: '90%',
								height: '90%',
								backgroundColor: color
							}}
							className={`mx-auto border rounded-md border-black p-4 text-${chroma(color).luminance() < 0.3 ? 'white' : 'black'}`}
						>
							{name}
						</div>
					</GridItem>
				))}
			</GridDropZone>
		</GridContextProvider>
	);
}
