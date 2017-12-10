var john ={
    name: "John",
    lastName: "Smith",
    DOB: 1990,
    job: "teacher",
    isMarried: false,
};

console.log(john);
console.log(john.lastName); //I PREFER THIS TO THE ONE BELOW. SAME RESULT
console.log(john["lastName"]);

john.lastName = "Miller"; //TO CHANGE THE LAST NAME OR HOW TO CHANGE ANYTHING
console.log(john.lastName);
console.log(john);