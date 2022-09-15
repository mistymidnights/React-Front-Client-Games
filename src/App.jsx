import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import GlobalStyles from './styles/globalStyles';
import { createTheme } from './styles/utils';
import { themeLight, themeDark } from './styles/theme';
import './App.css';
import Header from './components/Header/Header';
import HeroOne from './components/HeroOne/HeroOne';
import HeroTwo from './components/HeroTwo/HeroTwo';

function App() {
	const [themePovide, setThemeProvide] = useState(themeDark);

	const toggleTheme = () => {
		setThemeProvide(themePovide === themeLight ? themeDark : themeLight);
	};

	return (
		<ThemeProvider theme={createTheme(themePovide)}>
			<GlobalStyles />
			<Header toggleTheme={toggleTheme} />
			<HeroOne />
			<HeroTwo />
		</ThemeProvider>
	);
}

export default App;
