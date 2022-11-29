const bugs = 0;
// CatCoins Stuff
let catcoins = 0;
let ccmul = 1.0;
let ccpc = 1;
let statistics = {
    "clicks": 0,
    "cats": {
        "UntrainedInternetCat": {
            "amount": 0,
            "cost": 10,
            "ccpc": 0.5
        }
    }
}
// AFK Gains
let ccgen1 = 0;
let ccinct = 0;
// Other Variables
let stats_open = false;
fetch('./save_test.json')
    .then((response) => response.json())
    .then((json) => ccsave = json);
let savedJSON = null;
// Document
const ccdis = document.getElementById("coinval");
const ccmuldis = document.getElementById("coinmul");
const ccaddbutton = document.getElementById("ccaddbutton");
const statsbutton = document.getElementById("statistics");
const stats_maindiv = document.getElementById("statsdiv");
const stats_clickedamount = document.getElementById("clickedamount");
const savebutton = document.getElementById("savebutton");
const untrainedcat = { "amount": document.getElementById("UntrainedCat-Amount"), "cost": document.getElementById("UntrainedCat-Cost"), "button": document.getElementById("Purchase UC") }
const ccpcdis = document.getElementById("coinpc");
// Other
function play(sound) {
    var audio = new Audio(sound);
    audio.play();
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function loadsave(event) {
    let fr = new FileReader();
    savedJSON = fr.readAsText("save_test.json");
    let json = JSON.parse(savedJSON);
    ccsave = json
}
async function ccaddbuttonclick() {
    // Update Function
    catcoins += ccpc * ccmul;
    statistics["clicks"] += 1
    // Clicking Mechanik
    ccaddbutton.src = "https://popcat.click/img/op.353767c3.png";
    play("./pop-cat-pop.mp3")
    await sleep(100); // async due to this line :angry:
    ccaddbutton.src = "https://popcat.click/img/p.1e9d00be.png";
}
ccaddbutton.onclick = () => {
    ccaddbuttonclick()
}
statsbutton.onclick = () => {
    stats_clickedamount.innerText = statistics["clicks"]
    if (stats_open === false) {
        stats_maindiv.style.display = "unset"
        stats_open = true
    } else if (stats_open === true) {
        stats_maindiv.style.display = "none";
        stats_open = false;
    } // short if/else doesn't exist :moyai:
}
ccdis.onclick = function() {
    console.log(ccsave)
}
untrainedcat["button"].onclick = () => {
    if (catcoins >= statistics['cats']['UntrainedInternetCat']['cost']) {
        untrainedcat.button.className = "generators-buttons canPurchase";
        catcoins -= statistics['cats']['UntrainedInternetCat']['cost'];
        ccdis.innerText = catcoins;
        ccpc += statistics["cats"]["UntrainedInternetCat"]["ccpc"];
        statistics["cats"]["UntrainedInternetCat"]["amount"] += 1;
        statistics['cats']['UntrainedInternetCat']['cost'] += 5.25 + (statistics["cats"]["UntrainedInternetCat"]["amount"] * 1.5);
        untrainedcat["amount"].innerText = statistics["cats"]["UntrainedInternetCat"]["amount"]
        untrainedcat["cost"].innerText = statistics["cats"]["UntrainedInternetCat"]["cost"]
    } else { untrainedcat.button.className = "generators-buttons cantPurchase" }
}
savebutton.addEventListener('onclick', loadsave);
setInterval(function(){    ccdis.innerText = catcoins;
    ccmuldis.innerText = ccmul;
    stats_clickedamount.innerText = statistics["clicks"]
    ccpcdis.innerText = ccpc
                      if (catcoins < statistics['cats']['UntrainedInternetCat']['cost']) { untrainedcat.button.className = "generators-buttons cantPurchase" } else { untrainedcat.button.className = "generators-buttons canPurchase" }}, 50);