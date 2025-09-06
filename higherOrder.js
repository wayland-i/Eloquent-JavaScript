//higher order functions!

//higher order functions = either take functions as arguments or return functions. OR both!

//a callback function = a function that is passed as an arguement to another function

//filter
//filter takes a callback function that returns true or false for each item, if it returns true, then the item stays in the new array. If not it is filtered out.
const numbersInFilterArray = [1, 2, 3, 4, 5]
const evens = numbersInFilterArray.filter(n => n % 2 === 0)
console.log(evens)

//map
//map takes a callback function that returns a NEW array. It performs essentially a forEach, but forEach does not inherently return an array, forEach just causes side effets.
//forEach always returns undefined, unless you tell it to explicitly return ~something~... it's just for logging or for showing things in the DOM really. It's really just an end point for an array.
const numsForMap = [1, 2, 3, 4]
const doubled = numsForMap.map(x => x * 2)
console.log(doubled)

//reduce

//forEach
