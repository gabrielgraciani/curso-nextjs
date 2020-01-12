import {useRouter} from 'next/router';
import {getMovieById, deleteMovie} from '../../../actions';

const Movie = (props) => {
	const router = useRouter();
	const {id} = router.query;
	const {movie} = props;

	const handleDeleteMovie = () => {
		deleteMovie(id).then(() => {
			router.push('/');
		});
	};
	return(
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">{movie.name}</h1>
				<p className="lead">{movie.description}</p>
				<hr className="my-4"/>
				<p>{movie.genre}</p>
				<button href="" className="btn btn-primary btn-lg mr-1" role="button">Learn more</button>
				<button onClick={() => handleDeleteMovie(id)} className="btn btn-danger btn-lg mr-1" role="button">Delete</button>
				<button onClick={() => router.push(`/movies/${id}/edit`)} className="btn btn-warning btn-lg" href="#" role="button">Edit</button>
			</div>
			<p className="desc-text">
				{movie.longDescription}
			</p>

			<style jsx>{`
				.desc-text{font-size:21px;}
			`}
			</style>
		</div>
	)
};

Movie.getInitialProps = async({query}) => {
	const movie = await getMovieById(query.id);
	return {movie}
};

export default Movie;