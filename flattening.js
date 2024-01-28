//use .reduce and .concat to make an array of arrays a single array containing all the og arrays elements

let myArray = [1, 2, 3, 4]
let myArray1 = [5, 6, 7, 8]

let superArray = [[1, 2, 3, 4,], [5, 6, 7, 8, 9]]


// this is a solution that doesn't use reduce or concat but still works
// const newArray = new Array;

// for (let i = 0; i < superArray.length; i ++) {
//     for (let j = 0; j < superArray[i].length; j++) {
//         // console.log(superArray[i][j])
//         newArray.push(superArray[i][j])
//     }
// }

// console.log(newArray)



// Using reduce and concat to flatten the superArray
let flattenedArray = superArray.reduce((accumulator, currentArray) => {
  // Concatenate the current array to the accumulator
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);

