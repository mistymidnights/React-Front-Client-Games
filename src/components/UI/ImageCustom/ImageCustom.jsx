import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const IconWrapper = styled.h2(({ theme }) => ({
	color: theme.palette.primary.main,

	[`${theme.mediaquery.tablet}`]: {
		margin: theme.spacing(4),
		left: theme.spacing(-2),
	},
	[`${theme.mediaquery.mobile}`]: {
		margin: theme.spacing(6),
		left: theme.spacing(-4),
	},
}));

const ImageCustom = ({ children }) => {
	const theme = useTheme();

	return <IconWrapper theme={theme}>{children}</IconWrapper>;
};

export default ImageCustom;
