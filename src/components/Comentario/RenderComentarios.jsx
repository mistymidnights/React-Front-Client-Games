const RenderComentarios = ({ comentario }) => {
	const foo = new Date(comentario.createdAt);

	return (
		<div>
			<div>
				{comentario.image ? <img src={comentario?.image} alt='' /> : null}
			</div>
			<div>
				<p>{comentario.contenido}</p>
			</div>
			<div>
				<p>{`${foo.toDateString()}  ${foo.toLocaleTimeString()}`}</p>
			</div>
			<div>
				<p>{comentario.nombre}</p>
			</div>
		</div>
	);
};

export default RenderComentarios;
