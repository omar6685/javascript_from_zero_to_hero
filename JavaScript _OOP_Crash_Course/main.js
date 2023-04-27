// console.log(navigator.appVersion);

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} - ${this.author} - ${this.year}`;
    }
}


const book1 = new Book(
    "The Hobbit",
    "J.R.R. Tolkien",
    '1984'
);
console.log(book1.getSummary())