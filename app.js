/* GAME RULES:
-The game has 2 players, playing in turns.
-At each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score.
-But if the player rolls a 1, his ROUND score resets to zero and it's the next player's turn to roll.
-A player can choose to HOLD which means his ROUND score gets added to his GLOBAL score. After thant, it's the next player's turn.
-The first player to reach 100 points on the GLOBAL score wins.*/

var scores, roundScore, activePlayer, dice;
scores=[0,0];
roundScore = 0;
activePlayer = 1; //The number 0 is used in HTML and due to coersion, can be used to mark all items that are 0

dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//DOM MANIPULATION. USING "DOCUMENT SELECTOR" TO MANIPULATE ELEMENTS ON THE WEBPAGE
//DICE
//document.querySelector("#roundScoreCurrent-0").textContent = dice; //BUT BETTER TO USE THE BELOW DICE & ACTIVE PLAYER LINE

//DICE & ACTIVE PLAYER - great code, but can only change text not HMTL content. See line below for changing HTML as well. A "SETTER" COZ IT SETS A VALUE
document.querySelector("#roundScoreCurrent-" + activePlayer).textContent = dice; //DUE TO JSCRIPT COERSION, WILL CONVERT ALL THIS TO 0 IF ACTIVEPLAYER IS 0. TO 1 IF PLAYER IS 1.

//DICE & ACTIVE PLAYER & HTML. ALSO A SETTER
//document.querySelector("#roundScoreCurrent-" + activePlayer).innerHTML = "<em>" + dice + "</em>"; //<em> helps emphasize the text

//USING DOCUMENT SELECTOR TO READ ELEMENTS ON WEBPAGE AND STORE THEM IN A VARIABLE. BELOW IS CALLED A "GETTER" BECAUSE IT GETS A VALUE
var x = document.querySelector("#globalScore-" + activePlayer).textContent; //DOES NOT EQUAL ANYTHING COZ THIS IS JUST TO "READ" THE CONTENT WITH THE ID SHOWN AND STORE IT IN VAR X.
console.log(x);

//CAN USE QUERY SELECTOR TO CHANGE CSS 
//document.querySelector(".dice").style.display = "none"; //MAKES THE DICE IMAGE DISAPPEAR










