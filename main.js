const bugs = 0;
// CatCoins Stuff
let catcoins = 0;
let ccmul = 2.5;
let statistics = {
    "clicks":0
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
    catcoins = catcoins + 1 * ccmul;
    statistics["clicks"] += 1
    ccdis.innerText = catcoins;
    ccmuldis.innerText = ccmul;
    stats_clickedamount.innerText = statistics["clicks"]
    ccaddbutton.src = "https://popcat.click/img/op.353767c3.png";
    play("./pop-cat-pop.mp3")
    await sleep(100);
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
    }
}
ccdis.onclick = function() {
    console.log(ccsave)
}
savebutton.addEventListener('onclick', loadsave);