import React from 'react';
import { HeroThreeContainer, HeroThree } from './HeroThree.element';

const HeroThre = () => {
	return (
		<HeroThreeContainer>
			<HeroThree>
				<h2 className='TitleHero'>Video</h2>
				<div className='CardPostHero'>
					<div className='leftPosts'>
						<iframe
							className='youtubePlayer'
							width='650'
							height='370'
							src='https://www.youtube.com/embed/QjeYtrpTv-o'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>
					<div className='rightPosts'>
						<div className='columRight'>
							<iframe
								className='youtubePlayer'
								width='311'
								height='175'
								src='https://www.youtube.com/embed/vrZjI2nKrn4'
								title='YouTube video player'
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowfullscreen
							></iframe>
							<iframe
								className='youtubePlayer'
								width='311'
								height='175'
								src='https://www.youtube.com/embed/F3jePdO9_jc'
								title='YouTube video player'
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
			</HeroThree>
		</HeroThreeContainer>
	);
};

export default HeroThre;
