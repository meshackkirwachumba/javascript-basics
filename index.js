//ARITHMETIC EXPRESSION
/**
 is a combination of operands(values, variables, )
 operators( +, -, * /)
 that can be evaluated to a value
 eg y = x +8
 */

let studentsPop = 20;

//one student enrolled
studentsPop +=1 //augmented asignment operator
console.log(studentsPop)

//make 2 classes
studentsPop = 2 * 20;
console.log(studentsPop)

//divide studendts into groups of 5
let groups = studentsPop / 5
console.log("Groups formed:", groups)

//students who missed 3 eggs during distribution
//MODULO OPERATOR %
let missed = studentsPop % 3;
console.log("Studensts who missed eggs: ", missed)

//OPERATOR PRECEDENCE
/* 
 1. Parentheses
 2. Exponents
 3. Multiplication and Division
 4.Addition and Subtraction
 */

 let result = 8 + 2 - 3 * (20/10)
 console.log(result)