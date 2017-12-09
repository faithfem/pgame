var d = new Date();
var today = d.getFullYear();

function calculateAge(yearofBirth){
    var age = today - yearofBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsToRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement <0){
        console.log(name + " is already retired");
    } else
    console.log(name + " retires in " + retirement + " years");
}

yearsToRetirement("John", 1990);
yearsToRetirement("Mike", 1969);
yearsToRetirement("Mary", 1948);
console.log("Mary is " + ageMary + " years old");