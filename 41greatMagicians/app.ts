// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
//  the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that 
// the list has actually been modified.

let magicians: string[] = ["el carey", "jordunaz", "pareygz"];
function show_magicians(magician56: string[]) {
    magician56.forEach(magician56 => {
        console.log(magician56);
    });
}
show_magicians(magicians);

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] +=" the Great";
    }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names