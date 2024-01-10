// for (let i = 1; i < 8; i++) {
//       console.log("#".repeat(i))
// }

// OR //

// let pound = "#"

// for (let i = 1; i < 8; i++) {
//     console.log(pound.repeat(i))
// }

// Nested for loop, += operator appending string Solution //

let pound = "#"

for (let i = 0; i < 7; i++) {
      for (let j = 0; j < i; j++) {
            pound += "#"
      }
      console.log(pound)
      pound = "#"
}
