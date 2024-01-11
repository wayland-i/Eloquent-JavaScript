// first write a function that takes an array as an argument and return a new array that
// has the reverse order of the original array

let myArray = [1, 2, 3, 4, 5]

const reverseArray = (array) => {
    let reverseArray = []
    for (let num of array) {
        reverseArray.unshift(num)
    }  
    return reverseArray
}

console.log(reverseArray(myArray))

