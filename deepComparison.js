function deepEqual (value1, value2) {
    // check if both args are the same type
    if (typeof(value1) === typeof(value2)) {
        if (typeof(value1) === "object") {
            const keysArray1 = Object.keys(value1)
            const keysArray2 = Object.keys(value2)
            // console.log(keysArray1)
            // console.log(keysArray2)

            if (JSON.stringify(keysArray1) === JSON.stringify(keysArray2)) {
                // console.log("arrays are same")

                for (i = 0; i < keysArray1.length; i++) {
                    deepEqual(keysArray1[i], keysArray2[i])
                }
                return 
            }
            
        } else if (value1 === value2) {
            console.log("this is true")
            return true
        } else {
            console.log("this is false")
            return false
        }
    }
    
}

let string1 = "hello"
let string2 = "hello"

let myArray1 = [1, 2, 3]
let myArray2 = [1, 2, 3]

let myObj1 = {Age: 28, Name: "Ian", Location: "New York", mood: "happy"}
let myObj2 = {Age: 28, Name: "Ian", Location: "New York"}

console.log(deepEqual(myObj1, myObj2))

// console.log(myObj1.keys)

// console.log(typeof(myArray1))