//Create an array with some years when people were born
var yearBorn = [1990, 1986, 1976, 1972, 1984, 2000];

//Create an empty array for ages
var ages = [];

//Use a loop to fill the array with the ages of the persons

//Use another loop to log into the console whether each person is 18 or older and their ages

//Create a function called printFullAge which receives the arrays of years as an argument, executes steps 2, 3 & 4 and returns an array of true/false. True if person is 18 or older, and false if not
//Call the function with 2 different arrays and store the results in 2 variables full_1 and full_2
var d = new Date();
var today = d.getFullYear();
var i;
var fullAges = [];

for (i = 0; i < yearBorn.length; i++){
    ages[i] = today - yearBorn[i];
}

for (i = 0; i < yearBorn.length; i++){
    if (ages[i] >=18) {
        console.log("Person " + (i+1) + " is " + ages[i] + " years old, and is of full age.");
        fullAges.push(true);
    } else{
        console.lo("Person " + (i+1) + " is " + ages[i] + " years old, and is NOT of full age");
        //fullAges.push(true);
    }
}

