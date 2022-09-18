import React from 'react';
import { HeroOneContainer, HeroOnee } from './HeroOne.element';
import ButtonStyle from '../UI/ButtonStyle/Button';
import ButtonDespegable from '../UI/ButtonDesplegable/ButtonDespegable';
import H1Custom from '../UI/H1Custom/H1Custom';
import { BsFillMusicPlayerFill } from 'react-icons/bs';
import { MdHelp } from 'react-icons/md';
import { FiRadio } from 'react-icons/fi';

const HeroOne = () => {
	return (
		<HeroOneContainer>
			<HeroOnee>
				<div className='HeroLeftContainer'>
					<div className='HeroTitle'>
						<h2 className='titleHeroOne'>
							Join in and discover a new hole commuinty of videogames
						</h2>
					</div>
					<ButtonStyle variant={'extralargeSecond'} height={'50px'}>
						{' '}
						JOIN
					</ButtonStyle>
				</div>

				<div className='HeroImage'>
					<img
						className='HeroOneImage'
						src='https://cdn.discordapp.com/attachments/1014491221349109770/1019704839007125534/characters.png'
						alt='characters'
					/>
				</div>
			</HeroOnee>
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
			<ButtonDespegable
				className='Bot'
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
			<ButtonDespegable
				className='Podcast'
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
		</HeroOneContainer>
	);
};

export default HeroOne;
