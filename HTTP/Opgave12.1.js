let table = document.querySelector("table");
let url =  "https://jsonplaceholder.typicode.com/users";

async function tableCreator(url) {
    try {
        const response = await fetch(url);
        const array = await response.json();
       for (let i = 0; i < array.length; i++) {
           let newRow = document.createElement("tr");
           newRow.innerHTML = "<td>" +  array[i].id + "</td>" + "<td>" + array[i].name + "</td>" +  "<td>" + array[i].company.name + "</td>";
           table.appendChild(newRow);
       }
    }
    catch (e) {
        console.log("Exception " + e + "2")
    }
}




tableCreator(url);