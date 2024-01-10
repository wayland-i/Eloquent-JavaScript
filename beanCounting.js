// write a function called countBs that takes 1 argument (a string) and returns the number of "B" characters there are in that string


// Solution for first problem
// let bCounter = 0

// function countBs( myString) {
//     for (let i = 0; i <= myString.length - 1; i++) {
//         if (myString[i] == "B") {
//             bCounter += 1
//         }
//     }
//     return bCounter;
// }

// const count = countBs("BaBBy back RiBs")

// console.log(count)



// Solution for second problem

let charCounter = 0

function countChars( myString, char) {
    for (let i = 0; i <= myString.length - 1; i++) {
        if (myString[i] == char) {
            charCounter += 1
        }
    }
    return charCounter;
}

const count = countChars("BaBBy back RiBs", "a")

console.log(count)
