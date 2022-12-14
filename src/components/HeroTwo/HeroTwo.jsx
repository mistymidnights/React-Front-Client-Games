import { Link } from 'react-router-dom';
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
							src='https://res.cloudinary.com/dq186ej4c/image/upload/v1663321123/game/y1cdrg6iprpowku2dx8w.jpg'
							alt=''
						/>
						{/* <P1Custom>likes</P1Custom> */}
					</div>
					<div className='detailCard' id='game2Hero'>
						<img
							className='imgGamesContnainer'
							src='https://res.cloudinary.com/dq186ej4c/image/upload/v1663321369/game/lqfuendkzoqhajpi9uur.jpg'
							alt=''
						/>
						{/* <P1Custom>likes</P1Custom> */}
					</div>
					<div className='detailCard' id='game3Hero'>
						<img
							className='imgGamesContnainer'
							src='https://res.cloudinary.com/dq186ej4c/image/upload/v1663322565/game/vdx78yt5pkmqrt1j0s5q.jpg'
							alt=''
						/>
						{/* <P1Custom>likes</P1Custom> */}
					</div>
					<div className='detailCard' id='game4Hero'>
						<img
							className='imgGamesContnainer'
							src='https://res.cloudinary.com/dq186ej4c/image/upload/v1663322746/game/etdvtxbwhkvbim7xobl9.jpg'
							alt=''
						/>
						{/* <P1Custom>likes</P1Custom> */}
					</div>
					<div className='detailCard' id='game5Hero'>
						<img
							className='imgGamesContnainer'
							src='https://res.cloudinary.com/dq186ej4c/image/upload/v1663321980/game/hdbszwnof7gnfzqc2iww.jpg'
							alt=''
						/>
						{/* <P1Custom>likes</P1Custom> */}
					</div>
				</div>
				<div className='titleWBtn'>
					<h2 className='TitleHero'>Posts</h2>
					<Link to={'/posts'}>
						<ButtonStyle variant={'small'} height={'30px'}>
							More
						</ButtonStyle>
					</Link>
				</div>
				<div className='CardPostHero'>
					<div className='leftPosts'>
						<Imagen
							className='postCard'
							src={
								'https://res.cloudinary.com/dq186ej4c/image/upload/v1663338577/game/pzzhvexigs1lrjr0rjpt.jpg'
							}
							aspectRatio={'16:9'}
							height={'370px'}
							width={'650px'}
							borderRadius={'15px'}
						>
							<div style={{ top: '60%', left: '0' }}>
								<h2 className='backTitlePostMAIN'>
									he Last of Us Part 1 Uses PlayStation 5's Haptic Feedback to
									Help Deaf Gamers
								</h2>
								<p className='backTitlePost'>
									he PS5 remake improves accessibility in unique ways.
								</p>
							</div>
						</Imagen>
					</div>
					<div className='rightPosts'>
						<div className='columRight'>
							<Imagen
								className='postCard'
								src={
									'https://res.cloudinary.com/dq186ej4c/image/upload/v1663339450/game/mez07sagftkaclr5kwng.jpg'
								}
								aspectRatio={'16:9'}
								width={'297px'}
								height={'175px'}
								borderRadius={'15px'}
							>
								<div style={{ top: '60%', left: '0' }}>
									<h2 className='backTitlePostMAIN'>Sonic Frontiers</h2>
									<p className='backTitlePost' id='subTitleMain'>
										Sega itself appears to have leaked a November release date
										for Sonic Frontiers after a new trailer
									</p>
								</div>
							</Imagen>
							<Imagen
								className='postCard'
								src={
									'https://res.cloudinary.com/dq186ej4c/image/upload/v1663340467/game/ixdv8emnrx1s1v2zpgoi.jpg'
								}
								aspectRatio={'16:9'}
								width={'297px'}
								height={'175px'}
								borderRadius={'15px'}
							>
								<div style={{ top: '60%', left: '0' }}>
									<h2 className='backTitlePostMAIN'>
										NBA 2K23 Perfectly Simulates 1980s{' '}
									</h2>
									<p className='backTitlePost' id='subTitleMain2'>
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
