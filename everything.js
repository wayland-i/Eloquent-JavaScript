// implement every as a function that takes an array and predicate function as parameters

// const everyFunction = (array, predFunction) => {
//     return predFunction(array)
// }

// console.log(everyFunction([1, 2, 3, 4], predFunction))

// function predFunction(x) {
//     return x.every((num) => {
//         // console.log(num > 0)
//         return num > 0
//     })
// }


// implement one version using a loop
// const everyFunction = (array, predFunction) => {
//     return predFunction(array)
// }

// everyFunction([1, 2, 3, 4, 0], predFunction)

// function predFunction(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]) {
//             console.log(true);
//             // return true;
//         } else {
//             console.log(false);
//             // return false;
//         }
//     }
// }



// implement a version using the some method

const some = (array, predFunction) => {
    return predFunction(array);
}

some([1, 2, 3, 4, 0], predFunction)

function predFunction(array) {
    return array.some((num) => {
        console.log(num <= 0);
        return num <= 0;
    })
}