let str = "The cat's name is Garfield";
console.log(/^.+cat/.exec(str)[0]); // => The cat
console.log(/\b.a.*?\b/.exec(str)[0]); // => cat
console.log(/^[a-zA-Z]+$/.test("No Name")); // => false
console.log(/^[a-zA-Z]{2,} [a-zA-Z]{4,}$/.test("No Name")); // => true
