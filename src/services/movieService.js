const movies = [
    {
        title: 'Pinocchio',
        genre: 'Adventure',
        director: ' Robert Zemeckis',
        date: '2022',
        imageUrl: 'https://www.imdb.com/title/tt4593060/mediaviewer/rm3137408769/?ref_=tt_ov_i',
        rating: '5.1',
        description: "Hopeful of changing his life with a miracle, sad-eyed Italian woodcarver Geppetto puts the finishing touches on his latest creation. And having put his heart into making the wooden Pinocchio marionette, the lonely artisan takes a step back and makes a wish on a bright star. But the universe always listens to a longing heart. As a result, the mysterious magic of the benevolent Blue Fairy takes over, granting Geppetto's wish in the dead of night. As the effervescent essence of life reanimates the newly built puppet, innocent Pinocchio has everything he needs to be a boy. Now he is the living proof that no request is too extreme. However, can smiling Pinocchio prove himself brave, truthful, and unselfish?"
      }
];

exports.create = (movieData) => {
   movies.push(movieData); 
}