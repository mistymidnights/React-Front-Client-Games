import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const ButtonWrapperDesplegable = styled.button(({ theme, height, width }) => ({
	cursor: 'pointer',
	borderRadius: '50%',
	width: width,
	height: height,
	backgroundColor: theme.palette.button.main,
	border: 'none',
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	// height: theme.spacing(6),
	// margin: theme.spacing(2),
	[`${theme.mediaquery.tablet}`]: {},
	[`${theme.mediaquery.desktop}`]: {},
}));

const ButtonDespegable = ({ children, height, width }) => {
	const theme = useTheme();

	return (
		<ButtonWrapperDesplegable theme={theme} height={height} width={width}>
			{children}
		</ButtonWrapperDesplegable>
	);
};

export default ButtonDespegable;
