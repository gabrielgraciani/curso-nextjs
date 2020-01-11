import {useRouter} from 'next/router';
import {getMovieById} from '../../actions';

const Movie = (props) => {
	const router = useRouter();
	const {id} = router.query;
	const {movie} = props;
	return(
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">{movie.name}</h1>
				<p className="lead">asdasdasdsadasdasdsa</p>
				<hr className="my-4"/>
				<p>dsadasdasdasdasd</p>
				<a href="" className="btn btn-primary btn-lg" role="button">Learn more</a>
			</div>
			<p>
				some description about the movie
			</p>
		</div>
	)
};

Movie.getInitialProps = async() => {
	const movie = await getMovieById("2");
	return {movie}
}

export default Movie;