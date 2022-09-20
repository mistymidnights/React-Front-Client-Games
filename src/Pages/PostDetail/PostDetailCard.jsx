import '../../Games.css';
import {
	DescriptionDetail,
	PostDetailCardElement,
	RightContent,
} from './PostDetail.element';

const PostDetailCard = ({ post }) => {
	console.log(post);

	return (
		<>
			<PostDetailCardElement>
				<div className='.profile_img_container-detail'>
					{post.image !== 'undefined' ? (
						<img
							className='imageCardGamePost'
							src={post.image}
							alt={post.titulo}
						/>
					) : (
						<img
							src='https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg'
							alt={post.titulo}
						/>
					)}
				</div>
				<RightContent>
					{!post.titulo ? (
						<h1 className='titleDetail'>No name</h1>
					) : (
						<h1 className='titleDetail'>{post.titulo}</h1>
					)}
					<div className='infoTopDetail'>
						{!post.autor ? (
							<h3>Not launched</h3>
						) : (
							<h3 className='dateMargin'>{post.autor}</h3>
						)}
					</div>
					<DescriptionDetail>
						{!post.contenido ? (
							<p className='descripcionText'>Not launched</p>
						) : (
							<p className='descripcionText'>{post.contenido}</p>
						)}
					</DescriptionDetail>
				</RightContent>
			</PostDetailCardElement>
		</>
	);
};

export default PostDetailCard;
