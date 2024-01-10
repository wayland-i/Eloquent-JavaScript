for(let i = 1; i < 101; i++) {
    // console.log(i);

    // set up conditions
    // if % 3 == 0 then "Fizz"
    // if % 5 == 0 then "Buzz"
    // if % 3 && % 5 == 0 then "FizzBuzz"

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}