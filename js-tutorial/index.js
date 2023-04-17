console.log("Welcome to my website");
//variables = containers to store data 
//declare and assignment are the steps needed for a variable to exist

//declare variable
let name;
//assign variable 
name = "Mohammed"
console.log('My name is',name);
//You can peform the declarationa & assignment of a variable in the same step like displayed below
let age = 34;
console.log("I am",age,"years old");
//variables can be use to contain value of booleans, numbers, strings, arrays, and various data types.
let isTrue = true;
let num = 1289.23;
let lastName = 'Jackson';
let host = [12, 18, 9.1, 'Smith'];
//displaying variable in the DOM by utilizing the id element within an html tag
document.getElementById('p1').innerHTML = 'The variable "isTrue" value is '+isTrue;
document.getElementById('p2').innerHTML = 'The variable "num" value is '+num;
document.getElementById('p3').innerHTML = 'The variable array "host" contains the values {'+host+'}';
/*
arithmetic expression is a combination of operands and operators
*/
let sumAdd = 15 + 14;
let sumMinus = 15 - 14;
let sumMultiplication = 15 * 14;
let sumDivision = 15/14;
console.log("15 + 14 =",sumAdd)
console.log("15 - 14 =",sumMinus)
console.log("15 * 14 =",sumMultiplication)
console.log("15 / 14 =",sumDivision)
//accept user input can be done using the prompt function or via a input text
//window prompt
let userName = prompt("What is your username?")
console.log("Your usernmae is",userName)
//html text box
let username;
document.getElementById("myButton").onclick = function(){
username = document.getElementById("myText").value;
console.log("You Username is",username)
}