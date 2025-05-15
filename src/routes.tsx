import MainPage from './pages/MainPage';
import MapPage from './pages/MapPage';
import SearchPage from './pages/SearchPage';

export const routes = [
	{
		title: 'Home',
		path: '/',
		element: <MainPage />,
	},
	{
		title: 'Search',
		path: '/search',
		element: <SearchPage />,
	},
	{
		title: 'Map',
		path: '/map',
		element: <MapPage />,
	},
];
