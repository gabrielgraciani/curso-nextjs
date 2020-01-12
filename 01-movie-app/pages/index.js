import React, {Component, useState, useEffect} from 'react'
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import {getMovies, getCategories} from '../actions';

const Home = (props) => {

	const {images, categories, movies} = props;
	const [filter, setFilter] = useState('');

	const changeCategory = (category) => {
		setFilter(category);
	};

	return (
		<div>
			<div className="home-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<SideMenu
								appName={"Movie DB"}
								categories={categories}
								changeCategory={changeCategory}
								activeCategory={filter}
							/>
						</div>
						<div className="col-lg-9">
							<Carousel images={images} />
							<h1>Displaying {filter} movies</h1>
							<div className="row">
								<MovieList movies={movies || []} />
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
};

	Home.getInitialProps = async () => {
		const movies = await getMovies();
		const categories = await getCategories();
		const images = movies.map((movie) => ({
			id: `image-${movie.id}`,
			url: movie.cover,
			title: movie.name
		}));

		return {movies, images, categories}
};

export default Home