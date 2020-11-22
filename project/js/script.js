
'use strict';

document.addEventListener('DOMContentLoaded', () =>{

    const movieDB = {
        movies: [
            "AAAA",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const marketBloc = document.querySelectorAll(".promo__adv")[0],
        spam = marketBloc.querySelectorAll("img"),
        genre = document.querySelectorAll(".promo__genre")[0],
        divPict = document.querySelectorAll(".promo__bg")[0],
        filmListul = document.querySelectorAll(".promo__interactive-list")[0],
        addForm = document.querySelector(".add"),
        film = addForm.querySelector(".adding__input"),
        checkbx = addForm.querySelector('[type="checkbox"]');
    

    spam.forEach(item =>{
        item.remove();
    });
    
    genre.innerHTML = "Драмма";
    divPict.style.background = "url('/project/img/bg.jpg') center center/cover no-repeat";
    
    
    createUl(movieDB.movies, filmListul);
    
    addForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        if (film.value){
            if (film.value.length>21){
                film.value.substring(0, 21);
                movieDB.movies.push((film.value.substring(0, 21)+"..."));
            } else {
                movieDB.movies.push(film.value);
            }
            check(checkbx.checked);
            createUl(movieDB.movies, filmListul);
            addForm.reset();
        } else {
            alert("Введите название фильма!");
        }

    });
   

    function check(bool){
        if(bool == true){
            console.log("Добавляем любимый фильм.");
        }
    }
     
    function createUl(database, el){
        database.sort();
        el.innerHTML = " ";
        database.forEach((film, i ) =>{
            el.innerHTML += `<li class="promo__interactive-item">${i+1+". "+database[i]}
                                    <div class="delete"></div>
                                    </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                console.log(movieDB.movies);
                createUl(movieDB.movies, filmListul);
            });
        });
        
    }
});


 // for (let node of formAdd.childNodes){
    //     if (node.textContent == 'Подтвердить'){
    //         node.addEventListener('click', (e) =>{
    //             e.preventDefault();
    //             const film = formAdd.querySelector(".adding__input");
    //             const checkbx = formAdd.querySelector('[type="checkbox"]');
    //             if (film.value == '' || film.value == null){
    //                 alert("Введите название фильма!");
    //             } else if (film.value.length>21) {
    //                 if(checkbx.checked == true){
    //                     console.log("Добавляем любимый фильм.");
    //                 }
    //                  film.value.substring(0, 21);
    //                  movieDB.movies.push((film.value.substring(0, 21)+"..."));
    //                  createUl();
                    
    //             } else {
    //                 if(checkbx.checked == true){
    //                     console.log("Добавляем любимый фильм.");
    //                 }
    //                 movieDB.movies.push(film.value);
    //                 createUl();
    //             }
    //         });
    //     } 
        
    // }



