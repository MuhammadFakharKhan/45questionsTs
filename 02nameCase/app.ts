// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let sname : string = "M.fakhar khan";
console.log(sname.toLowerCase()); // display name in lower case
console.log(sname.toUpperCase()); // display name in upper case
console.log(sname.charAt(0).toUpperCase() + sname.slice(1).toLowerCase()); // display first alphabet in upper case & others in lower case