/* eslint-disable import/no-anonymous-default-export */
import chroma from 'chroma-js';

export default ({ name, color }) => {
	let textColor = chroma(color).luminance() < 0.5 ? 'white' : 'black';
	return (
		<div style={{ backgroundColor: color }} className='relative flex items-end justify-between text-xs group'>
			<p className='p-1' style={{ color: textColor }}>
				{name} 500
			</p>
			<button className='absolute px-1 text-white duration-300 ease-out -translate-x-1/2 -translate-y-1/2 opacity-0 bg-gray-500/25 group-hover:opacity-100 top-1/2 left-1/2'>COPY</button>
			<button className='bottom-0 right-0 px-1 text-white bg-gray-500/25'>MORE</button>
		</div>
	);
};
