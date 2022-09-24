import Palette from './Palette';
import seedColors from './seedColors';
const App = () => {
	return (
		<>
			<Palette {...seedColors[1]} />
		</>
	);
};

export default App;
