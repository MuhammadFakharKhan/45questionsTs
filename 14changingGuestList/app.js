"use strict";
let guestName = ["Sahil Adeem", "Qaiser Ahmed Raja", "Muhammad Ali"];
guestName.forEach(guestName => {
    console.log(`I would like to own a ${guestName}.`);
});
let unableToAttend = "Muhammad Ali";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Nouman Ali khan";
guestName[guestName.indexOf(unableToAttend)] = newGuest;
// New invitations
guestName.forEach(guestName => {
    console.log(`Dear ${guestName}, would you like to join me for dinner?`);
});
