let W = document.getElementById("x_size")
let H = document.getElementById("y_size")
let rP = document.getElementById("price")
let tS = document.getElementById("square_feet")
let inputs = document.querySelectorAll('input')
var price = 30

function Update(){
    var square_feet =Number(W.innerText)*Number(H.innerText)
    
    if(this.name == "height"){
        H.innerHTML = this.value
    }else if(this.name == "width"){
        W.innerHTML = this.value 
    }
    
    tS.innerHTML = square_feet
    rP.innerHTML = square_feet * price
}

inputs.forEach(input => input.addEventListener("mousemove", Update))
