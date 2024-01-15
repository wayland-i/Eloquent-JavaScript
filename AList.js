// write a function that takes an array as an argument and creates an obj of objects based on the number
// of elements in the array

myArray = [1, 2, 3]

const arrayToList = (array) => {
    let list = {}
    for (let i = array.length - 1; i >= 0; i--) {
        // console.log(array[i])
        if (i == array.length - 1)
        {
            list = {value: array[i], rest: null}
            // console.log(list)
        } else if (i < array.length - 1) {
            list = {value: array[i], rest: list}
            // console.log(list)
        }
    }
    return list
}

console.log(arrayToList(myArray))

// second solution

myList = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

nextArray = []
const listToArray = (list) => {
    if (list.rest == null) {
        nextArray.push(list.value)
        // console.log(nextArray)
        
    } else {
        nextArray.push(list.value)
        // console.log(nextArray)
        listToArray(list.rest)
    }
    // console.log(nextArray)
}


// listToArray(myList)
// console.log(nextArray)


// third solution
// prepend the list with a new element



    

