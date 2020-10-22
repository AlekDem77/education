"use strict";

let numberOfFilms;

  numberOfFilms = prompt("Сколько фильмов вы уде посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: [],
    genres: [],
    privat: false
};
    let firstFilm = prompt("Один из просмотренных последних фильмов");
    personalMovieDB.movies[firstFilm] = prompt("На сколько бы вы его оценили?");
    let secondtFilm = prompt("Один из просмотренных последних фильмов");
    personalMovieDB.movies[secondtFilm] = prompt("На сколько бы вы его оценили?");
 
console.log(personalMovieDB);