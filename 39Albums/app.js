"use strict";
// Write a function called make_book() that builds a Object describing a book. The function should take
// in an author name and an book title, and it should return a Object containing these two pieces of information. Use
//  the function to make three dictionaries representing different books. Print each return value to show that Objects 
// are storing the book information correctly. Add an optional parameter to make_book() that allows you to store the
//  number of books on an author. If the calling line includes a value for the number of books, add that value to the 
// book Object. Make at least one new function call that includes the number of books of an author.
function make_book(author, title, books) {
    let book = { author, title, books };
    if (books) {
        book['books'] = books;
    }
    return book;
}
console.log(make_book("ADAM FREEMAN", "Essential TypeScript 5", 51));
console.log(make_book("Josh Goldberg", "Learning TypeScript"));
console.log(make_book("Nathan Rozentals", "Mastering TypeScript"));
