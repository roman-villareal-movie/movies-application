// const editOptions = {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   }
// };

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
    deleteData: (movieID) => {
      const urlDelete = `/api/movies/${movieID}`;
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      };
        fetch(urlDelete,  options)
          .then(response =>
          response.json().then(json => {
          return json;
        })
    );
  },


  // Method for using edit button to edit movies
  editData: (movieID, movieRating) => {
    const urlEdit = `/api/movies/${movieID}`;
    const editOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({movieRating}),
    };
    fetch(urlEdit, editOptions)
        .then(response =>
            response.json().then(json => {
              return json;
            })
        );
  }


};