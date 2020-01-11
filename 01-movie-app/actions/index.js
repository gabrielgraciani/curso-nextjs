const MOVIE_DATA = [
	{
		id: '1',
		name: 'The Shawshank Redemption',
		releaseYear: 1994,
		description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
		longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices mollis libero, volutpat luctus ante convallis ac. Integer condimentum lacinia nisl at lobortis. Curabitur sit amet feugiat libero, facilisis viverra augue. Proin a massa ut augue tristique fringilla. In hac habitasse platea dictumst. Sed maximus ex et odio venenatis, quis sodales velit faucibus. Curabitur fringilla, orci id euismod viverra, turpis justo laoreet sem, in volutpat eros dui nec neque. Etiam maximus tempus leo non malesuada. Donec ac molestie enim. Cras vel volutpat nibh. Etiam bibendum non tortor vel luctus. In eget turpis facilisis, pharetra magna et, bibendum metus. Cras eu libero cursus, eleifend ligula quis, efficitur justo. Aliquam dictum et nulla ut lacinia. Duis sit amet finibus felis, id interdum dui. Suspendisse risus dui, tristique nec felis nec, efficitur mollis felis.",
		rating: 4.8,
		genre: 'drama',
		image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
		cover: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=60"
	},
	{
		id: '2',
		name: 'The Dark Knight',
		releaseYear: 2008,
		description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
		longDescription: "Praesent porttitor vitae ante venenatis volutpat. Donec eu blandit ante, eget pellentesque est. Praesent posuere dolor nec est iaculis auctor. Cras consectetur nunc arcu, eget varius massa sagittis ac. Sed semper augue ligula, et luctus augue lobortis sed. Donec iaculis tincidunt elementum. Vestibulum ut leo porttitor, consequat tortor ac, venenatis nunc. Sed egestas dui ut eros finibus molestie. Nam consectetur elit ullamcorper, mollis tellus at, cursus elit. Pellentesque tempus sed nisi a volutpat.",
		rating: 4.7,
		genre: 'action, crime, drama',
		image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600',
		cover:"https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=60"
	},
	{
		id: '3',
		name: 'Lord of the Rings',
		releaseYear: 2004,
		description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
		longDescription: "Duis efficitur, metus a bibendum luctus, nunc nibh facilisis lacus, vitae consectetur turpis libero vitae lorem. Cras lacus nisi, bibendum vel condimentum nec, aliquam eget quam. Sed tristique vehicula nunc, at lacinia velit laoreet eu. Aliquam urna erat, volutpat ultricies vehicula non, pharetra at dui. Duis tempor dolor et odio consequat, id lobortis est facilisis. Proin quis velit lorem. Morbi in rutrum massa. Cras efficitur neque at orci consequat suscipit. Aliquam ullamcorper consequat augue, sit amet gravida elit sodales non. Donec in dictum justo, vitae porta justo.",
		rating: 4.9,
		genre: 'adventure, drama, fantasy',
		image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600',
		cover: "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=60"
	}
];

const CATEGORY_DATA = [
	{id: 'c-1', name: 'drama'},
	{id: 'c-2', name: 'action'},
	{id: 'c-3', name: 'adventure'},
	{id: 'c-4', name: 'historical'}
];

export const getMovies = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(MOVIE_DATA);
			reject('Cannot fetch data!');
		}, 0);
	})
};

export const getMovieById = (id) => {
	return new Promise((resolve, reject) => {
		/*const movieIndex = MOVIE_DATA.findIndex((movie) => {
			return movie.id === id;
		});*/
		const movieIndex = MOVIE_DATA.findIndex(movie => movie.id === id);

		const movie = MOVIE_DATA[movieIndex];

		resolve(movie);
	})
};

export const getCategories = () => {
	return new Promise((resolve, reject) => {
		resolve(CATEGORY_DATA);
		reject('Cannot fetch data!');
	});
};