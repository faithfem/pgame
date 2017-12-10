// calculateAge(1998); //THIS CALLS THE FUNCTION BELOW

// function calculateAge(year){
//     console.log(2017 - year);
//     //console.log(this); DOES NOT GIVE ANYTHING
// }

var john = {
    name: "John",
    YOB: 1990,
    calculateAge: function(){       //ADDING A METHOD: THE JOHN.CALCULATEAGE METHOD. ALSO USED BELOW IN THE MIKE FUNCTION
        console.log(this);  //SEE RESULTS (SHOW OBJECT) IN CONSOLE
        console.log(2017 - this.YOB); //RETURNS 27
        
        // function innerFunction(){
        //     console.log(this);      //RETURNS WINDOW. POINTS TO THE WINDOW OBJECT, NOT THE JOHN OBJECT
        // }
        // innerFunction();    //YOU HAVE TO CALL IT 
    }
}

john.calculateAge(); //THIS CALLS THE METHOD. WITHOUT THIS, U'LL HAVE "DEBUGGER LISTENING..." AND WAITS FOREVER

var mike = {
    name: "Mike",
    YOB: 1998,
};

//BORROW JOHN'S METHOD TO USE IT ON MIKE
mike.calculateAge = john.calculateAge;
mike.calculateAge();

