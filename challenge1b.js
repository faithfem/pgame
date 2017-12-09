var heightJohn = 180;
var ageJohn = 31;
var heightMary = 500;
var ageMary = 21;
var heightMike = 160;
var ageMike = 41;

var scoreJohn = heightJohn + 5*ageJohn;
var scoreMary = heightMary + 5*ageMary;
var scoreMike = heightMike + 5*ageMike;

if (scoreJohn > scoreMary && scoreJohn > scoreMike){
    console.log("John wins with " + scoreJohn + " points.");
} else if(scoreMary> scoreJohn && scoreMary > scoreMike){
    console.log("Mary wins with " + scoreMary + " points.");
} else if(scoreMike > scoreJohn && scoreMike > scoreMary){
    console.log("Mike wins with " + scoreMike + " points.");
}    