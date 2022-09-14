import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import GlobalStyles from './styles/globalStyles';
import { createTheme } from './styles/utils';
import { themeLight, themeDark } from './styles/theme';
import ButtonStyle from './components/UI/ButtonStyle/Button';
import './App.css';
import { HeaderElement } from './components/Header.element';
import Header from './components/Header';

function App() {
	const [themePovide, setThemeProvide] = useState(themeDark);

	const toggleTheme = () => {
		setThemeProvide(themePovide === themeLight ? themeDark : themeLight);
	};

	return (
		<ThemeProvider theme={createTheme(themePovide)}>
			<GlobalStyles />
			<Header />
			<ButtonStyle variant='small' height={'20px'} width={'40px'}>
				<div onClick={toggleTheme}>Change Theme</div>
			</ButtonStyle>
		</ThemeProvider>
	);
}

export default App;
