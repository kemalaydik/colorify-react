/* eslint-disable import/no-anonymous-default-export */

import copy from 'copy-to-clipboard';
import { useState } from 'react';

export default ({ name, colorHex, overlayTextColorBool, colorMode }) => {
	const [copied, setCopied] = useState(false);
	const handleClick = () => {
		copy(colorMode);
		setCopied(
			true,
			setTimeout(() => {
				setCopied(false);
			}, 1500)
		);
	};

	return (
		<>
			<div style={{ backgroundColor: colorHex }} className='relative flex items-end justify-between text-sm border border-black rounded-lg group'>
				<p className='p-1 font-semibold' style={{ color: overlayTextColorBool ? `white` : `black` }}>
					{name}
				</p>
				<button
					className='absolute px-1 font-semibold text-white duration-300 ease-out -translate-x-1/2 -translate-y-1/2 opacity-0 bg-gray-500/25 group-hover:opacity-100 top-1/2 left-1/2'
					onClick={handleClick}
				>
					COPY
				</button>
				<button className='bottom-0 right-0 px-1' style={{ color: overlayTextColorBool ? `white` : `black` }}>
					MORE
				</button>
				<div style={{ backgroundColor: colorHex }} className={`fixed top-0 left-0 duration-500 ease-in-out w-full h-full ${copied ? 'opacity-100 w-screen h-screen z-10' : 'opacity-0 -z-10'}`}></div>
			</div>
			{copied && <p className={`fixed z-20 w-full py-5 text-xl italic text-white shadow-xl text-center bg-gray-500/50 top-1/2 opacity-0 animate-grow`}>COPIED {colorMode}</p>}
		</>
	);
};
