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



const {getMovies, addNewMovie, deleteData} = require('./api.js');

getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});


                            //=====loading=====//

// var myVar;
//
// function myFunction() {
//     myVar = setTimeout(showPage, 3000);
// }
//
// function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("myDiv").style.display = "block";
// }
//
// myFunction();


                            //=====DISPLAY MOVIE LIST=====??


        const makeHtml = (movies) => {
            let html = "";
            movies.forEach((movie) => {
                //append to HTML or
                // html += `<div> Title: ${movie.title}</div>`;
                // html += `<div>Rating: ${movie.rating}</div>`;
                html += '<div class="tile">';
                html += "<div class='movieTitle'>" + "title: " + movie.title + "</div>";
                html += "<div>" + "rating: " + movie.rating + "</div>";
                html += "<div><button>"+"edit"+"</button></div>";
                html += "<div><button>"+"delete"+"</button></div>";
                html += "</div>";

            });
            return html;
        };
        getMovies().then((movies) => {
            $('#movie-show').ready().append(makeHtml(movies))
        });


                             //=====ADD MOVIES=====//

        $('#add-movie').click(function(e) {
            e.preventDefault();
            let movieTitle = $('#movie-title').val();
            let movieRating  = $('#movie-rating').val();
            addNewMovie(movieTitle, movieRating);
            getMovies().then((movies) => {
                $('#movie-show').empty().append(makeHtml(movies))
            });
});



        // $('.delete-button').click(function(event) {
        //     $('.movieTitle')
        // });
