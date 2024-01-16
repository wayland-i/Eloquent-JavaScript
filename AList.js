// write a function that takes an array as an argument and creates an obj of objects based on the number
// of elements in the array


// first solution

myArray = [1, 2, 3]

const arrayToList = (array) => {
    let list = {}
    for (let i = array.length - 1; i >= 0; i--) {
        if (i == array.length - 1)
        {
            list = {value: array[i], rest: null}
        } else if (i < array.length - 1) {
            list = {value: array[i], rest: list}
        }
    }
    return list
}

// console.log(arrayToList(myArray))

// second solution

myList = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

nextArray = []
const listToArray = (list) => {
    if (list.rest == null) {
        nextArray.push(list.value)
    } else {
        nextArray.push(list.value)
        listToArray(list.rest)
    }
}


const invokingListToArray = (list) => {
    listToArray(list)
    return nextArray
}

// console.log(invokingListToArray(myList))


// third solution
// prepend the list with a new element

// add a helper function "prepend" (element, list)
// this takes a new value: num, rest {} and adds it to the front of the input list

const myElement = {value: 5, rest: {}}

const prepend = (element, list) => {
    
    element.rest = list
    return element
}

// console.log(prepend(myElement, myList))


// this function takes a list and a number and returns the element at the chosen position on the list
const nth = (number, list) => {

    // we will use myElement in here and put it where number param tells us

    let nowArray = invokingListToArray(list)

    let value = myElement.value

    if (nowArray[number] === undefined) {
        return undefined
    } else {
        nowArray[number] = value
        return arrayToList(nowArray)
    }
}

console.log(nth(2, myList))


// first we should turn the list into an array
// then we want to get the value property value in the myElement
// then we want to place the value property value at array[number]
// if array[number] does not exist, then we want to return undefined
// then we want to call array to list and then it should be done.

    

