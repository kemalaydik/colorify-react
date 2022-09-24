import Palette from './Palette';
import seedColors from './seedColors';
const App = () => {
	return (
		<>
			<Palette {...seedColors[3]} />
		</>
	);
};

export default App;
