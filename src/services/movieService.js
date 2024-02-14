const Movie = require('../models/Movie')
const Cast =require('../models/Cast')


exports.getAll =  () => {
  
  return Movie.find();

};

exports.search = (title, genre, year) => {
  let query = {}; // TODO: Not ideal, filter result in mongodb

  if (title) {
   
    query.title = new RegExp(title, 'i');
  };
  if (genre) {
   
    query.genre =  genre.toLowerCase();
  };
  if (year) {
    query.year = year;
  };

  return Movie.find(query);
}

exports.getOne = (movieId) => {
  const movie = Movie.findById(movieId).populate('casts');

  return movie;
};

exports.create =  (movieData) => {
  
  return Movie.create(movieData);

}

exports.attach =  async (movieId, castId) => {
  const movie =  await this.getOne(movieId);
  
  //This is optional and we don't need it
  // const cast = await Cast.findById(castId);
  // cast.movies.push(movie);
  // await cast.save();


  //TODO : validate castId if exists
  //TODO: check if castID is valid
  movie.casts.push(castId);
 

  await movie.save();
  
 

  //  return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } })
}