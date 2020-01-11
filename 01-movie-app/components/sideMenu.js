import React from 'react';
import Modal from './modal';
import MovieCreateForm from './movieCreateForm';
import {createMovie} from '../actions';

const SideMenu = (props) => {
	const {categories} = props;
	const handleCreateMovie = (movie) => {
		createMovie(movie).then((movies) => {
			console.log(JSON.stringify(movies));
		})
	};
	return(
		<div>
			<Modal hasSubmit={false}>
				<MovieCreateForm handleFormSubmit={handleCreateMovie} />
			</Modal>
			<h1 className="my-4">{props.appName}</h1>
			<div className="list-group">
				{categories.map(category =>
					<a href="#" className="list-group-item" key={category.id}>{category.name}</a>
				)}
			</div>
		</div>
	)
};

export default SideMenu;