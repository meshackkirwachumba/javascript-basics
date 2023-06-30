//a variable is a container for storing data
// a variable behaves as if it was the value that it contains


//2 STEPS
//1: Declaration (var, let, const)
//2: Assignment (= assignment operator)

let age;
age = 23

let firstName = "Meshack"
let isAStudent = true

console.log("Hello", firstName) //string
console.log("You are", age, "years old") //number
console.log("Enrolled:",isAStudent) //boolean

//DISPLAY IN DOM
document.getElementById("p1").innerHTML = firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + isAStudent;