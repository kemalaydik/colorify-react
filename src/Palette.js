/* eslint-disable import/no-anonymous-default-export */
import ColorCard from './ColorCard';

export default ({ paletteName, id, emoji, colors }) => (
	<div className='flex flex-col min-h-screen'>
		<header className='h-[10vh]'>asda</header>
		<div className='grid grid-cols-1 md:grid-cols-4 grow'>
			{colors.map(color => (
				<ColorCard key={color.name} {...color} />
			))}
		</div>
		<footer className='h-[10vh]'>bbb</footer>
	</div>
);
