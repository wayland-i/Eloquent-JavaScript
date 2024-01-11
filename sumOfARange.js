// first write a function that thakes 2 arguments, start and end, and returns an array contianing
// all the numbers from number start to number end inclusive (start, num, num, end)

// const myArray = []

// const getRange = (start, end) => {
//     let counter = start
//     while (counter <= end) {
//         myArray.push(counter)
//         counter++
//     }
//     return myArray;
// }

// getRange(1, 10)


// seond write a sum function that takes an array as an argument and returns the sum of all
// the numbers in the array

// myArray is [1, 2, 3, ... 10]

// const getSum = (numbers) => {
//     let sum = 0
//     for (let number of numbers) {
//         sum += number
//     }
//     return sum;
// }

// console.log(getSum(myArray))


// bonus assignement: modify the code from the getRange function you defined to include a third argument that
// determines the interval from which start to end is reached (1, 10, 2) = [1, 3, 5, ...] (5, 2, -1) = [5, 4, 3, 2]
// if no step is given the increment goes up by one

const myArray = []

const getRange = (start, end, step=2) => {
    let counter = start
    if (step > 0) {
        while (counter <= end) {
            myArray.push(counter)
            counter += step

        }
    } else if (step < 0) {
        while (counter >= end) {
            myArray.push(counter)
            counter += step
        }
    }
    return myArray
}

console.log(getRange(20, 1, -2))