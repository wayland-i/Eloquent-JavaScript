// Page 53, not an excercise, just reviewing the code
// given farm animal number and label, console.log "003" pigs, "011" cows
// has to always be 3 digits in length, achieve this by adding zeros to the front of the number until it is of length 3

function createNumberandLabel(number, label) {
    let numberString = String(number)
    while (numberString.length < 3) {
        numberString = "0" + numberString
    }
    console.log(`${numberString} ${label}`)
}

createNumberandLabel(10, "pigs")
createNumberandLabel(6, "sheep")
createNumberandLabel(223, "cows")

