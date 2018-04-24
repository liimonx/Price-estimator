"use strict";

var H = document.getElementById("x_size");
var W = document.getElementById("y_size");
var rP = document.getElementById("price");
var tS = document.getElementById("square_feet");
var inputs = document.querySelectorAll('input');
var price = 30;

inputs.forEach(function (input) {
    return input.addEventListener("mousemove", Update);
});

function Update() {
    var square_feet = Number(W.innerText) * Number(H.innerText);
    if (this.name == "height") {
        H.innerHTML = this.value;
    }
    if (this.name == "width") {
        W.innerHTML = this.value;
    }

    tS.innerHTML = square_feet;
    rP.innerHTML = square_feet * price;
}
//# sourceMappingURL=app-dist.js.map