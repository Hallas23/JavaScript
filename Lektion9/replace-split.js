let str = "The cat's name is Garfield";
console.log(str.replace(/[ ']/, "-"));
// => The-cat's name is Garfield
console.log(str.replace(/[ ']/g, "-"));
// => The-cat-s-name-is-Garfield
console.log("No Name".replace(/^([a-zA-Z]{2,}) ([a-zA-Z]{4,})$/, "$2, $1"));
// => Name, No
console.log(str.split(/[ ']/));
// => [ 'The', 'cat', 's', 'name', 'is', 'Garfield' ]
