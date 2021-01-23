let numberOfFilms;


function start() {
        numberOfFilms = +prompt('Скільки фільмів ви сьогодні переглянули?', '');

    while (numberOfFilms == ' ' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви сьогодні переглянули?', '');
    }
}

start();


const  PersoneMovieTV ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        PersoneMovieTV.genres[i - 1] = prompt(`Ваш улюблений жанр фільмів під номером ${i}`, "")
        console.log('Виконано')
    }
}
writeYourGenres();



function  rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один з останніх переглянутих фільмів', ''),
            b = prompt('Як ви його оціните?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            PersoneMovieTV.movies[a] = b;
            console.log("done");
        } else {
            console.log("Error");
            i--;
        }

    }
}
  rememberMyFilms();

    function detectPersonalLevel() {
        if (PersoneMovieTV.count < 10) {
            console.log('Переглянуто мало фільмів!')
        } else if (PersoneMovieTV.count >= 10 && PersoneMovieTV.count < 30) {
            console.log("Ви класичний глядач!")
        } else if (PersoneMovieTV.count >= 30) {
            console.log("Ви кіноман!");
        } else {
            console.log("Сталася помилка!")
        }
    }
function showMyDB(hidden) {
    if(!hidden) {
        console.log(PersoneMovieTV);
    }
}
showMyDB(PersoneMovieTV.privat);

detectPersonalLevel();


console.log(PersoneMovieTV);

