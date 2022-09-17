import React from 'react';
import ButtonStyle from '../UI/ButtonStyle/Button';
import Imagen from '../UI/Imagen/Imagen';
import P1Custom from '../UI/PCustom/PCustom';
import { HeroTwoContainer, HeroTwoo } from './HeroTwo.element';

const HeroTwo = () => {
	return (
		<HeroTwoContainer>
			<HeroTwoo className='HeroTwoo'>
				<div className='gamesConntainer'>
					<h2 className='TitleHero'>Most played games</h2>
				</div>
				<div className='cardGames'>
					<div className='detailCard' id='game1Hero'>
						<img
							className='marioImg'
							src='https://media.discordapp.net/attachments/1014491221349109770/1020000708499623986/pngwing.com.png?width=483&height=666'
							alt=''
						/>
						<img
							className='imgGamesContnainer'
							src='https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg'
							alt=''
						/>
						<P1Custom>likes</P1Custom>
					</div>
					<div className='detailCard' id='game2Hero'>
						<img
							className='imgGamesContnainer'
							src='https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg'
							alt=''
						/>
						<P1Custom>likes</P1Custom>
					</div>
					<div className='detailCard' id='game3Hero'>
						<img
							className='imgGamesContnainer'
							src='https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg'
							alt=''
						/>
						<P1Custom>likes</P1Custom>
					</div>
					<div className='detailCard' id='game4Hero'>
						<img
							className='imgGamesContnainer'
							src='https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg'
							alt=''
						/>
						<P1Custom>likes</P1Custom>
					</div>
					<div className='detailCard' id='game5Hero'>
						<img
							className='imgGamesContnainer'
							src='https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg'
							alt=''
						/>
						<P1Custom>likes</P1Custom>
					</div>
				</div>
				<div className='titleWBtn'>
					<h2 className='TitleHero'>Posts</h2>
					<ButtonStyle variant={'small'} height={'30px'}>
						More
					</ButtonStyle>
				</div>
				<div className='CardPostHero'>
					<div className='leftPosts'>
						<Imagen
							className='postCard'
							src={
								'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg?t=1662047426'
							}
							aspectRatio={'16:9'}
							height={'370px'}
							width={'650px'}
							borderRadius={'15px'}
						>
							<div style={{ top: '60%', left: '0' }}>
								<h2 className='backTitlePostMAIN'>Lost in random</h2>
								<p className='backTitlePost'>
									dhsgadhjsa hgdashdgsa dghsagdhas gdhsagdhjasg dghsagdhsagdh
									dghsagdhsa dghsadghsagdh asdhasjgdshagdhjsagdhj
								</p>
							</div>
						</Imagen>
					</div>
					<div className='rightPosts'>
						<div className='columRight'>
							<Imagen
								className='postCard'
								src={
									'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg?t=1662047426'
								}
								aspectRatio={'16:9'}
								width={'297px'}
								height={'175px'}
								borderRadius={'15px'}
							>
								<div style={{ top: '60%', left: '0' }}>
									<h2 className='backTitlePostMAIN'>Lost in random</h2>
									<p className='backTitlePost'>
										dhsgadhjsa hgdashdgsa dghsagdhas gdhsagdhjasg dghsagdhsagdh
										dghsagdhsa dghsadghsagdh asdhasjgdshagdhjsagdhj
									</p>
								</div>
							</Imagen>
							<Imagen
								className='postCard'
								src={
									'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg?t=1662047426'
								}
								aspectRatio={'16:9'}
								width={'297px'}
								height={'175px'}
								borderRadius={'15px'}
							>
								<div style={{ top: '60%', left: '0' }}>
									<h2 className='backTitlePostMAIN'>Lost in random</h2>
									<p className='backTitlePost'>
										dhsgadhjsa hgdashdgsa dghsagdhas gdhsagdhjasg dghsagdhsagdh
										dghsagdhsa dghsadghsagdh asdhasjgdshagdhjsagdhj
									</p>
								</div>
							</Imagen>
						</div>
					</div>
				</div>
			</HeroTwoo>
		</HeroTwoContainer>
	);
};

export default HeroTwo;
