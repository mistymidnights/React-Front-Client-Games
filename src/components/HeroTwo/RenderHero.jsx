// import { useEffect, useState } from 'react';
// import { API } from '../../services/API';
// import RenderHeroCard from './RenderHeroCard';

// const RenderHero = () => {
// 	const [stray, setStray] = useState([]);
// 	console.log(stray);
// 	const getStray = async () => {
// 		API.get('/articulo/632486ce02996cc55b766c79').then((res) => {
// 			setStray(res.data.data.articulo);
// 		});
// 	};

// 	useEffect(() => {
// 		getStray();
// 	}, []);
// 	return (
// 		<>
// 			{stray.length ? (
// 				stray.map((game) => <RenderHeroCard game={game} key={game._id} />)
// 			) : (
// 				<p>Loading game...</p>
// 			)}
// 		</>
// 	);
// };

// export default RenderHero;
