import {
	HeaderContainer,
	HeaderElement,
	LogoContainer,
} from './Header.element';
import ButtonStyle from '../UI/ButtonStyle/Button';
import ButtonDespegable from '../UI/ButtonDesplegable/ButtonDespegable';
import { BsFillMusicPlayerFill, BsPlayFill } from 'react-icons/bs';
import H1Custom from '../UI/H1Custom/H1Custom';
import { Link } from 'react-router-dom';
import { MdHelp } from 'react-icons/md';
import { FiRadio } from 'react-icons/fi';
import RenderBot from '../RenderBot/RenderBot';
import { useState } from 'react';
import RenderPlaylist from '../RenderPlaylist/RenderPlaylist';
import RenderFavPodcast from '../RenderFavPodcast/RenderFavPodcast';

const Header = ({ toggleTheme }) => {
	const [chatBot, setChatBot] = useState('none');
	const [playlist, setPlaylist] = useState('none');
	const [favPodcast, setFavPodcast] = useState('none');

	function myFunction() {
		const hide = document.querySelector('.playlist');
		playlist === 'block' ? setPlaylist('none') : <></>;
		hide.style.display = playlist;

		const hideTwo = document.querySelector('.podcast');
		favPodcast === 'block' ? setFavPodcast('none') : <></>;
		hideTwo.style.display = favPodcast;

		chatBot === 'block' ? setChatBot('none') : setChatBot('block');
		const cambio = document.querySelector('.renderContainer');
		cambio.style.display = chatBot;
	}

	function myFunctionPlaylist() {
		console.log('enntro');
		const hide = document.querySelector('.renderContainer');
		chatBot === 'block' ? setChatBot('none') : <></>;
		hide.style.display = chatBot;

		const hideTwo = document.querySelector('.podcast');
		favPodcast === 'block' ? setFavPodcast('none') : <></>;
		hideTwo.style.display = favPodcast;

		playlist === 'block' ? setPlaylist('none') : setPlaylist('block');
		const cambio = document.querySelector('.playlist');
		cambio.style.display = playlist;
	}

	const myFunctionFavPodcast = () => {
		const hide = document.querySelector('.renderContainer');
		chatBot === 'block' ? setChatBot('none') : <></>;
		hide.style.display = chatBot;

		const hideTwo = document.querySelector('.playlist');
		playlist === 'block' ? setPlaylist('none') : <></>;
		hideTwo.style.display = playlist;

		favPodcast === 'none' ? setFavPodcast('block') : setFavPodcast('none');
		const cambio = document.querySelector('.podcast');
		cambio.style.display = favPodcast;
	};

	return (
		<HeaderContainer>
			<HeaderElement>
				<div className='leftHeader'>
					<Link to={'/'}>
						<LogoContainer className='logo'></LogoContainer>
					</Link>
				</div>
				<div className='BtnHeader'>
					<ul className='HeaderList'>
						<Link to={'/'}>
							<li>Home</li>
						</Link>
						<Link to={'/game'}>
							<li>Games</li>
						</Link>
						<Link to={'/posts'}>
							<li>Posts</li>
						</Link>
						<Link to={'/podcast'}>
							<li>Podcast</li>
						</Link>
						<a href='https://game-a5d6a.firebaseapp.com/' target='blank'>
							<li>Chat</li>
						</a>
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
						<Link to={'/register'}>Sign up</Link>
					</ButtonStyle>
					<ButtonStyle variant={'smallSecond'} height={'50px'} width={'40px'}>
						<div onClick={toggleTheme}>Change Theme</div>
					</ButtonStyle>
					<RenderBot />
					<div onClick={myFunction}>
						<ButtonDespegable
							className='Help'
							position={'fixed'}
							height={'50px'}
							width={'50px'}
							right={'20px'}
							bottom={'80px'}
						>
							<H1Custom>
								<MdHelp fontSize={'35px'} />
							</H1Custom>
						</ButtonDespegable>
					</div>
					<RenderFavPodcast />
					<div onClick={myFunctionFavPodcast}>
						<ButtonDespegable
							className='Podcast'
							position={'fixed'}
							height={'50px'}
							width={'50px'}
							right={'20px'}
							bottom={'140px'}
							padding={'0px 0px 0px 6px'}
						>
							<H1Custom>
								<FiRadio fontSize={'35px'} />
							</H1Custom>
						</ButtonDespegable>
					</div>
					<RenderPlaylist />
					<div onClick={myFunctionPlaylist}>
						<ButtonDespegable
							className='Music'
							position={'fixed'}
							height={'50px'}
							width={'50px'}
							right={'20px'}
							bottom={'20px'}
							padding={'0px 0px 0px 6px'}
						>
							<H1Custom>
								<BsFillMusicPlayerFill fontSize={'35px'} />
							</H1Custom>
						</ButtonDespegable>
					</div>
				</div>
			</HeaderElement>
		</HeaderContainer>
	);
};

export default Header;
