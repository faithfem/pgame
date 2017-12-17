var scores, roundScoreCurrent, activePlayer, gamePlaying; //THIS IS THE GLOBAL SCOPE. ALL FUNCTIONS BELOW HAVE ACCESS TO THIS
init();
//ACTION 2: ROLL DICE
document.querySelector(".btn-roll").addEventListener("click", function(){
    if (gamePlaying) //WE ONLY WANT SOME THINGS TO HAPPEN WHEN THE GAME IS PLAYING, SO CREATE FUNCTION TO SPECIFY WHAT HAPPENS WHEN PLAYING AND WHEN NOT
    { 

        var dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + '.png';

        if (dice !== 1) 
        {
            //Add to round score
            roundScoreCurrent += dice;
            document.querySelector("#roundScoreCurrent-" + activePlayer).textContent = roundScoreCurrent;
            } else{
            nextPlayer();
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function(){
    if (gamePlaying)
    {
        scores[activePlayer] += roundScoreCurrent;
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
    nextPlayer(); 

function nextPlayer(){
    
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScoreCurrent = 0; //when it goes to next player, their score resets to zero
    
        document.getElementById("roundScoreCurrent-0").textContent = "0"; //score resets to zero
        document.getElementById("roundScoreCurrent-1").textContent = "0"; //score resets to zero

        document.querySelector(".player-0-panel").classList.toggle("active"); 
        document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", init); //You don't use the () after init coz u don't want it called, u just want it listened for

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






















