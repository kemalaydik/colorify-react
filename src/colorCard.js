/* eslint-disable import/no-anonymous-default-export */
import chroma from 'chroma-js';
import copy from 'copy-to-clipboard';
import { useState } from 'react';

export default ({ name, color }) => {
	const [copied, setCopied] = useState(false);
	let textColor = chroma(color).luminance() < 0.5 ? 'white' : 'black';
	const handleClick = () => {
		copy(color);
		setCopied(
			true,
			setTimeout(() => {
				setCopied(false);
			}, 1500)
		);
	};

	return (
		<>
			<div style={{ backgroundColor: color }} className='relative flex items-end justify-between text-xs group'>
				<p className='p-1' style={{ color: textColor }}>
					{name} 500
				</p>
				<button className='absolute px-1 text-white duration-300 ease-out -translate-x-1/2 -translate-y-1/2 opacity-0 bg-gray-500/25 group-hover:opacity-100 top-1/2 left-1/2' onClick={handleClick}>
					COPY
				</button>
				<button className='bottom-0 right-0 px-1 text-white bg-gray-500/25'>MORE</button>
				<div
					style={{ backgroundColor: color }}
					className={`absolute duration-500 transform-gpu ease-in-out w-full h-full ${copied ? 'opacity-100 z-10 scale-[40]' : 'opacity-100 z-10 scale-0'}`}></div>
			</div>
			{copied && <p className={`fixed z-20 w-full py-5 text-xl italic text-white shadow-xl text-center bg-gray-500/50 top-1/2 opacity-0 animate-grow`}>COPIED {color}</p>}
		</>
	);
};
