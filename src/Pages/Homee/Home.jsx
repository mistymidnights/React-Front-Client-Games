import React from 'react';
import HeroOne from '../../components/HeroOne/HeroOne';
import HeroTwo from '../../components/HeroTwo/HeroTwo';
import HeroThre from '../../components/HeroThree/HeroThree';
import FAQ from '../../components/FAQ/FAQ';

const Home = () => {
	return (
		<>
			<HeroOne />
			<HeroTwo />
			<HeroThre />
			<FAQ />
		</>
	);
};

export default Home;
