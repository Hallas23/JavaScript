let server = "https://dip-chat-server.herokuapp.com/api/messages"
let messages = document.getElementById("modtaget");
let navn = document.getElementById("navn");
let rum = document.getElementById("rum");
let text = document.getElementById("text");
let knap = document.querySelector("button");
messages.style.width = "700px";
messages.style.height = "550px";



async function sendMessage(url){
    try {
        let sarray = {name: navn.value, roomName: rum.value, text: text.value};
        console.log(sarray);
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(sarray),
            headers: {'Content-Type': 'application/json'}
        });
        return await response.json();
    }
    catch (e) {
        console.log("Exception " + e + "2")
    }

}
knap.onclick = (e => {
    sendMessage(post);
});

setInterval(async function () {
    try {
        messages.innerText = "";
        let string = "";
        const response = await fetch(server);
        const array = await response.json();
        for (let i = array.length- 1; i > 0; i--) {
            string +=  "Navn: " + array[i].name + ": RoomName: " +array[i].roomName + ": Text: " + array[i].text + "\n";
        }
        messages.append(string);
    }
    catch (e) {
        console.log("Exception " + e + "2")
    }

}, 1000);