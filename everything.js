// implement every as a function that takes an array and predicate function as parameters

const everyFunction = (array, predFunction) => {
    return predFunction(array)
}

console.log(everyFunction([1, 2, 3, 4], predFunction))

function predFunction(x) {
    return x.every((num) => {
        console.log(num > 0)
        return num > 0
    })
}


// implement one version using a loop
