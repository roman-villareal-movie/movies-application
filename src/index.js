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
$(document).ready(function(){


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
                html += "<div class='movieRatingClass'>" + "rating: " + movie.rating + "</div>";
                html += "<button class='editButton'>"+"edit"+"</button>";
                html += "<button class='deleteMovies'>"+"delete"+"</button>";
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

                        //==========DELETE MOVIES=======//

        // $('.deleteMovies').each(function() {
        //
        //     $(this).click(function(e) {
        //         e.preventDefault();
        //         console.log('hello')
        //
        //     })
        //
        //
        // });

    //===========SOPHIE EXAMPLE========///

    // $(document).on("click","button.deleteMovies",function(){
    //     console.log("hello");
    // })

    //==============END===================///

    // $(document).on("click", "button.deleteMovies", function() {
    //     let movieID =
    //     return fetch('/api/movies')
    //         .then(response => response.json())
    //         .then(movies => {
    //             console.log(movies[0].id);
    //         });
    // });

    //on click it should console log objects in ID
    $(document).on("click", "button.deleteMovies", function() {
        return fetch(`/api/movies`)
            .then(response => response.json())
            .then(movies => {
                let movieID = [];
                movieID.push(movies[0].id);
                console.log(movieID);
            });
    });
});
