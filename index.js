//TYPE CONVERSION
//changing the data type of a value to another data type (strings, boolean, numbers)

let age = window.prompt("what is your age?")

console.log(typeof age) //string

//use types constructor for conversion
let myAge = Number(age) + 1;
console.log("Happy birthday!! You are ", myAge, "years old") //79

let x = "3.14"
let y = Number(x) //3.14
let z = String(y)

let u = Boolean("") //false
let t = Boolean("yeah") //true

console.log("y is: ", typeof y) //number type
console.log("z is: ",typeof z) // string type
console.log("u is: ", typeof u) //false
console.log("t is: ", typeof t) //true

