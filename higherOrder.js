//higher order functions!

//higher order functions = either take functions as arguments or return functions. OR both!

//a callback function = a function that is passed as an arguement to another function

//side effects = any observable change a fucntion makes outside of returning a value.
//if a function does anything beyond computing and returning its result, then that's a side effect.

//pure = A function without a side effect. Functions that DO NOT change the external world of the program. They do not update any global variables or return values that change things 

//impure = A function that produces a side affect. This is also a function that given input a,b... let's say input a stays the same, but input b changes, this would not be considered pure function. 


//filter
//filter takes a callback function that returns true or false for each item, if it returns true, then the item stays in the new array. If not it is filtered out.
const numbersInFilterArray = [1, 2, 3, 4, 5]
const evens = numbersInFilterArray.filter(n => n % 2 === 0)
console.log(evens)

//map
//map takes a callback function that returns a NEW array. It performs essentially a forEach, but forEach does not inherently return an array, forEach just causes side effets.
//map is for data transformations that we would like a brand new array for.
//forEach always returns undefined, unless you tell it to explicitly return ~something~... it's just for logging or for showing things in the DOM really. It's really just an end point for an array.
//forEach is really just to perform side effects. Logging, DOM updates, etc.
const numsForMap = [1, 2, 3, 4]
const doubled = numsForMap.map(x => x * 2)
console.log(doubled)

//reduce
//for computing and returning a single value from an array. summing all the numbers in the array, or checking to see which is the biggest.
const numbers = [3, 7, 2, 9, 5];

const max = numbers.reduce((acc, current) => {
  return current > acc ? current : acc
}, numbers[0])

console.log("max", max)



//forEach
//forEach always returns undefined, unless you tell it to explicitly return ~something~... it's just for logging or for showing things in the DOM really. It's really just an end point for an array.
//forEach is really just to perform side effects. Logging, DOM updates, etc.
const numsForforEach = [1, 2, 3, 4, 5]
numsForforEach.forEach(x => {
    let y;
    y = x * 2
    console.log(y)
})
