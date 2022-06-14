let diceeImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"] ;
let imgEl1 = document.querySelector(".img1") ;
let imgEl2 = document.querySelector(".img2")

window.onload = function() {
    imgEl1.setAttribute("src", render()) ;
    imgEl2.setAttribute("src", render()) ;
}

function render() {
    let randomNumber = Math.floor(Math.random() * diceeImage.length) ;
    let rdmImage = diceeImage[randomNumber] ;
    return rdmImage ;
}

