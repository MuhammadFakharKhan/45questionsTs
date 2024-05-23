// Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, but each message should be
//  personalized with the person’s name.

// 1st method Greet my friends using arrays in a for loop
let names: string[] = ["Sahil", "Ali", "Qaiser"];
for (let i = 0; i < names.length; i++) {
    console.log(`Assalam u Alikum ${names[i]} bhai`);
}



// 2nd method Greet my firend using arrays in a different way
let namess: string[] = ["Sahil", "Ali", "Qaiser"];
for (let name of namess) {
    console.log(`Assalam u Alikum ${name} bhai`);
}

