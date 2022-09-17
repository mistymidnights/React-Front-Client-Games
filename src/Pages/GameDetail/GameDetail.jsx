import { useEffect, useState } from 'react';
import { API } from '../../services/API';
import '../../Games.css';
import ButtonStyle from '../../components/UI/ButtonStyle/Button';
import { Link } from 'react-router-dom';
import GameDetailCard from './GameDetailCard';
import { HeroGames } from '../Game/Game.element';
import { useParams } from 'react-router-dom';

const GameDetail = () => {
	const [gameDetail, setGameDetail] = useState([]);

	const { id } = useParams();

	const getGameDetail = async () => {
		API.get(`/juego/${id}`).then(res => {
			setGameDetail(res.data.data.juego);
			console.log(res.data.data.juego);
		});
	};

	useEffect(() => {
		getGameDetail();
	}, []);

	return (
		<>
			<HeroGames>
				<div className='BtnGames'>
					<ButtonStyle variant={'small'}>
						<Link className='LinkBtn' to={'/game'}>
							Games
						</Link>
					</ButtonStyle>

					<ButtonStyle variant={'small'}>
						<Link className='LinkBtn' to={'/freetoplay'}>
							Free to play
						</Link>
					</ButtonStyle>
				</div>
				<div className='games_container'>
					{gameDetail.length ? (
						gameDetail.map(game => (
							<GameDetailCard game={game} key={game._id} />
						))
					) : (
						<p>Loading Games...</p>
					)}
				</div>
			</HeroGames>
		</>
	);
};

export default GameDetail;
