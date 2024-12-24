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

let sumTotal = sum(2,3)
displayConsole(sumTotal)
displayToDOM(sumTotal)

function sum(x,y){
    let result = x+y;
    return result;
}
 

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

// array.forEach() 🔚
//array.map() ⚙️
// array.filter() 🗑️
// array.reduce()
//array.sort()


//function expression - The function keyword can be used to define a function inside an expression. (You can also define functions using the function declaration or the arrow syntax.)
//create a function expression that will prompt Welcome To my page in you html file 
const clickMe = function(){
    document.getElementById('clickMe').innerHTML = `<h3>YOU CLICKED ME :-)</h3>`;
}
const unClickMe = function(){
    document.getElementById('clickMe').innerHTML = `<h3>You unclicked me :-(</h3>`;
}
const resetClick = function(){
    document.getElementById('clickMe').innerHTML = ``;
}

//An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
/*Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions. */
const greeting = (newName) => {
    console.log(`Hello ${newName}`)
}
greeting('Michael Jordan!')

//data scructure MAP - The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value
const store = new Map([
    ['Jordan',23],
    ['Bryant',24],
    ['James',6],
    ['O\'Neal',32],
    ['Iverson',3]
])

store.forEach((value, key) => console.log(`Player: ${key}, Jersey: ${value}`))

//objects in javascript are a group of properties and methods. properties is what the object has and methods are things the objects can do.

const car ={
    make: 'Tesla',
    model: 'Y',
    color: 'Grey',
    year: 2023,

    drive : function(){
        console.log(`Your ${this.make} is driving`)
    },

    break : function(){
        console.log(`You stop on the break`)
    }
}
car.break()

//Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

class Player{
    score = 0;

    pause(){
        console.log(`You paused the game`)
    }

    exit(){
        console.log(`You exit the game`)
    }
}

const player = new Player();

player.pause()
player.exit()

//constructor is a special methods of a class that may accepts arguments and assign properties to the class variables when the class is instantiated 
class Student{
    
    constructor(name, age, gpa){
        this.name = name;
    }

    study(){
        console.log('STUDENT BIO')
        console.log(`The student name is ${this.name}.`);
        console.log(`The student is ${this.age} years old.`)
        console.log(`He has a ${this.gpa} gpa.`)
    }
}


const s1 = new Student('Mohammed', 31, 3.7)
s1.study()
//static key word belongs to the class not the object
//super key word referes to a the parent class and is used to invoke the constructor of a parant classs. useful for code reusability super(pass parameters)
//get (getter ) binds an object property to a function when that property is access (use the this._variableName = variable name to make it private) we use getter to increase data security
//set (setter) binds an object property to a function when that property is assigned a value

class Motorcycle{
    constructor(power){
        this._power = power;
    }

    get power(){
        return `${this._power}hp`
    }
}
const motor = new Motorcycle(400);
console.log(motor.power)
//setTimeout() = invokes a function after a number of milliseconds asynchronous function (doesn't pause the program execution)