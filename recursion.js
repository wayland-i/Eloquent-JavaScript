// function is even will recursively tell you whether or not a positive whole number is even or odd
// function will return true if number is even

function isEven(x) {
    // if x is 0 return true
    // if x is 1 return false
    // else isEven(x - 2)

    if (x == 0) {
        console.log("true")
        return true
    } else if (x == 1) {
        console.log("false")
        return false
    } else {
        isEven(x -2)
    }
}

// will return undefined, adding console.logs
console.log(isEven(14))