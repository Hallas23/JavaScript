let lis = document.querySelectorAll("li")
let divadresse = document.getElementById("adresse")

async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.json();
}

function onClick () {
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = async function () {
            let adresse = await GET("http://localhost:8080/" + (i+1))
            divadresse.innerHTML = adresse;
        }
    }
}
onClick()

