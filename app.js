/* GAME RULES:
-The game has 2 players, playing in turns.
-At each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score.
-But if the player rolls a 1, his ROUND score resets to zero and it's the next player's turn to roll.
-A player can choose to HOLD which means his ROUND score gets added to his GLOBAL score. After thant, it's the next player's turn.
-The first player to reach 100 points on the GLOBAL score wins.*/

var scores, roundScoreCurrent, activePlayer, gamePlaying; //THIS IS THE GLOBAL SCOPE. ALL FUNCTIONS BELOW HAVE ACCESS TO THIS
// scores=[0,0];
// roundScoreCurrent = 0;
// activePlayer = 0; //The number 0 is used in HTML and due to coersion, can be used to mark all items that are 0

init();

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

//CAN USE QUERY SELECTOR TO CHANGE CSS. PS: CODE CHANGED TO USE INIT FUNCTION BECAUSE IT INCLUDES THE CODE BELOW
// document.querySelector(".dice").style.display = "none"; //MAKES THE DICE IMAGE DISAPPEAR

// document.getElementById("globalScore-0").textContent = "0";
// document.getElementById("globalScore-1").textContent = "0";
// document.getElementById("roundScoreCurrent-0").textContent = "0";
// document.getElementById("roundScoreCurrent-1").textContent = "0";
//init();


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
//NOTE: WE CAN ALSO HAVE THE FUNCTION IN THE EVENT LISTENER AS FOLLLOWS AND NOT HAVE A SEPARATE FUNCTION. 
//THIS IS CALLED AN ANONYMOUS FUNCTION AND CAN'T BE REUSED COZ IT HAS NO NAME SO CAN'T BE USED ANYWHERE ELSE - THERE'S NO NAME TO CALL IT


//*******************************************************************************************************************************************


//ACTION 1: IS ALWAYS INIT (START GAME) SEE FUNCTION

//ACTION 2: ROLL DICE

document.querySelector(".btn-roll").addEventListener("click", function(){
    if (gamePlaying) //WE ONLY WANT SOME THINGS TO HAPPEN WHEN THE GAME IS PLAYING, SO CREATE FUNCTION TO SPECIFY WHAT HAPPENS WHEN PLAYING AND WHEN NOT
    { 
        
        //1. need a random number
        var dice = Math.floor(Math.random() * 6) + 1;
        
        //2. Display the result
        //first bring back the view of the dice if you have it blocked (none)
        //document.querySelector("dice").style.display="block"; 
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + '.png';
        
        //3. update the round score if the rolled number was not 1
        if (dice !== 1) 
        {
            //Add to round score
            roundScoreCurrent += dice;
            document.querySelector("#roundScoreCurrent-" + activePlayer).textContent = roundScoreCurrent;
            } else{
            //Next player's turn
            
            //WE CAN USE THE CODE BELOW CALLED "//CODE CHANGED-SEE FUNCTION"IN LINES 77 TO 92 BUT WE ENDED UP CREATING A FUNCTION (LINES 117-126) AND WE'LL USE THAT INSTEAD
            //CODE CHANGED-SEE FUNCTION: activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            //CODE CHANGED-SEE FUNCTION:roundScoreCurrent = 0; //when it goes to next player, their score resets to zero
        
            //CODE CHANGED-SEE FUNCTION: document.getElementById("roundScoreCurrent-0").textContent = "0"; //score resets to zero
            //CODE CHANGED-SEE FUNCTION:document.getElementById("roundScoreCurrent-1").textContent = "0"; //score resets to zero
            
            //WHEN GAME MOVES TO NEXT PLAYER, THE PANEL AND ALL INDICATORS CHANGE TO SHOW WHO IS THE ACTIVE PLAYER NOW
            //METHOD BELOW IS OKAY, BUT NOT SUFFICIENT. BETTER TO USE TOGGLE METHOD - STARTS IN LINE 91
            //i) select document by docu query selec method
            //ii) select the player - html line 14
            //iii) mark the new player as active. Active indicators are dictated by css styles, line 73 to 82.
            //document.querySelector(".player-0-panel").classList.remove("active"); //When first player gets a zero, remove him from being the active player
            //document.querySelector(".player-1-panel").classList.add("active");
            
            //CODE CHANGED-SEE FUNCTION:document.querySelector(".player-0-panel").classList.toggle("active"); 
            //CODE CHANGED-SEE FUNCTION:document.querySelector(".player-1-panel").classList.toggle("active");
            
            //LET'S HIDE THE DICE WHEN PLAYER ROLLS A 1 (EASIER ON THE EYES, TRUST ME - ACTUALLY, I DON'T REALLY LIKE THE HIDING, SO I'LL COMMENT THE LINE BELOW OUT)
            //document.querySelector(".dice").style.display = "none";
            
            nextPlayer(); //USING THE FUNCTION IN LINES 117-126
        }
    }
});


//ACTION 3: HOLD SCORES

//HOLDING AND TALLYING UP THE GLOBAL SCORE
//REMEMBER WHEN PLAYER HITS A ONE, IT'S THE NEXT PLAYER'S TURN. IF HE HOLDS, IT'S AGAIN THE NEXT PLAYER'S TURN. SO IN THE SPIRIT OF DRY (DON'T REPEAT YOURSELF) THIS IS THE SAME CODE
document.querySelector(".btn-hold").addEventListener("click", function(){
    if (gamePlaying)
    {
    
        //first you want to take the current round's score and add it to the global score
        scores[activePlayer] += roundScoreCurrent;
        
        //Update the user interface
        document.querySelector("#globalScore-" + activePlayer).textContent = scores[activePlayer];
        
        //Check if the player won the game (wins if global score reaches 100 first)
        if (scores[activePlayer] >= 20)
        {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!"; //targets the name of the winner and changes it to winner
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
            
            console.log("Game over, next round" );
            } else {
                nextPlayer();
                console.log("continue playing");
        }
    }
    //NEXT PLAYER
    //can copy lines 77 to 92 here, but that's repeating ourselves and since the code is the same, if we change lines 77-92, we have to come here & change these lines
    //so best to create a function for the next player
    nextPlayer(); //USING THE FUNCTION IN LINES 117-126 INSTEAD OF THE OLD CODE IN LINES 77-92 (THOSE LINES WERE MOVED TO THE FUNCTION SO IF WE HAD TO CHANGE ANYTHING, WE CHANGE IT IN THE FUNCTION ONLY INSTEAD OF IN MULTIPLE PLACES)
});

function nextPlayer(){
    
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScoreCurrent = 0; //when it goes to next player, their score resets to zero
    
        document.getElementById("roundScoreCurrent-0").textContent = "0"; //score resets to zero
        document.getElementById("roundScoreCurrent-1").textContent = "0"; //score resets to zero

        document.querySelector(".player-0-panel").classList.toggle("active"); 
        document.querySelector(".player-1-panel").classList.toggle("active");
}


//NEW GAME STARTS AFTER WINNER WINS
//UPDATE NEW GAME BUTTON
//SO SET UP AN EVENT LISTENER TO LISTEN FOR THE NEW BTN BUTTON BEING CLICKED
//WHEN IT'S CLICKED, A FUNCTION SHOULD RUN THAT TELLS IT TO RESET SCORES & SELECT THE LAST WINNER AS THE FIRST PLAYER IN THE NEW GAME & CHANGES NAMES BACK TO PLAYER 1 & PLAYER 2
//PLEASE NOTE THAT THE SCORES, ETC BELOW ARE A REPEAT OF OUR FIRST VARIABLES AT TOP OF CODE. THIS IS UNECESSARY AND A VIOLATION OF THE DRY PRINCIPLE, SO BEST
//TO USE A FUNCTION THAT SETS SCORES TO ZERO AT START OF EVERY NEW GAME
// document.querySelector(".btn-new").addEventListener("click", function(){
//     scores = [0, 0];
//     activePlayer = 0;
//     roundScoreCurrent = 0;
// });

document.querySelector(".btn-new").addEventListener("click", init); //You don't use the () after init coz u don't want it called, u just want it listened for


//FUNCTION THAT SETS SCORES TO ZERO AT START OF EVERY NEW GAME
function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScoreCurrent = 0;
    gamePlaying = true;
    
    document.querySelector(".dice").style.display = "none"; //MAKES THE DICE IMAGE DISAPPEAR

    document.getElementById("globalScore-0").textContent = "0";
    document.getElementById("globalScore-1").textContent = "0";
    document.getElementById("roundScoreCurrent-0").textContent = "0";
    document.getElementById("roundScoreCurrent-1").textContent = "0";
    
    document.getElementById("name-0").textContent = "Player1"; //AT NEW GAME, NAMES SHOULD BE PLAYER 1 AND PLAYER 2
    document.getElementById("name-1").textContent = "Player2";
    
    //CHANGE THE WINNER CLASS SO WINNER INDICATORS (COLOR, ETC) RESET TO REGULAR
    document.querySelector(".player-0-panel").classList.remove("winner"); //ON INIT, REMOVE ALL WINNER CLASSES FROM ANY WINNING PLAYER
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active"); //ON INIT, REMOVE ALL WINNER CLASSES FROM ANY ACTIVE PLAYER
    document.querySelector(".player-1-panel").classList.remove("active");
    
    document.querySelector(".player-0-panel").classList.add("active"); //ON INIT, MAKE ACTIVE PLAYER HIGHLIGHTED
    
}






















