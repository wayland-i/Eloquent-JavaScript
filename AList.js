// write a function that takes an array as an argument and creates an obj of objects based on the number
// of elements in the array

myArray = [1]

function arrayToList(array) {
    let list = {}
    for (let num of array) {
        list.value = num
        list.rest = {}
        list = list.rest
    }
    return list
}


console.log(arrayToList(myArray))


// let list = {value: 1,
//             rest: {
//                 value: 2,
//                 rest: {
//                     value: 3,
//                     rest: null
//                 }
//             }}


//             console.log(list.rest.rest)