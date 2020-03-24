let button = document.getElementById("button");
let input = document.getElementById("textfelt");
button.style.width = "50px";
button.style.height = "20px";

function check() {
    let string = input.value;
    let isGood = /\d{1,2}[/:-s]\d{1,2}[/:-]\d+/.test(string);
    let numbers = string.split(/[/:-]/);
    let day = parseInt(numbers[0]);
    let month = parseInt(numbers[1]);
    let year = parseInt(numbers[2]);
    if (day > 31 || day < 0) {
        isGood = false;
    }
    if (month > 12 || month < 0) {
        isGood = false;
    }
    if (year < 0) {
        isGood = false;
    }
    if (!isGood){
        input.value = "Noob";
    }
    else {
        input.value = "you are a goode boye"
    }
}

button.onclick = check;

