let str = "The cat's name is Garfield";
console.log(/cat|dog/.test(str)); // => true
let matched = /^([a-zA-Z]{2,}) ([a-zA-Z]{4,})$/.exec("No Name");
console.log(matched[0]); // => No Name
console.log(matched[1]); // => No
console.log(matched[2]); // => Name
