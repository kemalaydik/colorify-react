import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import React from 'react';
const App = () => {
	return (
		<>
			<React.StrictMode>
				<Palette {...generatePalette(seedColors[1])} />
			</React.StrictMode>
		</>
	);
};

export default App;
