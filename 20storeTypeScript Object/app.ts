// think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let book: { title: string; author: string; yearPublished: number } = {
    title: "The fall of the Ottomans",
    author: "Eugene Rogan",
    yearPublished: 2015
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

let company: { title:string; founders: string; founded: number } = {
    title: "Tesla,Inc",
    founders: "Martin Eberhard & Martin Eberhard",
    founded: 2003
};
console.log(`Company Info: ${company.title} by ${company.founders}, founded in ${company.founded}`);

let telescope: { Name:string; contractor: string; launched: number } = {
    Name: "James Webb Space Telescope",
    contractor: "Northrop Grumman",
    launched: 2022
};
console.log(`Company Info: ${telescope.Name} by ${telescope.contractor}, founded in ${telescope.launched}`);