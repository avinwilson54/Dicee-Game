let imgEl1 = document.querySelector(".img1") ;
let imgEl2 = document.querySelector(".img2") ;
let heading = document.querySelector("h1") ;


window.onload = function() {
    function render() {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
    imgEl1.setAttribute("src", `images/dice${randomNumber1}.png`) ;
    imgEl2.setAttribute("src", `images/dice${randomNumber2}.png`) ;
    if (randomNumber1 > randomNumber2) {
        heading.textContent = `🚩 Player 1 Wins!` ;
    } else if (randomNumber1 < randomNumber2) {
        heading.textContent = `Player 2 Wins! 🚩` ;
    } else {
        heading.textContent = `🚩 Draw 🚩`
    }
    }
    render();
}
