
//An array is a data structure that we use to represent a list of items

let grades = ['A', 'B', 'C', 'D'];
console.log(grades);

//Conditional statements control behavior and determine whether or not pieces of code can run

let grade = 74

if(grade >= 90) {
console.log("Excellent! You got an A");
}

else if(grade >= 80 && grade <90) {
console.log("Nice work! You got a B");
}

else if(grade >= 70 && grade <80) {
    console.log("Good effort! You got a C");
}

else if(grade >= 70 && grade <60) {
    console.log("Not quite! You got a D");
}

else {
    console.log("Please redo the assignment");
}