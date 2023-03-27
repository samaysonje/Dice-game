

// image1
var rndm1 = Math.floor((Math.random()*6)+1);
if (rndm1 == 1){
    document.querySelector(".img1").setAttribute("src", "dice1.jpg");
}
else if (rndm1 == 2){
    document.querySelector(".img1").setAttribute("src", "dice2.jpg");
}
else if (rndm1 == 3){
    document.querySelector(".img1").setAttribute("src", "dice3.jpg");
}
else if (rndm1 == 4){
    document.querySelector(".img1").setAttribute("src", "dice4.jpg");
}
else if (rndm1 == 5){
    document.querySelector(".img1").setAttribute("src", "dice5.jpg");
}
else if (rndm1 == 6){
    document.querySelector(".img1").setAttribute("src", "dice6.jpg");
}

// score1
var oldScore1 = document.querySelector("#score1").innerHTML;
console.log(oldScore1);
console.log(rndm1);
oldScore1 = rndm1;
console.log(oldScore1);
var oldScore1 = document.querySelector("#score1").innerHTML=oldScore1;
// img2
var rndm2 = Math.floor((Math.random()*6)+1);
if (rndm2 == 1){
    document.querySelector(".img2").setAttribute("src", "dice1.jpg");
}
else if (rndm2 == 2){
    document.querySelector(".img2").setAttribute("src", "dice2.jpg");
}
else if (rndm2 == 3){
    document.querySelector(".img2").setAttribute("src", "dice3.jpg");
}
else if (rndm2 == 4){
    document.querySelector(".img2").setAttribute("src", "dice4.jpg");
}
else if (rndm2 == 5){
    document.querySelector(".img2").setAttribute("src", "dice5.jpg");
}
else if (rndm2 == 6){
    document.querySelector(".img2").setAttribute("src", "dice6.jpg");
}

// score2
var oldScore2 = document.querySelector("#score2").innerHTML;
oldScore2 = rndm2;
var oldScore2 = document.querySelector("#score2").innerHTML=oldScore2;

// res
if (rndm1 > rndm2){
    document.querySelector("#res").innerHTML = ">";
    // heading
    document.querySelector(".heading").innerHTML = "Player 1 Wins" 
}
else if (rndm2 > rndm1){
    document.querySelector("#res").innerHTML = "<";
    // heading
    document.querySelector(".heading").innerHTML = "Player 2 Wins"
}
else{
    document.querySelector("#res").innerHTML = "=";
    // heading
    document.querySelector(".heading").innerHTML = "Draw"
}


