// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//  Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.
//  Add one new guest to the beginning of your array.
//  Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//  Print a new set of invitation messages, one for each person in your list.

let guests: string[] = ["Amaan Ullah", "Muhammad Ali", "Qaiser Ahmed"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Sahil Adeem"); // inserts elements at the start of an array
guests.splice(guests.length / 1, 0, "Nouman Ali");// deletes an element or replace it woith others
guests.push("Ali Salman");// insert an element at the end of an array

guests.forEach(guest => {
    console.log(`Dear ${guest} bhai, would you like to join me for dinner?`);
});