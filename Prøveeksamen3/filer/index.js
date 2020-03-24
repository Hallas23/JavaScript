let  kunder = document.getElementById("kunder");
let adresse = document.getElementById("div");




async function makeOnclick() {
    let lis = kunder.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = async function () {
            let nr = lis[i].getAttribute("nr")
            adresse.innerHTML = await GET(nr);
        }
    }
}

async function GET(nr) {
    const OK = 200;
    let response = await fetch("/"+ nr);
    if (response.status !== OK)
        throw new Error(response.status);
    return response.json();
}

makeOnclick();
