import React from 'react';

import {
	HeaderContainer,
	HeaderElement,
	LogoContainer,
} from './Header.element';
import ButtonStyle from './UI/ButtonStyle/Button';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderElement>
				<div className='leftHeader'>
					<LogoContainer>
						<img className='Logo' src='Akira-PNG.png' alt='logo' />
					</LogoContainer>
					<ul className='HeaderList'>
						<li>Home</li>
						<li>Games</li>
						<li>Posts</li>
						<li>Podcast</li>
						<li>Chat</li>
					</ul>
				</div>
				<div className='BtnHeader'>
					<ButtonStyle variant={'small'} height={'30px'} width={'40px'}>
						Log in
					</ButtonStyle>
					<ButtonStyle variant={'smallSecond'} height={'30px'} width={'40px'}>
						Sign up
					</ButtonStyle>
				</div>
			</HeaderElement>
		</HeaderContainer>
	);
};

export default Header;
