import { ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TableCars } from './components/TableCars';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export const App = () => {
	const cars = [
		{
			id: 1,
			carName: 'Mustang',
			speed: 199,
			calendar: 2015,
			energy: 8,
			people: 8,
			photo:
				'https://user-images.githubusercontent.com/68661446/180114674-472d4de3-3a79-483f-a589-728b4e6aa955.png',
		},
		{
			id: 2,
			carName: 'Mustang GT',
			speed: 210,
			calendar: 2020,
			energy: 8,
			people: 8,
			photo:
				'https://user-images.githubusercontent.com/68661446/180116519-5dba66c0-353c-4c2b-9cc6-31b6ed0fcb63.png',
		},
		{
			id: 3,
			carName: 'Mustang',
			speed: 250,
			calendar: 1998,
			energy: 5,
			people: 5,
			photo:
				'https://user-images.githubusercontent.com/68661446/180115670-3543fedd-42d5-41bd-82a9-aa7b2464ba32.png',
		},
	];

	return (
		<ThemeProvider theme={defaultTheme}>
			<Header />
			<TableCars cars={cars} />
			<Footer />

			<GlobalStyle />
		</ThemeProvider>
	);
};
