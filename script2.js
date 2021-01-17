const numberOfFilms = +prompt('Скільки фільмів ви сьогодні переглянули?', '');
console.log(numberOfFilms);

const  PersoneMovieTV ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true
};

for(let i = 0; i < 2; i++) {
    const a =  prompt('Один з останніх переглянутих фільмів',''),
        b = prompt('Як ви його оціните?','');
    if (a != null && b!= null && a != '' && b != '' && a.length < 50 ) {
        PersoneMovieTV.movies[a] = b;
        console.log("done");
    } else {
        console.log("Error");
        i--;
    }

}

if(PersoneMovieTV.count < 10){
    console.log('Переглянуто мало фільмів!')
} else if (PersoneMovieTV.count >= 10 && PersoneMovieTV.count < 30) {
    console.log("Ви класичний глядач!")
} else if (PersoneMovieTV.count >= 30) {
    console.log("Ви кіноман!");
} else {
    console.log("Сталася помилка!")
}
console.log(PersoneMovieTV);

