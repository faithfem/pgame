//FOR LOOPS
for (var i = 0; i < 10; i++){
    console.log(i);
}

for (var i = 10; i > 0; i--){
    console.log(i);
}

var names = ["Peter", "Paul", "Mary", "Ringo", "Paul", "John", "George", "Whitney", "Michael J.",];

for (var i = 0; i<names.length; i++){
    console.log(names[i]);
}

console.log(names.length);

for (var i = names.length-1; i>=0; i--){
    console.log(names[i]);
}

//WHILE LOOPS:
var cars = ["Toyota", "Volvo", "Mercedes", "Lexus", "Subaru", "Nissan"];
var j = 0;
while (j < cars.length)
{
    console.log(cars[j]);
    j++;
}

console.log(cars.length);
//WHILE LOOP IN REVERSE (THIS WAS REALLY TRICKY)
while (j>=cars.length-[cars.length-1]) 
{
console.log(cars[j-1]);
j--;
}


//LOOPS TO A POINT - IF U HAVE N NUMBERS BUT WANT TO PRINT TO ONLY N-i
for (var x = 1; x <=5; x++){
    console.log(x);
    
    if (x === 3){
        break;
    }
}

//LOOPS TO A POINT BUT SKIP A NUMBER
for (var y = 1; y <=5; y++)
{
    if (y === 3){ //3 GETS SKIPPED
        continue;
    }
    console.log(y);
}

//CONSOLE PRINT: 1 2 4 5 (3 GETS SKIPPED)



