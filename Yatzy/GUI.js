let tæller = 0;
let turn = document.getElementById("turn")
let terninger = document.querySelectorAll("img")
let roll = document.getElementById("Roll")
let rolling = false;
function RollButton () {
    rolling = true;
    if(tæller === 0){
        for (let terning of terninger) {
            terning.className = "free";
        }
    }
    let count = 0;
    for (let terning of terninger) {
        if (terning.className == "free") {
            let random = Math.floor(Math.random() * 5) + 1;
            terning.src = "Terning/dice" + random + ".png";
        }
        count ++;
    }
    tæller++;
    turn.innerHTML = "Turn: " + tæller
    if (tæller === 3) {
        roll.disabled = true;
       for (let terning of terninger) {
           terning.style.backgroundColor = ""
       }
    }

}
roll.onclick = RollButton
const yatzy = new Yatzy()

function selectScore (id) {
    let trigger = document.getElementById(id)
    if (rolling && trigger.style.background != "lightgray") {
    trigger.innerHTML = yatzy.calculateScore(id)
    trigger.style.background = "lightgray"
    tæller = 0;
    roll.disabled = false
    let sum = document.getElementById("SumB")
    sum.innerHTML = yatzy.sumScore
    let total = document.getElementById("TotalB")
    total.innerHTML = yatzy.totalScore
    let bonus = document.getElementById("BonusB")
    bonus.innerHTML = yatzy.bonusScore
        rolling = false;
    }
}


function holdButton (id) {
    let hold = document.getElementById(id)
    if  (hold.className == "hold") {
        hold.className = "free";
    }
    else  {
        hold.className = "hold";

    }
}