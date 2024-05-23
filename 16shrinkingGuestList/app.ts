// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//  Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only 
// two people for dinner.
//  Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
//  your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
//  Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
// an empty list at the end of your program.


let guests:string[] = ["Sahil Adeem", "Muhammad Ali","Qaiser Ahmed","Nouman Ali", "Amman Ullah"];
console.log("Sorry we can't invite all of the guests" );

console.log("Unfortunately, I can only invite three people for dinner.");

while (guests.length > 3) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest} bhai, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest} bhai, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows all invited guest list




// let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// console.log("Great news! I found a bigger dinner table!");

// // Adding more guests
// guests.unshift("Isaac Newton");
// guests.splice(guests.length / 2, 0, "Charles Darwin");
// guests.push("Ada Lovelace");

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });