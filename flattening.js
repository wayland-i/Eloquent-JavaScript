//use .reduce and .concat to make an array of arrays a single array containing all the og arrays elements

let myArray = [1, 2, 3, 4]
let myArray1 = [5, 6, 7, 8]

let superArray = [[1, 2, 3, 4,], [5, 6, 7, 8, 9]]

// console.log(myArray.reduce((a, b) => a + b))

console.log(myArray.concat(myArray1))

// console.log(superArray.reduce((a, b) => a + b))

// console.log(superArray.length - 1)

// let elems = superArray.length - 1 

// let newArray = [];

// for (let i = 0; i <= elems; i++) {
//     console.log(superArray[i])
//     newArray += superArray[i]
    
// }


this is a solution that doesn't use reduce or concat but still works
const newArray = new Array;

for (let i = 0; i < superArray.length; i ++) {
    for (let j = 0; j < superArray[i].length; j++) {
        console.log(superArray[i][j])
        newArray.push(superArray[i][j])
    }
}

console.log(newArray)