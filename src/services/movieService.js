const Movie = require('../models/Movie')

const movies = [
  {
    _id: 1,
    title: 'Pinocchio',
    genre: 'Adventure',
    director: ' Robert Zemeckis',
    year: '2022',
    imageUrl: 'https://musicart.xboxlive.com/7/0e875100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    rating: '5.1',
    description: "Hopeful of changing his life with a miracle, sad-eyed Italian woodcarver Geppetto puts the finishing touches on his latest creation. And having put his heart into making the wooden Pinocchio marionette, the lonely artisan takes a step back and makes a wish on a bright star. But the universe always listens to a longing heart. As a result, the mysterious magic of the benevolent Blue Fairy takes over, granting Geppetto's wish in the dead of night. As the effervescent essence of life reanimates the newly built puppet, innocent Pinocchio has everything he needs to be a boy. Now he is the living proof that no request is too extreme. However, can smiling Pinocchio prove himself brave, truthful, and unselfish?"
  }
];

exports.getAll = () => {
  return movies.slice();
};

exports.search = (title, genre, year) => {
  let result = movies.slice();

  if (title) {
    result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
  };
  if (genre) {
    result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
  };
  if (year) {
    result = result.filter(movie => movie.year.toLowerCase() === year.toLowerCase());
  };

  return result;
}

exports.getOne = (movieId) => {
  const movie =  movies.find(movie => movie._id == movieId);

  return movie;
};

exports.create = async (movieData) => {
  const result = await Movie.create(movieData);

  return result;

}