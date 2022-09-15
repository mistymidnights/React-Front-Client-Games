import React from 'react';
import HeroCardPost from '../HeroCardPosts.jsx/HeroCardPost';
import Imagen from '../UI/Imagen/Imagen';
import P1Custom from '../UI/PCustom/PCustom';
import { HeroTwoContainer, HeroTwoo } from './HeroTwo.element';

const HeroTwo = () => {
	return (
		<HeroTwoContainer>
			<HeroTwoo>
				<div className='gamesConntainer'>
					<h2 className='TitleHero'>Most played games</h2>
				</div>
				<div className='cardGames'>
					<div className='detailCard'>
						<img
							className='imgGamesContnainer'
							src='https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg'
							alt=''
						/>
						<P1Custom>likes</P1Custom>
					</div>
					<div className='detailCard'>
						<img
							className='imgGamesContnainer'
							src='https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg'
							alt=''
						/>
						<P1Custom>likes</P1Custom>
					</div>
					<div className='detailCard'>
						<img
							className='imgGamesContnainer'
							src='https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg'
							alt=''
						/>
						<P1Custom>likes</P1Custom>
					</div>
					<div className='detailCard'>
						<img
							className='imgGamesContnainer'
							src='https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg'
							alt=''
						/>
						<P1Custom>likes</P1Custom>
					</div>
					<div className='detailCard'>
						<img
							className='imgGamesContnainer'
							src='https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg'
							alt=''
						/>
						<P1Custom>likes</P1Custom>
					</div>
				</div>
				<h2 className='TitleHero'>Posts</h2>
				<div className='CardPostHero'>
					<div className='leftPosts'>
						<Imagen
							src={
								'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg?t=1662047426'
							}
							aspectRatio={'16:9'}
							height={'370px'}
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
								src={
									'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg?t=1662047426'
								}
								aspectRatio={'16:9'}
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
								src={
									'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg?t=1662047426'
								}
								aspectRatio={'16:9'}
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
