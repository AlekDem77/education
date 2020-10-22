"use strict";

let numberOfFilms;

    start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    rememberMyFilms();
    detectPersonalLevel();
    showMyDB();
    writeYouGenres();
 

    function rememberMyFilms(){
        for (let i=0; i<2; i++){

            let film = prompt("Один из просмотренных последних фильмов");
            let reit = prompt("На сколько бы вы его оценили?");
            if (film == null || film == "" || film.length >= 50 || reit == "" || reit == null){
                i--;
                alert("Вы оставили поле пустым или ввели слишком большое значение, попробуйте еще раз.");
            } else {
                personalMovieDB.movies[film] = reit;
            }
        }
    }

    function detectPersonalLevel(){
        if (personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30){
            alert("Вы киноман");
        }
    }

    function start() {
        numberOfFilms = +prompt("Сколько фильмов вы уде посмотрели?");

        while (numberOfFilms == "" || isNaN(numberOfFilms) || numberOfFilms == null ){
            numberOfFilms = +prompt("Сколько фильмов вы уде посмотрели?");
        }
    }

    function showMyDB(){
        if (personalMovieDB.privat === false){
            console.log(personalMovieDB);
        }
    }

    function writeYouGenres(){
        for (let i=0; i<3; i++){
            let genres = prompt("Ваш любимый жанр под номером "+(i+1));
            if(genres == null || genres == "" ){
                i--;
                alert("Ну напиши, сложно что-ли");
            } else {
                personalMovieDB.genres[i] = genres;
            }
        }
        
    }