import React from 'react';
import { HeroTwoContainer, HeroTwoo } from './HeroTwo.element';

const HeroTwo = () => {
	return (
		<HeroTwoContainer>
			<HeroTwoo>
				<div className='gamesConntainer'>
					<h2 className='TitleHeroTwo'>Most played games</h2>
				</div>
				<div className='cardGames'>
					<div className='detailCard'>
						<img
							className='imgGamesContnainer'
							src='https://img.wattpad.com/cover/258103381-352-k807196.jpg'
							alt=''
						/>
					</div>
				</div>
			</HeroTwoo>
		</HeroTwoContainer>
	);
};

export default HeroTwo;
