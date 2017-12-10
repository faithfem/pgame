var names = ["John", "Mike", "Mary"];
var yearOfBirth = [1990, 1969, 1948];

console.log(yearOfBirth);
//console.log(names[0] + " was born in " + yearOfBirth[0]);

//names[0] = "Ben";
console.log(names);
console.log(names[0] + " was born in " + yearOfBirth[0]);

var John = ["John", "Smith", 1990, "designer", false];
John.push("blue"); //PUSH ADDS AN ELEMENT TO THE END OF AN ARRAY
John.unshift("Mr."); //UNSHIFT ADDS AN ELEMENT TO THE BEGINNING OF AN ARRAY
//John.pop(); //POP REMOVES THE LAST ELEMENT IN AN ARRAY. NO NEED TO GIVE THE POSITION
//John.shift(); //SHIFT REMOVES THE FIRST ELEMENT. REMOVES "MR."
console.log(John);

console.log(John.indexOf("teacher")); //INDEXOF RETURNS THE POSITION OF THE WORD "teacher. RETURNS -1 IF IT DOESN'T EXIST, RETURNS THE POSITION, IT DOES
//alert(John.indexOf("teacher")); //RETURNS AN ALERT/POP-UP ON THE BROWSER

if (John.indexOf("teacher") == 1) 
{
    console.log("John is a teacher");
} else{
    console.log("John is not a teacher");
}


