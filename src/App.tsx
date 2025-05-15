import { Route, Routes } from 'react-router';
import './App.css';
import { Header } from './layouts/Header';
import { SNB } from './layouts/SNB';
import { routes } from './routes';

function App() {
	return (
		<div className='relative h-full w-full flex flex-col'>
			<Header />
			<Routes>
				{routes.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={route.element}
						/>
					);
				})}
			</Routes>
			<SNB />
		</div>
	);
}

export default App;
