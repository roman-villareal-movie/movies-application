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





const {getMovies, addNewMovie, deleteData, editData} = require('./api.js');
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
                html += `<form id="editForm"
                         <label for="editForm">Edit Rating</label>
                         <input id="editedRating" type="text">
                         </form>`;
                html += `<button data-rating="${movie.rating}" class='editRating btn btn-outline-primary'>edit</button>`;
                html += `<button data-id="${movie.id}" class='deleteMovies btn btn-outline-danger'>delete</button>`;
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
        //===========SOPHIE EXAMPLE========///

    // $(document).on("click","button.deleteMovies",function(){
    //     console.log("hello");
    // })


                    //=====WORKING DELETE BUTTON=====//
    $(document).on("click", "button.deleteMovies", function(e) {
        let movieID = $(e.target).data('id');
        deleteData(movieID);
        getMovies().then((movies) => {
            $('#movie-show').empty().append(makeHtml(movies))
        });
    });

                            //=====EDIT BUTTON=====//
    $(document).on("click", "button.editRating", function(e) {
        let movieID = $(e.target).data('id');

        let movieRating = $(e.target).data('rating');
        console.log(movieRating);
        let rating = $("#editedRating").val();
        console.log(rating);

        editData(movieID, rating);
        getMovies().then((movies) => {
            $('#movie-show').empty().append(makeHtml(movies))
        });

        // editData(newMovieRating);
        // getMovies().then((movies) => {
        //     $('#movie-show').empty().append(makeHtml(movies))
        // });
    });


});

// console log the event target: e.target
// console log the event target with jquery:  $(e.target)
// add a data attribute for the id on the buttons (<button data-id=${id}></button>)
// console.log the value of the data attribute when you click the button: $(e.target).data('id')
