import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import GlobalStyles from './styles/globalStyles';
import { createTheme } from './styles/utils';
import { themeLight, themeDark } from './styles/theme';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Pages/Game/Game';
import Home from './Pages/Homee/Home';
import GameFree from './Pages/Game/GameFree';
import GameDetail from './Pages/GameDetail/GameDetail';

function App() {
	const [themePovide, setThemeProvide] = useState(themeDark);

	const toggleTheme = () => {
		setThemeProvide(themePovide === themeLight ? themeDark : themeLight);
	};

	return (
		<ThemeProvider theme={createTheme(themePovide)}>
			<GlobalStyles />
			<Router>
				<Header toggleTheme={toggleTheme} />
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/game' element={<Game />} />
					<Route path='/game/:id' element={<GameDetail />} />
					<Route path='/freetoplay' element={<GameFree />} />
				</Routes>
				<Footer height={'30px'} width={'30px'} />
			</Router>
		</ThemeProvider>
	);
}

export default App;
