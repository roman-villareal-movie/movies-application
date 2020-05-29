module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
        .then(response => response.json());
  },

    addNewMovie: (movieTitle, movieRating) => {
      const newMovie = {title: movieTitle, rating: movieRating};
      const url = '/api/movies';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      };
      fetch(url, options)
          .then(/* post was created successfully */)
          .catch(/* handle errors */)
    },

  //Method for using delete button to delete movies.
  deleteData: (id) => {
    const deleteMovie = {id:id};
    const urlDelete = '/api/movies/${id}';
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };

      fetch(urlDelete,  options)
    method: 'delete'
    .then(response =>
      response.json().then(json => {
        return json;
      })

  );
}


};