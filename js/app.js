let H = document.getElementById("x_size")
let W = document.getElementById("y_size")
let rP = document.getElementById("price")
let tS = document.getElementById("square_feet")
let inputs = document.querySelectorAll('input')
var price = 30


inputs.forEach(input => input.addEventListener("mousemove", Update))

function Update(){
    var square_feet =Number(W.innerText)*Number(H.innerText)
    if(this.name == "height"){
        H.innerHTML = this.value
    }
    if(this.name == "width"){
        W.innerHTML = this.value 
    }
    
    tS.innerHTML = square_feet
    rP.innerHTML = square_feet * price
}
