//Math Object

//round off to the nearest integer
let x = 3.14
 x = Math.round(x)
 console.log(x) //3

 //round up Math.ceil()
 let y = 3.67
 y = Math.ceil(y)
 console.log(y) //4

 //round down Math.floor()
 let z = 3.99
 z = Math.floor(z)
 console.log(z) //3

 //raise a number to a given power Math.pow()
 let n = 5
 n = Math.pow(n, 2)
 console.log(n) //25

 //square root of a value
 let root = Math.sqrt(n)
 console.log(root) //5

 //absolute value
 let num = -338;
 let abs = Math.abs(num)
 console.log(abs) //338

 //Minimum values Math.min()
 //Maximum values Math.max()

 let i = 48.3
 let j = 88
 let k = 39.22

 let min = Math.min(i, j, k)
 console.log("Min Value: ", min) //39.22

 let max = Math.max(i,j,k)
 console.log("Max Value: ", max) //88