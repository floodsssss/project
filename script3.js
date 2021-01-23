'use strict';
const numberOfBook = +prompt("Скільки книг ви прочитали?", '');
console.log(numberOfBook);

const bookDB = {
    count: numberOfBook,
    book: {},
    hero: {},
    genres: [],
    private: false
}

for(let i = 1; i < 3; i++) {
    const a = prompt("Остання прочитана книга?", ''),
        b = prompt("Як ви її оціните?", '')
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        bookDB.book[a] = b;
        console.log('Done');
    } else {
        console.log("Error");
        i--;
    }
}

if(bookDB.count < 10 && bookDB.count != null && bookDB.count != '') {
    console.log('Ви прочитали мало книг!');
} else if(bookDB.count >= 10 && bookDB.count <= 30) {
    console.log('Ви багато читаєте!')
} else if(bookDB.count > 30) {
    console.log("Супер читач!");
} else {
    console.log("Сталася помилка");
}


console.log(bookDB);