"use strict";
let guests = ["Amaan Ullah", "Muhammad Ali", "Qaiser Ahmed"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Sahil Adeem"); // inserts elements at the start of an array
guests.splice(guests.length / 1, 0, "Nouman Ali"); // deletes an element or replace it woith others
guests.push("Ali Salman"); // insert an element at the end of an array
guests.forEach(guest => {
    console.log(`Dear ${guest} bhai, would you like to join me for dinner?`);
});
