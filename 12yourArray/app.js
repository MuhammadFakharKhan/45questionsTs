"use strict";
// 1ST METHOD
let myArray = ["photoshop", "illustartor", "premierpro", "aftereffects", "coreldraw"];
for (let i = 0; i < myArray.length; i++) {
    console.log(`I would like to use ${myArray[i]}`);
}
// 2ND METHOD
let vehicles = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
vehicles.forEach(vehicles => {
    console.log(`I would like to buy a ${vehicles}.`);
});
