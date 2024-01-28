// function 'loop' that takes a:
// value
// test function
// update function
// body function

// first it runs the test function on the current loop (and stops if it return false)

// then it runs the body function (uses value)

// finally it calls the update function and starts from the beginning of the loop


const loop = (value, testFunction, bodyFunction, updateFunction) => {
    for (let i = value; i < value + 5; i++) {
        testFunction(i)
        bodyFunction(i)
        updateFunction(i)
    }
}

loop(10, testFunction, bodyFunction, updateFunction)

function testFunction(x) {
    console.log("test: ", x)
}

function bodyFunction(x) {
    console.log("body: ", x)
}

function updateFunction(x) {
    console.log("update: ", x + 5)
}