/* GAME RULES:
-The game has 2 players, playing in turns.
-At each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score.
-But if the player rolls a 1, his ROUND score resets to zero and it's the next player's turn to roll.
-A player can choose to HOLD which means his ROUND score gets added to his GLOBAL score. After thant, it's the next player's turn.
-The first player to reach 100 points on the GLOBAL score wins.*/

var scores, roundScore, activePlayer, dice;
scores=[0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

document.querySelector("#current-" + activePlayer).textContent = dice;