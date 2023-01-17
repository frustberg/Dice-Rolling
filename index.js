/* RandomNumber 1 generator */
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);

/* RandomNumber 2 generator */

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);

/* Setting h1 on basis on who won! */

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥇Player 1 wins!";
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🥈";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

