console.log("Welcome to KERYNOX's console\nStart Writing here");

let ThreedotBTN = document.getElementById("ThreedotBTN");
let MenuSec = document.getElementById("MenuSec");


ThreedotBTN.addEventListener("click", () => {
    if (MenuSec.style.height != "15rem") {
        MenuSec.style.height = "15rem"
        MenuSec.style.padding="1rem 0rem"
    }else{
        MenuSec.style.height="0rem"
        MenuSec.style.padding="0"
    }
})
