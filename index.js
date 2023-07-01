let a;
let b;
let c;

a = window.prompt("Enter side A")
b = window.prompt("Enter side B")
//convert to number type
a = Number(a)
b = Number(b)

c = Math.pow(a, 2) + Math.pow(b, 2)
c = Math.sqrt(c)
console.log(c)


//FROM HTML

document.getElementById('submitButton').onclick = function(){
    let aa = document.getElementById('aText').value;
    aa = Number(aa)

    let bb = document.getElementById('bText').value;
    bb = Number(bb)

    let cc = Math.sqrt(Math.pow(aa, 2) + Math.pow(bb, 2))

    document.getElementById('cLabel').innerHTML = 'Side C: ' + cc
}