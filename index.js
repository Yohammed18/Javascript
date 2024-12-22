const numbers = [1,2,3,4,5]

const doubleNumbers = numbers.map(number =>{
    return number*2
})

const filterNumbers = numbers.filter(number =>{
    return number%2 != 0
})

console.log('Double Array: ',doubleNumbers)

console.log('Filter Array: ',filterNumbers)


const instArray = Array.of('13', 23, 1, {key: 1})
console.log(instArray)

const emptyArray = Array(7)

console.log('Array: ', emptyArray,'. Array length: ',emptyArray.length)

console.log('Array Entries,   ', instArray.entries().next().value)

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(`Cats: ${cat}`);
}
console.log('')
for (const cat in cats) {
    console.log(`Index: ${cat}`);
  }


  