import { Global } from '@emotion/react';

import { darken } from './colorManipulator';

const GlobalStyles = () => {
	return (
		<Global
			styles={theme => [
				{
					'*': {
						fontFamily: 'Regular',
						boxSizing: 'border-box',
					},
					'html,body': {
						padding: 0,
						margin: 0,
						backgroundColor: theme.palette.primary.main,
						backgroundImage: `url(${theme.background.back})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						// background image
						color: theme.palette.text.main,
					},
					'::-webkit-scrollbar': {
						width: theme.spacing(0.75),
						background: theme.palette.accent.main,
					},
					'::-webkit-scrollbar-track': {
						boxShadow: `inset 0 0 5px ${darken(
							theme.palette.accent.main,
							0.2
						)}`,
					},
					'::-webkit-scrollbar-thumb': {
						width: theme.spacing(0.75),
						background: theme.palette.accent.border,
						borderRadius: theme.spacing(0.5),
					},
					a: {
						color: 'inherit',
						textDecoration: 'none',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Regular',
						src: `url(${theme.typography.fonts.regular}) format("truetype")`,
					},
				},
				{
					'@font-face': {
						fontFamily: 'Italic',
						src: `url(${theme.typography.fonts.italic}) format("truetype")`,
					},
				},
				{
					'@font-face': {
						fontFamily: 'Bold',
						src: `url(${theme.typography.fonts.bold}) format("truetype")`,
					},
				},
				{
					'@font-face': {
						fontFamily: 'SemiBold',
						src: `url(${theme.typography.fonts.semibold}) format("truetype")`,
					},
				},
			]}
		/>
	);
};

export default GlobalStyles;
