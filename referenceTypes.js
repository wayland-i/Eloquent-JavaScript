
//primitive data types in JS
let num = 5 // Numbers are immutable
let bool = true // Booleans are immutable
// STRINGS ARE IMMUTABLE in JS, C, and JAVA
let string = "hello" //strings deep down are really ref types (C, Java). they can be acted upon using some array methods in JS. 
// STRINGS ARE IMMUTABLE in JS, C, JAVA
// when you "edit a string" you are really creating a new string in memory
console.log(num)

//"reference" data types in JS... 
let array = [1, 2, 3]
// arrays were meant to be rearranged and updated, as a design choice they were made to be mutable
let myObj = {mood: "happy"}
// objs can be either. but are often mutable unless they are set to be immutable



let myString = "hello world"

let y = new Number(6)

console.log(y)

let z = new Boolean(true)

console.log(z)

let a = new String("Hello")

console.log(a)

let b = new Object({book: "Peter Pan"}) // this is mutable
let c = new Object.freeze({movie: "Hook"}) // this was made to be immutable by the .freez method
//when you edit variable c you create a new object in memory.

console.log(b)
console.log(c)