const numberOfFilms = +prompt('Скільки фільмів ви сьогодні переглянули?', '');
console.log(numberOfFilms);

const  PersoneMovieTV ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true
};
const a =  prompt('Один з останніх переглянутих фільмів',''),
    b = prompt('Як ви його оціните?',''),
    c =  prompt('Один з останніх переглянутих фільмів',''),
    d = prompt('Як ви його оціните?', "");

PersoneMovieTV.movies[a] = b;
PersoneMovieTV.movies[c] = d;

console.log(PersoneMovieTV);
