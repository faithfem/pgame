var d = new Date();
var today = d.getFullYear();
var age = 18;

function calculateMyAge(YOB){
    var age = today - YOB;
    console.log(age); //WILL RETURN ANSWER OF TODAY LESS YOB GIVEN IN LINE 9. IF LINE 9 YEAR IS BLANK, THIS WILL RETURN NaN
}
calculateMyAge(1998); //IF SPACE BETWEEN PARENTHESIS IS BLANK, THIS WILL NOT RETURN ANYTHING
console.log(age); //THIS WILL NOT RETURN WHATEVER IS DECLARED BY THE GLOBAL AGE VARIABLE IN LINE 3. HAS TO BE GLOBAL