"use strict";
let guests = ["Sahil Adeem", "Muhammad Ali", "Qaiser Ahmed", "Nouman Ali", "Amman Ullah"];
console.log("Sorry we can't invite all of the guests");
console.log("Unfortunately, I can only invite three people for dinner.");
while (guests.length > 3) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest} bhai, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest} bhai, you're still invited to dinner.`);
});
guests.splice(3, guests.length);
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
