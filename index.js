//const keyword
//a const declares a variable that cant be changed

const PI = 3.14
let radius;
let area;

radius = window.prompt("Enter radius of a circle")
radius = Number(radius)
area = PI * radius * radius
console.log("Area of this circle is: ", area)