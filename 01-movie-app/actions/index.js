import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const MOVIE_DATA = [];

const CATEGORY_DATA = [
	{id: 'c-1', name: 'drama'},
	{id: 'c-2', name: 'action'},
	{id: 'c-3', name: 'adventure'},
	{id: 'c-4', name: 'historical'}
];

export const getMovies = () => {
	return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => {
		return res.data;
	})
};

export const getMovieById = (id) => {
	return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
};

export const getCategories = () => {
	return new Promise((resolve, reject) => {
		resolve(CATEGORY_DATA);
		reject('Cannot fetch data!');
	});
};

export const createMovie = (movie) => {
	return new Promise((resolve, reject) => {
		movie.id = Math.random().toString(36).substr(2, 7);
		MOVIE_DATA.push(movie);
		resolve(MOVIE_DATA);
		reject('Cannot fetch data!');
	})
};