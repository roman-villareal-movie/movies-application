/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */

//Jquery: install
var $ = require("jquery");

//test for jquery functionality
// $('body').css('background-color', 'blue');

const {getMovies} = require('./api.js');

getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});


//Purpose of this is to show all movies on page!
// getMovies().then((movies) => {
//     //append to HTML or
//     console.log('test for show movies')
//     console.log(movies)
//     $('.showmovie').click(function () {
//         movies.forEach(({title, rating, id}) => {
//             //append to HTML or
//             $(this).val()
//
//             $('#movie-show').html(`id#${movie.id} - ${movie.title} - rating: ${movie.rating}`);
//         })
//     }).catch((error) => {
//         alert("movies failed to load");
//         console.log(error);
//     })
// })


//Second Choice:

    //append to HTML or
    // console.log('test for show movies')
    // console.log(movies)
    // $('.show-movie').click(function () {
        const makeHtml = (movies) => {
            let html = "";
            movies.forEach((movie) => {
                //append to HTML or
                html += `<div> Title: ${movie.title}</div>`
                html += `<div>Rating: ${movie.rating}</div>`
                html += `<div>Movie: ${movie.id}</div>`


            })
            return html;
        }
        getMovies().then((movies) => {
            $('#movie-show').ready().append(makeHtml(movies))
            // $('#movie-show').append(makeHtml(`id#${movies.id} - ${movies.title} - rating: ${movies.rating}`));
        });
    // })