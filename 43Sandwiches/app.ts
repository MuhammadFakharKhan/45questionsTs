// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter
//  that collects as many items as the function call provides, and it should print a summary of the sandwich that is 
// being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("bun", "cheese");
make_sandwich("onion", "lettuce","tomato");
make_sandwich("chicken", "ketchup", "mayo", "bun");

// ...When used in function parameter definitions, the ellipsis indicates a rest parameter. This allows you to capture
//  an indefinite number of arguments into an array.