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
// let userName = prompt("What is your username?")
// console.log("Your usernmae is",userName)
//html text box
let username;
document.getElementById("myButton").onclick = function(){
username = document.getElementById("myText").value;
console.log("You Username is",username)
}
//Type conversion - the ability to change the datatype of a value to another
let inputAge;
// inputAge = prompt('How old are you?')
console.log(typeof(inputAge));
inputAge = parseInt(inputAge);
console.log(typeof(inputAge))
console.log("You are",inputAge++,". You will be",inputAge,'next.')
//const is a variable that can't be changed
const PI = 3.14159
console.log(PI)
//calculator game using function

let result;
let digitOne;
let digitTwo;
//addition
document.getElementById("add").onclick = function(){
    digitOne = Number(document.getElementById("numOne").value);
    digitTwo = Number(document.getElementById("numTwo").value);
    result = digitOne + digitTwo;
    document.getElementById("result").innerHTML = result;
    }
//subtraction
document.getElementById("sub").onclick = function(){
    digitOne = Number(document.getElementById("numOne").value);
    digitTwo = Number(document.getElementById("numTwo").value);
    result = digitOne - digitTwo;
    document.getElementById("result").innerHTML = result;
    }
//mulitplication
document.getElementById("minus").onclick = function(){
    digitOne = Number(document.getElementById("numOne").value);
    digitTwo = Number(document.getElementById("numTwo").value);
    result = digitOne * digitTwo;
    document.getElementById("result").innerHTML = result;
    }
//division
document.getElementById("div").onclick = function(){
    digitOne = Number(document.getElementById("numOne").value);
    digitTwo = Number(document.getElementById("numTwo").value);
    result = digitOne / digitTwo;
    document.getElementById("result").innerHTML = result;
    }

//counter program
let count = 0;
document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
    console.log("You reset the value back to:",count);
    }
document.getElementById("decreaseBtn").onclick = function(){
    count -=1
    document.getElementById("countLabel").innerHTML = count;
    console.log("You reset the value back to:",count)
    }
document.getElementById("increaseBtn").onclick = function(){
    count +=1
    document.getElementById("countLabel").innerHTML = count;
    console.log("You reset the value back to:",count)
    }
    
//useful properties and methods when manipulated a string value
let nameManipulation = "Michael Jordan"
let phoneNumber = "111-222-3333"
console.log(nameManipulation.length)
console.log(nameManipulation.charAt(0))
console.log(nameManipulation.indexOf('l'))
console.log(nameManipulation.lastIndexOf('a'))
console.log(phoneNumber.replaceAll('-','/'))
//the slice() string methods extracs a section of a string and returns it as a new string, witout modigying the original string
console.log(nameManipulation.slice(0, nameManipulation.indexOf(" ")))
console.log(nameManipulation.slice(nameManipulation.indexOf(" ")+1))
