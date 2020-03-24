let users = "https://jsonplaceholder.typicode.com/users";
let beskeder = document.getElementById("Beskeder");

beskeder.style.height = "300px";
beskeder.style.width = "500px";

async function logDataAsync(url) {
    try {
        const response = await fetch(url);
        const array = await response.json();
        return array;
    }
    catch (e) {
        console.log("Exception " + e + "2")
    }
}

async function setBeskeder() {
    let array = await logDataAsync(users);
    let string = "";
    for (let element of array) {
        string += element.name + " " + element.id + " " + element.company.name + " \n";
    }
    beskeder.innerHTML = string;
}

setBeskeder()

