// console.log(navigator.appVersion);

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSummary = function(){
//         return `${this.title} - ${this.author} - ${this.year}`;
//     }
// }


// const book1 = new Book(
//     "The Hobbit",
//     "J.R.R. Tolkien",
//     '1984'
// );
// console.log(book1.getSummary())

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }


// Book.prototype.getSummary = function() {
//     return `${this.title} - ${this.author} - ${this.year}`;
// }

// Book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// }

// Book.prototype.revise = function(newYear) {
//     this.year = newYear;
//     this.revised = true;
// };


// const book1 = new Book(
//     "The Hobbit",
//     "J.R.R. Tolkien",
//     '1984'
// );
// console.log(book1.getAge())
// book1.revise('2009')
// console.log(book1)


// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }


// Book.prototype.getSummary = function() {
//     return `${this.title} - ${this.author} - ${this.year}`;
// }


// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);
//     this.month = month;
// }

// const mag1 = new Magazine('mag one', 'John Smith', '2018', 'Jon');

// console.log(mag1)


// const bookProtos = {
//     getSummary: function() {
//         return `${this.title} - ${this.author} - ${this.year}`;
//     },
//     getAge: function() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
// }

// const book1 = Object.create(bookProtos);
// book1.title = 'The Hobbit';
// book1.author = 'J.R.R. Tolkien';
// book1.year = '1984';


// const book1 = Object.create(bookProtos,{
//     title: {value: 'The Hobbit'},
//     author: {value: 'J.R.R. Tolkien'},
//     year: {value: '1984'}
// });

// console.log(book1)


// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getSummary() {
//         return `${this.title} - ${this.author} - ${this.year}`;
//     }
//     getAge() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
//     revise(newYear) {
//         this.year = newYear;
//         this.revised = true;
//     }
// }

// const book1 = new Book('The Hobbit', 'omar', '2001');

// console.log(book1)



class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} - ${this.author} - ${this.year}`;
    }

}


class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

const mag1 = new Magazine('mag one', 'John Smith', '2018', 'Jon');

console.log(mag1.getSummary())