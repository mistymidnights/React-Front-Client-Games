import { BsFillMusicPlayerFill } from 'react-icons/bs';
import { FiRadio } from 'react-icons/fi';
import { MdHelp } from 'react-icons/md';
import RenderBot from '../RenderBot/RenderBot';
import RenderFavPodcast from '../RenderFavPodcast/RenderFavPodcast';
import RenderPlaylist from '../RenderPlaylist/RenderPlaylist';
import ButtonDespegable from '../UI/ButtonDesplegable/ButtonDespegable';
import H1Custom from '../UI/H1Custom/H1Custom';
import { HeroFooter } from './Footer.element';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { JwtContext } from '../../context/jwtContext';

const Footer = () => {
	const [chatBot, setChatBot] = useState();
	const [playlist, setPlaylist] = useState();
	const [favPodcast, setFavPodcast] = useState();

	const myFunction = () => {
		playlist === 'block' ? setPlaylist('none') : setPlaylist('none');
		const hide = document.querySelector('.playlist');
		if (playlist === 'none') hide.style.display = playlist;

		favPodcast === 'block' ? setFavPodcast('none') : setFavPodcast('none');
		const hideTwo = document.querySelector('.podcast');
		if (favPodcast === 'none') hideTwo.style.display = favPodcast;

		chatBot === 'none' ? setChatBot('block') : setChatBot('none');
		const cambio = document.querySelector('.renderContainer');
		cambio.style.display = chatBot;
	};

	const myFunctionPlaylist = () => {
		chatBot === 'block' ? setChatBot('none') : setChatBot('none');
		const hide = document.querySelector('.renderContainer');
		if (chatBot === 'none') hide.style.display = chatBot;

		favPodcast === 'block' ? setFavPodcast('none') : setFavPodcast('none');
		const hideTwo = document.querySelector('.podcast');
		if (favPodcast === 'none') hideTwo.style.display = favPodcast;

		playlist === 'none' ? setPlaylist('block') : setPlaylist('none');
		const cambio = document.querySelector('.playlist');
		cambio.style.display = playlist;
	};

	const myFunctionFavPodcast = () => {
		chatBot === 'block' ? setChatBot('none') : setChatBot('none');
		const hide = document.querySelector('.renderContainer');
		if (chatBot === 'none') hide.style.display = chatBot;

		playlist === 'block' ? setPlaylist('none') : setPlaylist('none');
		const hideTwo = document.querySelector('.playlist');
		if (playlist === 'none') hideTwo.style.display = playlist;

		favPodcast === 'none' ? setFavPodcast('block') : setFavPodcast('none');
		const cambio = document.querySelector('.podcast');
		cambio.style.display = favPodcast;
	};
	return (
		<>
			<HeroFooter className='HeroFooter'>
				@2022 | Pedro Lérida | Cristina López
			</HeroFooter>
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
		</>
	);
};

export default Footer;
