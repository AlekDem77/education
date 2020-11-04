"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    rememberMyFilms:  function rememberMyFilms(){
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
    },

    detectPersonalLevel: function detectPersonalLevel(){
        if (personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30){
            alert("Вы киноман");
        }
    },

    start: function start() {
        let numberOfFilms;
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
        personalMovieDB.count = numberOfFilms;

        while (numberOfFilms == "" || isNaN(numberOfFilms) || numberOfFilms == null ){
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
            personalMovieDB.count = numberOfFilms;
        }
    
    },

    showMyDB: function showMyDB(){
        if (personalMovieDB.privat === false){
            console.log(personalMovieDB);
        }
    },

    writeYouGenres: function writeYouGenres(){
        for (let i=0; i<3; i++){
            let genres = prompt("Ваш любимый жанр под номером "+(i+1));
            if(genres == null || genres == "" ){
                i--;
                alert("Ну напиши, сложно что-ли");
            } else {
                personalMovieDB.genres[i] = genres;
                if (i==2) {
                    personalMovieDB.genres.forEach(function(elem, index){
                        console.log(`Свойство ${index} имеет значение ${elem}`);
                    });
                }
            }
        }
        
    },

    togglevisibleMyDB: function togglevisibleMyDB(){
        if(personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }



};

    personalMovieDB.start();
    //personalMovieDB.rememberMyFilms();
    //personalMovieDB.detectPersonalLevel();
    //personalMovieDB.togglevisibleMyDB();
    //personalMovieDB.showMyDB();
    personalMovieDB.writeYouGenres();

 



