"use strict";
// 1st method
let names = ["Sahil", "Ali", "Qaiser"];
for (let i = 0; i < names.length; i++) {
    console.log(`Assalam u Alikum ${names[i]} bhai`);
}
// 2nd method
let namess = ["Sahil", "Ali", "Qaiser"];
for (let name of namess) {
    console.log(`Assalam u Alikum ${name} bhai`);
}
