String.prototype.quote = function () {
    return '"' + this + '"';
};
console.log("Test"); // => Test
console.log("Test".quote()); // => "Test"
