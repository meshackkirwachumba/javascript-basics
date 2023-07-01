//ACCEPTING USER INPUT

//Easy way
//1.wndow.prompt
// let username = window.prompt("What is your name?")
// console.log(username)

//2 HTML TEXTBOX

let myUsername

document.getElementById('myButton').onclick = function(){
    myUsername = document.getElementById('myText').value;
    console.log(myUsername)
    document.getElementById('myLabel').innerHTML = myUsername;
}