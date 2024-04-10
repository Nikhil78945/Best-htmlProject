
let displayString = "";
let total = 0;
let action = 0;
function numbertype(passnumber) {
    displayString = displayString + passnumber.toString();
    document.getElementById("display").innerHTML = displayString;
}
function add() {
    total = Number(displayString);
    displayString = "";
    action = 1;
    document.getElementById("display").innerHTML = displayString;
}

function sub() {
    total = Number(displayString);
    displayString = "";
    action = 2;
    document.getElementById("display").innerHTML = displayString;
}
function mul() {
    total = Number(displayString);
    displayString = "";
    action = 3;
    document.getElementById("display").innerHTML = displayString;
}
function div() {
    total = Number(displayString);
    displayString = "";
    action = 4;
    document.getElementById("display").innerHTML = displayString;
}
function per() {
    total = Number(displayString);
    displayString = "";
    action = 5;
    document.getElementById("display").innerHTML = displayString;
}

function showresult() {
    if (action == 1) {
        total = total + Number(displayString);
    }
    else if (action == 2) {
        total = total - Number(displayString);
    }
    else if (action == 3) {
        total = total * Number(displayString);
    }
    else if (action == 4) {
        total = total / Number(displayString);
    }
    else if (action == 5) {
        total = total % Number(displayString);
    }
    displayString = total;
    document.getElementById("display").innerHTML = displayString;
}
function backspace() {
    displayString = displayString.substring(0, displayString.length - 1);
    document.getElementById("display").innerHTML = displayString
}
function clearFunction() {
    total = 0;
    displayString = "";
    document.getElementById("display").innerHTML = "";
}