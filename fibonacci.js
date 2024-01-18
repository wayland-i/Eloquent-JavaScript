let n = 8;
let output = []

//F(n) = F(n-1) + F(n - 2)

const fib = (input) => {
    // myArray = [1, 2, 3]

    let num = 1
    while (!output.includes(input)) {
        let sum = (num - 1) + (num - 2)
        
        output.push(Math.abs(sum))
        num++
        console.log(output)
    }

}


fib(8);