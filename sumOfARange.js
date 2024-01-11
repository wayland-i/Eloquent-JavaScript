// first write a function that thakes 2 arguments, start and end, and returns an array contianing
// all the numbers from number start to number end inclusive (start, num, num, end)

const myArray = []

const getRange = (start, end) => {
    let counter = start
    while (counter <= end) {
        myArray.push(counter)
        counter++
    }
    return myArray;
}

getRange(1, 10)


// seond write a sum function that takes an array as an argument and returns the sum of all
// the numbers in the array

// console.log(myArray) // myArray is [1, 2, 3, ... 10]

const getSum = (numbers) => {
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    return sum;
}

console.log(getSum(myArray))


// 