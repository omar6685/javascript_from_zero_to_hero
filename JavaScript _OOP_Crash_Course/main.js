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

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}


Book.prototype.getSummary = function() {
    return `${this.title} - ${this.author} - ${this.year}`;
}

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
};


const book1 = new Book(
    "The Hobbit",
    "J.R.R. Tolkien",
    '1984'
);
console.log(book1.getAge())
book1.revise('2009')
console.log(book1)