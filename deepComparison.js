function deepEqual (value1, value2) {
    if (typeof(value1) === typeof(value2)) {
        if (typeof(value1) === Object) {
            // Object.keys(value1)

        } else if (value1 === value2) {
            return true
        } else {
            return false
        }
    }
    
}

let string1 = "hello"
let string2 = "hello"

let myArray1 = [1, 2, 3]
let myArray2 = [1, 2, 3]

let myObj1 = {Age: 28, Name: "Ian", Location: "New York"}
let myObj2 = {Age: 28, Name: "Ian", Location: "New York"}

console.log(deepEqual(myObj1, myObj2))

console.log(myObj1.keys)