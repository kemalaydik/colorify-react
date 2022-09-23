import { useState, useEffect } from 'react';

const App = () => {
	const [color, setColor] = useState(`yellow`);

	useEffect(() => {
		const interval = setTimeout(() => {
			setColor(color === `red` ? `yellow` : `red`);
		}, 1000);
		return () => clearTimeout(interval);
	}, [color]);

	return (
		<>
			<h1 className={`text-4xl text-[${color}]`}>zzxczc</h1>
		</>
	);
};

export default App;
