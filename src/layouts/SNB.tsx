import { Home, MapPinned, Search } from 'lucide-react';

export function SNB() {
	return (
		<footer className='sticky bottom-0 h-12 border-t bg-black flex flex-row justify-around items-center'>
			<Home />
			<Search />
			<MapPinned />
		</footer>
	);
}
