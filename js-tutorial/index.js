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

//If, for, while, do-while statements
let sign = 'left';

if(sign == 'left'){
    console.log('You are turning LEFT')
} else if(sign == 'right'){
    console.log('You are turning RIGHT')
} else{
    console.log("We have no directions. The game is over")
}

//check boolean value
let online = true;
if(online){
    console.log("You are online")
} else{
    console.log("You are off line")
}

//Subscribe checkbox
//declare a variable that will store the value of the checkbox
//you can access the radio button & check boxes via t he .checked property
let isChecked = false;
document.getElementById("mycheckbox").onclick = function(){

    isChecked = document.getElementById("isBoxChecked");

   if(isChecked.checked){
    document.getElementById("subscribed").innerText = "You have subscribed!"
   } else{
    document.getElementById("subscribed").innerText = "You haven't clicked the checkbox to subscribe!"
   }
}

//Switch statements used to examines value for a potential match against many case clauses
let grade = 'A';
switch(grade){
    case  'A':
        console.log("You got an A.");
        break;
    case  'B':
        console.log("You got an B.");
        break;
    case  'C':
        console.log("You got an C.");
        break;
    case  'D':
        console.log("You got an D.");
        break;
    case  'F':
        console.log("You got an F. You failed the class.");
        break;    
}
//while loop
let whileInt = 0
console.log("WHILE LOOP GAME")
while(whileInt < 10){
    console.log("Value:",whileInt)
    whileInt++
}
//do-while loop
let condition = 0;
do {
    console.log("Print This 5 times",condition)
    condition++
} while (condition <= 5);

//For Loop game
let  loopValue;
let elementArray = [];

document.getElementById("loopBtn").onclick = function(){
    loopValue = Number(document.getElementById("textLoop").value);
    console.log("Value is:",loopValue)

    for(let index = 1; index <= loopValue; index++){
        elementArray.push(index*2)
    }
    
    document.getElementById("labelLoop").innerText = "The For Loop values in the array are ["+elementArray+"]";
}

/*
Fizz buzz is a group word game for children to teach them about division. Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz", and any number divisible by both 3 and 5 with the word "fizzbuzz". */
let fizNum = 20;

//for loop
for(let i = 1; i <= fizNum; i++){
    //first case we are testing the fizzbuzz
    if(i%3 == 0 && i%5 == 0){
        console.log("fizbuzz");
    } else if(i%5==0){
        console.log("buzz");
    } else if(i%3==0){
        console.log("fizz");
    }else{
        console.log("number:",i)
    }
}

//function = a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.
function myName(name){
    console.log("Hi, my name is",name+".")
}
myName("Michael")

//create a function that returs the sum of the area of the right triangle
function pythogoreanTheorem(a,b){
    let c = Math.pow(a,2) + Math.pow(b,2);
    c = Math.sqrt(c)
    return c;
}
console.log("The Value of C:",pythogoreanTheorem(3,4))

//ternary operator consist of three parts.
//the condition followed by the ? mark, and the two option ifTrue : ifFalse - a short cut for an if/else statement. very straighforward and save lines of code . Often use when having boolean cases
function checkAge(ageNum){
    return ageNum >= 10 ? true : false;
}
console.log(checkAge(1))
console.log(checkAge(10))
console.log(checkAge(9))
console.log(checkAge(22))

/*
Variable Scope
let used for block scope variables{}
var used for functions(){} 
but if used in a for loops, than the variable can be access. Var effects global varibale in the dom/window
*/

//Template literals = delimited with (') instead of double or single quotes allows embedded variabels and expression

let literalUsername = "Kevin Durant"
let itemCart = 9;
let total = 75;
console.log(`Welcome user ${literalUsername}.`);
console.log(`You got ${itemCart} in your cart.`);
console.log(`Your total is $${total}`);

//toLocaleString() function returns a string with a language sensiteive representation of this number. cc https://www.w3schools.com/jsref/jsref_tolocalestring.asp for more information


//ARRAYS = Arrays represent multiple data elements of the same type using a single name. Accessing or searching an element in an array is easy by using the index number.
let fruits = ['apple','orange','pear','banana']
console.log(fruits)
fruits.pop()//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
fruits.push('lemon')//Add/Appends new elements to the end of an array, and returns the new length of the array.
console.log(fruits)
fruits.unshift('mango')//Inserts new elements at the start of an array, and returns the new length of the array.
console.log(fruits)
fruits.shift()//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(fruits)

console.log(`lenth of the fruits array: ${fruits.length}`)
console.log(fruits.indexOf('lemon'))//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

//LOOP THROUGH AN ARRAY
let prices = [4,19,2,10,-10,]
//Loop 1
console.log("1st way to loop through an array")
for (const key in prices) {
    if (Object.hasOwnProperty.call(prices, key)) {
        const element = prices[key];
        console.log(`Element: ${element}`)
    }
}
//Loop 2
console.log("2nd way to loop through an array")
prices.forEach(element => {
    console.log("Element:",element)
});
//Loop 3
console.log("3rd way to loop through an array")
for(let i = 0; i <= prices.length - 1; i++){
    console.log("Element:",prices[i])
}
//Loop 4
console.log("4th way to loop through an array")
for(let price of prices){
    console.log("Element:",price)
}

//sort arrays 
console.log(fruits)
fruits.sort()
console.log(fruits)
console.log(prices)
prices.sort().reverse()
console.log(prices)

//spread operator - allows us to quickly copy all or part of an existing array or object into another array or object.

//Vehicle
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
console.log(myVehicle)
//more inforation that need to be added to the vehicle
const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
}
console.log(updateMyVehicle)
//update the vehicle with the new information
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle)

//rest parameters - The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10

  //callback is a function passed as an argument to anotehr function. 
  /*The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.  */

// let sumTotal = sum(2,3)
// displayConsole(sumTotal)
// displayToDOM(sumTotal)

// function sum(x,y){
//     let result = x+y;
//     return result;
// }
 

newSum(9,9, displayToDOM);

function newSum(x,y, passFun){
    let result = x+y
    passFun(result)
}

function displayToDOM(output){
document.getElementById("callBack").innerHTML = `Callback function Game.<h1>${output}</h1>`;
}

function displayConsole(output){
    console.log(output)
} 