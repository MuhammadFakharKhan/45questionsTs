"use strict";
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
//  If the alien is green, print a message that the player earned 5 points.
//  If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
//  Write three versions of this program, making sure each message is printed for the appropriate color alien.
// 1ST VERSION
let alien_colors = "green";
if (alien_colors == "green") {
    console.log("You have earned 5 points");
}
else if (alien_colors == "yellow") {
    console.log("You have earned 10 points");
}
else if (alien_colors == "red") {
    console.log("You have earned 15 points");
}
// 2ND VERSION
let alien_colors2 = "yellow";
if (alien_colors2 == "green") {
    console.log("You have earned 5 points");
}
else if (alien_colors2 == "yellow") {
    console.log("You have earned 10 points");
}
else if (alien_colors2 == "red") {
    console.log("You have earned 15 points");
}
// 3RD VERSION
let alien_colors3 = "red";
if (alien_colors3 == "green") {
    console.log("You have earned 5 points");
}
else if (alien_colors3 == "yellow") {
    console.log("You have earned 10 points");
}
else if (alien_colors3 == "red") {
    console.log("You have earned 15 points");
}
