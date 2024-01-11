// first write a function that thakes 2 arguments, start and end, and returns an array contianing
// all the numbers from number start to number end inclusive (start, num, num, end)

const myArray = []

const getRange = (start, end) => {
    let counter = start
    while (counter <= end) {
        myArray.push(counter)
        counter++
    }
    console.log(myArray)
}

getRange(4, 20)

