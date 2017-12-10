var d = new Date();
var today = d.getFullYear();

var john ={
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mary", "Bob"],
    
    calculateAge: function(){
        return today - this.yearOfBirth;
    
    this.age = today - this.yearOfBirth;
        
    }
};

console.log(john.family);

console.log(john.family[2]);

console.log(john.calculateAge());

console.log(john);

var age = john.calculateAge();
john.age = age;
console.log(john);


//PART 2

var Mike ={
    // name: "John",
    // lastName: "Smith",
    yearOfBirth: 1976,
    job: "doctor",
    isMarried: true,
    family: ["Peter", "Paul", "Mary"],
    
    calculateAge: function(){
        return today - this.yearOfBirth;
    
    this.age = today - this.yearOfBirth;
        
    }
};

console.log(Mike.family);

console.log(Mike.family[1]);

console.log(Mike.calculateAge());

console.log(Mike);

var age = Mike.calculateAge();
Mike.age = age;
console.log(Mike);


