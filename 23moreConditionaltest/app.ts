// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
//  Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
// Tests using the lower case function
//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
// Test whether an item is in a array
// Test whether an item is not in a array
let fruits:string [] = ["Mango", "Orange", "Peach", "Banana"]

console.log(fruits[3] == "Peach")
console.log(fruits[3] == "Banana")

let cars:string = 'BMW';
console.log(cars == "Honda")
console.log(cars == "BMW")

console.log(1050/5 == 210);
console.log(5385 * 34 == 454455 /54);

console.log(246 > 568);
console.log(568 > 344);

console.log(fruits.includes("Mango")); // True
console.log(fruits.includes("apple")); // False

console.log(!fruits.includes("Mango")); // False
console.log(!fruits.includes("apple")); // True