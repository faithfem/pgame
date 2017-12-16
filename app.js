/* GAME RULES:
-The game has 2 players, playing in turns.
-At each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score.
-But if the player rolls a 1, his ROUND score resets to zero and it's the next player's turn to roll.
-A player can choose to HOLD which means his ROUND score gets added to his GLOBAL score. After thant, it's the next player's turn.
-The first player to reach 100 points on the GLOBAL score wins.*/

var scores, roundScoreCurrent, activePlayer;
scores=[0,0];
roundScoreCurrent = 0;
activePlayer = 1; //The number 0 is used in HTML and due to coersion, can be used to mark all items that are 0

//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//DOM MANIPULATION. USING "DOCUMENT SELECTOR" TO MANIPULATE ELEMENTS ON THE WEBPAGE
//DICE
//document.querySelector("#roundScoreCurrent-0").textContent = dice; //BUT BETTER TO USE THE BELOW DICE & ACTIVE PLAYER LINE

//DICE & ACTIVE PLAYER - great code, but can only change text not HMTL content. See line below for changing HTML as well. A "SETTER" COZ IT SETS A VALUE
//document.querySelector("#roundScoreCurrent-" + activePlayer).textContent = dice; //DUE TO JSCRIPT COERSION, WILL CONVERT ALL THIS TO 0 IF ACTIVEPLAYER IS 0. TO 1 IF PLAYER IS 1.

//DICE & ACTIVE PLAYER & HTML. ALSO A SETTER
//document.querySelector("#roundScoreCurrent-" + activePlayer).innerHTML = "<em>" + dice + "</em>"; //<em> helps emphasize the text

//USING DOCUMENT SELECTOR TO READ ELEMENTS ON WEBPAGE AND STORE THEM IN A VARIABLE. BELOW IS CALLED A "GETTER" BECAUSE IT GETS A VALUE
//DOC SELECTOR SELECTS THE CLASS OR ID
//var x = document.querySelector("#globalScore-" + activePlayer).textContent; //DOES NOT EQUAL ANYTHING COZ THIS IS JUST TO "READ" THE CONTENT WITH THE ID SHOWN AND STORE IT IN VAR X.
//console.log(x);

//CAN USE QUERY SELECTOR TO CHANGE CSS 
document.querySelector(".dice").style.display = "none"; //MAKES THE DICE IMAGE DISAPPEAR

document.getElementById("globalScore-0").textContent = "0";
document.getElementById("globalScore-1").textContent = "0";
document.getElementById("roundScoreCurrent-0").textContent = "0";
document.getElementById("roundScoreCurrent-1").textContent = "0";


//ROLL DICE
//OPTION 1
//ROLL DICE - HOW TO GET IT TO WORK - line 33 on index = "btn-roll" class. SELECT THE ELEMENT FIRST WT QUERY SELECTOR
//FIRST YOU WILL NEED A FUNCTION THAT WILL BE CALLED WHEN THE BUTTON IS CLICKED
// function btn(){
//     //do something
// }
// btn(); //this will call the function

// //LINE BELOW GOES WITH FUNCTION ABOVE. IT'S THE EVENT LISTENER THAT WILL LISTEN FOR THE BUTTON BEING CLICKED
// document.querySelector("btn-roll").addEventListener("click", btn) //THE btn at end points to the function
// //OPTION 1 END

//OPTION 2 - PREFERABLE
//NOTE: WE CAN ALSO HAVE THE FUNCTION IN THE EVENT LISTENER AS FOLLLOWS AND NOT HAVE A SEPARATE FUNCTION. THIS IS CALLED AN ANONYMOUS FUNCTION AND CAN'T BE REUSED COZ IT HAS NO NAME SO CAN'T BE USED ANYWHERE ELSE - THERE'S NO NAME TO CALL IT
document.querySelector(".btn-roll").addEventListener("click", function(){
    //1. need a random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //2. Display the result
    //first bring back the view of the dice if you have it blocked (none)
    //document.querySelector("dice").style.display="block"; //MINE IS NOT BLOCKED SO NO NEED FOR THIS LINE
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + '.png';

    
    //3. update the round score if the rolled number was not 1
    if (dice > 1) {
        //Add to round score
        roundScoreCurrent += dice;
        document.querySelector("#roundScoreCurrent-" + activePlayer).textContent = roundScoreCurrent;

    } else{
        //Next player's turn
    }
    
    
});























