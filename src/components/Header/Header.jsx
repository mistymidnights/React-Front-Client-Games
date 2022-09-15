import React from 'react';

import {
	HeaderContainer,
	HeaderElement,
	LogoContainer,
} from './Header.element';
import ButtonStyle from '../UI/ButtonStyle/Button';
import ButtonDespegable from '../UI/ButtonDesplegable/ButtonDespegable';
import { BsPlayFill } from 'react-icons/bs';
import H1Custom from '../UI/H1Custom/H1Custom';

const Header = ({ toggleTheme }) => {
	return (
		<HeaderContainer>
			<HeaderElement>
				<div className='leftHeader'>
					<LogoContainer className='logo'>
						{/* <img className='Logo' src='Akira-PNG.png' alt='logo' /> */}
					</LogoContainer>
				</div>
				<div className='BtnHeader'>
					<ul className='HeaderList'>
						<li>Home</li>
						<li>Games</li>
						<li>Posts</li>
						<li>Podcast</li>
						<li>Chat</li>
					</ul>
					<ButtonDespegable height={'30px'} width={'40px'}>
						<H1Custom>
							<BsPlayFill />
						</H1Custom>
					</ButtonDespegable>
					<ButtonStyle variant={'small'} height={'30px'} width={'40px'}>
						Log in
					</ButtonStyle>
					<ButtonStyle variant={'smallSecond'} height={'30px'} width={'50px'}>
						Sign up
					</ButtonStyle>
					<ButtonStyle variant={'smallSecond'} height={'50px'} width={'40px'}>
						<div onClick={toggleTheme}>Change Theme</div>
					</ButtonStyle>
				</div>
			</HeaderElement>
		</HeaderContainer>
	);
};

export default Header;
