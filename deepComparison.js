function deepEqual (value1, value2) {
    // this will return true if only given primitive data types
    // a filter must be set up above this if statement to only send in primitive data types
    // if value 1 && value 2 are both objects then go into the object and for each each element and run it through deepequal(elem[i], elem[i])
    // first have to understand if value 1 and 2 are both objects, arrays, or one is an object and one is an array
    if (typeof value1 === 'object' && typeof value2 === 'object'){
        // checks if both values are objects
        console.log('both objects')
        if (value1 === null && value2 === null) {
            console.log("null check")
            return true
        } else if (value1 === null || value2 === null) {
            return false
        }
        if (value1.length === undefined && value2.length === undefined) {
            // checks if both values are objs
            console.log('is object')
            // NEED TO FINISH HERE
        } else if (typeof value1.length === 'number' && typeof value2.length === 'number') {
            // confirms both values are arrays
            console.log('is array')
            // if length on each != then return false
            if (value1.length !== value2.length) {
                return false
            } else {
                // else iterate through each array, calling on deep equal each time
                // console.log("running program")
                for (let i = 0; i < value1.length; i++) {
                    deepEqual(value1[i], value2[i])
                }
            }
        } else {
            return false
        }
    } else {
        // one an object, one not an object
        if (value1 === 'obj' || value1 === 'obj') {
            return false
        } else {
            if (value1 === value2) {
                console.log("true")
                return true
            } else {
                return false
            }
        }

    }
}

//primitive types

let bool1 = true // type bool
let bool2 = false

let string1 = "hello" // type string
let string2 = "hello"

let num1 = 27 //type number
let num2 = 24

//object types

let myArray1 = [1, 2, 3] // arrays are type objs (gives programmer length property and array methods), and are not ===, you ahve to check their elements recursively
let myArray2 = [1, 2, 3]

let myObj1 = {Age: 28, Name: "Ian", Location: "New York"}  // objs are not ===, you have to handle checking their properties recursively
let myObj2 = {Age: 28, Name: "Ian", Location: "New York"}

console.log(deepEqual(myObj1, myObj2))

// first we need to see if val1 and val2 are eqaul
// 

// in the instance of an object we want recursively call deep equal on both the properties and the values of the properties


// console.log(Object.keys(myObj1))