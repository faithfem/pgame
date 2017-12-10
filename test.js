var d = new Date();
var today = d.getFullYear();


function calculateMyAge(YOB){
    var age = today - YOB;
    return age;
}

var age = calculateMyAge(1976);

    console.log("I am " + age + " years old");
