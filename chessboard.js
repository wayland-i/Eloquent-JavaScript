// outputs pattern of # # # to the terminal, alternating like a chessboard

// rows either start with " " and end with "#" OR start with "#" and end with " "

let size = 8
let row = ""

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size/2; j++) {
        //this loop will handle creating each alternating row pattern
        if (i % 2 == 0) {
            row += "# "
        } else {
            row += " #"
        }
    }
    console.log(row)
    row = ""
}
