import { useParams } from 'react-router-dom';
import { generateScale } from './colorHelpers';

export default function More() {
	const { colorId } = useParams();
	const scale = generateScale('#' + colorId);
	console.log(scale);

	return (
		<div className='w-screen h-screen aflex grid'>
			{scale.map(color => (
				<div key={color} style={{ backgroundColor: color }} className='flex justify-center items-center'>
					{color}
				</div>
			))}
		</div>
	);
}
