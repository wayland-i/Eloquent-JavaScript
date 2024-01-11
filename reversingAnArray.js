// first write a function that takes an array as an argument and return a new array that
// has the reverse order of the original array

let myArray = [1, 2, 3, 4, 5]

// const reverseArray = (array) => {
//     let reverseArray = []
//     for (let num of array) {
//         reverseArray.unshift(num)
//     }  
//     return reverseArray
// }

// console.log(reverseArray(myArray))


// write a function that reverses an array without creating a new array
// this had to utilize a temp variable to store the value that would in the next line be
// overwritten. That temp number would then go to the end of the array

const reverseArrayInPlace = (array) => {
    let start = 0
    let end = array.length - 1
    while (start < end) {
        let temp = array[start]
        array[start] = array[end]
        array[end] = temp

        start++
        end--
    }
    return array
}

console.log(reverseArrayInPlace(myArray))

