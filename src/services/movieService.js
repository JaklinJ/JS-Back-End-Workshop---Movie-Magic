const Movie = require('../models/Movie')


exports.getAll =  () => {
  
  return Movie.find();

};

exports.search = async (title, genre, year) => {
  let result = await Movie.find().lean() // TODO: Not ideal, filter result in mongodb

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
  const movie = Movie.findById(movieId);

  return movie;
};

exports.create =  (movieData) => {
  
  return Movie.create(movieData);

}

exports.attach =  async (movieId, castId) => {
  const movie =  await this.getOne(movieId);
  //TODO : validate castId if exists
  movie.casts.push(castId);

  return movie.save();

  //  return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } })
}