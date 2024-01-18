let n = 8;
let output = [0, 1];

const fib = (input) => {


    let num = 1
    while (!output.includes(input)) {
        let sum1 = output[output.length - 1];
        let sum2 = output[output.length - 2];
        
        let sum =  sum1 + sum2;

        output.push(Math.abs(sum));
        num++;
    }
    return output;
}


console.log(fib(n))