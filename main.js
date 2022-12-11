// Write a message to the console.
console.log('hello world!');
console.log("Hello again!");

// -------------
// comments
// --------------
// one row comment

/* multi line comment
...more...
...more...
*/ 

// ------------
// data types
// ------------
console.log("The type of 42 is " + typeof 42); // number
console.log("The type of 3.14 is " + typeof 3.14); // number
console.log("The type of '42' is " + typeof '42'); // string
console.log('The type of "42" is ' + typeof "42"); // string
console.log("The type of true is " + typeof true); // boolean
console.log("The type of false is " + typeof false); // boolean
console.log("The type of null is " + typeof null); // object not null
let variable;
console.log("The type of variabel is " + typeof variable); // undefined
variable = 5;
console.log("The type of variabel is " + typeof variable); // number

// ---------------------
// work with string
//----------------------

// length of string
console.log("'text'.length = " + 'text'.length)

// concat strings
console.log("yellow " + "submarine");

// template literals
// read more: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
let text = "yellow";
// Note: use backslick character: `
console.log(`A ${text} submarine`); // A yellow submarine

// functions
console.log("text".toUpperCase()); // TEXT
console.log("TEXT".toLowerCase()); // text

console.log("submarine".charAt(0)); // s
console.log("submarine"[1]); // u

console.log("abba".indexOf("b")); // 1 not 2
console.log("abba".lastIndexOf('a')); // 3 not 0

console.log("submarine".startsWith("sub")); // true
console.log("submarine".endsWith("e")); // true

// read more about string: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// ----------------
// math library
// ----------------
console.log(Math.random()); // slumptal mellan 0 och 1 men inte 1, [0, 1)
console.log(Math.floor(3.14)); // 3 släng decimaldelen
console.log(Math.ceil(3.14)); // 4 närmast större heltal
console.log(Math.round(3.14)); // 3 to nearest integer
// read more:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// --------------
// math operators
// --------------

console.log("3 + 4 = " + (3 + 4));
console.log("100 - 1 = " + (100 - 1));
console.log("3.14  * 10 = " + (3.14 * 10));
console.log("99 / 2 = " + (99 / 2));

// ----------
// Number 
// ----------

console.log(Number.isInteger(42)); // true
console.log(typeof Number.parseInt("34")); // number
console.log(typeof Number.parseFloat("3.14")); // number
// read more:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number



// ------------------------
// constants and variables
// ------------------------
// constant - cannot have a new value
const pi = 3.14;

// variable
let color = "red";

// --------------------------
// math asignment operators
// --------------------------

let x = 5;

x = x + 2; //öka x med 2 till 7

x += 2; //öka x med 2 till 9

x -= 1; //minska x med 1 till 8

x *= 2; //fördubblar x till 16

x /= 2; //halverar x till 8

++x; //öka x med 1 till 9

x++ //öka x med 1 till 10

--x; //minska x med 1 till 9

x--; //minska x med 1 till 8

// -------------
// if - statement
// --------------

let randomNumber = Math.random();
if (randomNumber < 0.5) {
    console.log("krona");
}
else {
    console.log("klave");
}

