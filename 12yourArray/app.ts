// 1Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several 
// examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle. 
// 1ST METHOD
let myArray:string[] = ["photoshop", "illustartor", "premierpro", "aftereffects", "coreldraw"]
for (let i = 0; i < myArray.length; i++) {
    console.log(`I would like to use ${myArray[i]}`);
}

// 2ND METHOD
let vehicles: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];

vehicles.forEach(vehicles => {
    console.log(`I would like to buy a ${vehicles}.`);
});