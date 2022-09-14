import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const ButtonWrapperDesplegable = styled.button(({ theme }) => ({
	cursor: 'pointer',
	borderRadius: '50%',
	width: '50px',
	height: '50px',
	backgroundColor: theme.palette.button.main,
	border: 'none',
	// height: theme.spacing(6),
	// margin: theme.spacing(2),
	[`${theme.mediaquery.tablet}`]: {
		margin: theme.spacing(4),
	},
	[`${theme.mediaquery.desktop}`]: {
		margin: theme.spacing(6),
	},
}));

const ButtonDespegable = ({ children }) => {
	const theme = useTheme();

	return (
		<ButtonWrapperDesplegable theme={theme}>
			{children}
		</ButtonWrapperDesplegable>
	);
};

export default ButtonDespegable;
