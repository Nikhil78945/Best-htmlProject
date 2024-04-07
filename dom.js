let niks = 1;
let x = ['<div class="brick"></div>'];


function addBrick() {
    // process
    if (niks <= 5000) {
        niks++;

        x.push('<div class="brick"></div>');
        document.getElementById("right-container").innerHTML= x;
    }        
    // output
    
    document.getElementById("count").innerHTML = niks;
    document.getElementById("count").style.color = "#fff"
}

function removeBrick() {
    if (niks >= 1 ) {
        niks--;
        x.pop();
        document.getElementById("right-container").innerHTML = x;
    }
    document.getElementById("count").innerHTML = niks;
    document.getElementById("count").style.color = "#E72929";
}