var diceNumber = Math.floor(Math.random() * 6) + 1;

var diceSourceName = "images/dice" + diceNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceSourceName);



var diceNumber2 = Math.floor(Math.random() * 6) + 1;

var diceSourceName2 = "images/dice" + diceNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceSourceName2);

if (diceNumber < diceNumber2){
    document.querySelector("p").innerHTML = "PLAYER 2 WINS";
}
else if (diceNumber > diceNumber2){
    document.querySelector("p").innerHTML = "PLAYER 1 WINS";
}
else {
    document.querySelector("p").innerHTML = "DRAW";
} 