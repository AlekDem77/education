"use strict";

let numberOfFilms;

  numberOfFilms = +prompt("Сколько фильмов вы уде посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
    for (let i=0; i<2; i++){

        let film = prompt("Один из просмотренных последних фильмов");
        let reit = prompt("На сколько бы вы его оценили?");
        if (film == "" || film.length >= 50 || reit == ""){
            i--;
            alert("Вы оставили поле пустым или ввели слишком большое значение, попробуйте еще раз.");
        } else {
            personalMovieDB.movies[film] = reit;
        }
    }

    if (personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if (10 < personalMovieDB.count < 30){
        alert("Вы классический зритель");
    } else if (10 < personalMovieDB.count < 30){
        alert("Вы киноман");
    }
    
 
console.log(personalMovieDB);