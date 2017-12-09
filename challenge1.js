var heightJohn = 180;
var heightMary = 150;
var ageJohn = 31;
var ageMary = 31;


var scoreJohn = heightJohn + 5*ageJohn;
var scoreMary = heightMary + 5*ageMary;


if(scoreJohn > scoreMary)
{
    console.log("John wins with " + scoreJohn + " points");
}
else if (scoreJohn < scoreMary)
{
    console.log("Mary wins with " + scoreMary + " points");
}else if (scoreJohn == scoreMary){

    console.log("It's a draw because John has " + scoreJohn + " points while Mike has " + scoreMary + " points");
}


