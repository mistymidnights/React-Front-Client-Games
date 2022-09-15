import React from 'react';

import {
	HeaderContainer,
	HeaderElement,
	LogoContainer,
} from './Header.element';
import ButtonStyle from '../UI/ButtonStyle/Button';
import ButtonDespegable from '../UI/ButtonDesplegable/ButtonDespegable';
import ImageCustom from '../UI/ImageCustom/ImageCustom';
import { BsPlayFill } from 'react-icons/bs';

const Header = ({ toggleTheme }) => {
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
					<ButtonDespegable height={'30px'} width={'40px'}>
						<ImageCustom top={'6px'} left={'6px'}>
							<BsPlayFill />
						</ImageCustom>
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

				<input type='checkbox' id='myInput' />
				<label htmlFor='myInput'>
					<span className='bar top'></span>
					<span className='bar middle'></span>
					<span className='bar bottom'></span>
				</label>
				<aside>
					<div className='aside-section aside-left'>
						<div className='aside-content'>
							<p> Some text that will make you click the cta </p>
							<button className='button'> CTA </button>
						</div>
					</div>
					<div className='aside-section aside-right'>
						<ul className='aside-list'>
							<li>
								<a href='' className='aside-anchor'>
									Link
								</a>
							</li>
							<li>
								<a href='' className='aside-anchor'>
									Link
								</a>
							</li>
							<li>
								<a href='' className='aside-anchor'>
									Link
								</a>
							</li>
							<li>
								<a href='' className='aside-anchor'>
									Link
								</a>
							</li>
						</ul>
					</div>
				</aside>
			</HeaderElement>
		</HeaderContainer>
	);
};

export default Header;
