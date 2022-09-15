import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const ButtonWrapper = styled.h2(({ height, width, theme }) => ({
	color: theme.palette.primary.main,
	paddingTop: '4px',
	[`${theme.mediaquery.tablet}`]: {},
	[`${theme.mediaquery.desktop}`]: {},
}));

const H1Custom = ({ children, height, width }) => {
	const theme = useTheme();

	return (
		<ButtonWrapper theme={theme} height={height} width={width}>
			{children}
		</ButtonWrapper>
	);
};

export default H1Custom;
