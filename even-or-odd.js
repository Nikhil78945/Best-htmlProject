
function evenOrOdd() {
    let x = document.getElementById("input-one").value;
    if (x % 2 == 0) {
        document.getElementById("display-text").innerHTML = "THIS NUMBER IS EVEN";
    } else {
        document.getElementById("display-text").innerHTML = "THIS NUMBER IS ODD";
    }
}

function isEligable() {
    let x = document.getElementById("input-one").value;
    if (x >= 18) {
        document.getElementById("display-text").innerHTML =
            "THIS NUMBER IS ELIGABLE TO VOTE";
    } else {
        document.getElementById("display-text").innerHTML =
            "THIS NUMBER IS NOT ELIGABLE TO VOTE";
    }
}

function isEqualTo() {
    let x = document.getElementById("input-one").value;
    let y = document.getElementById("input-two").value;
    if (x == y) {
        document.getElementById("display-text").innerHTML =
            "THIS TWO NUMBERS IS EQUAL";
    } else {
        document.getElementById("display-text").innerHTML =
            "THIS TWO NUMBER ARE NOT EQUAL";
    }
}

function Interchange() {
    let x = document.getElementById("input-one").value;
    let y = document.getElementById("input-two").value;
    document.getElementById("input-one").value = y;
    document.getElementById("input-two").value = x;
    document.getElementById("display-text").innerHTML =
        "YOUR VALUE's ARE ENTERCHANGED";
}