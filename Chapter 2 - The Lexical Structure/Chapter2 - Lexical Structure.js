/**********************  Chapter 2 - Lexical Structure *********************/

/*****************************************
 * 2.5 Unicode
 */

const နာမည် = "ထွဋ်ဝေဖြိုး";

const ပြပါ = () => {
  console.log(နာမည်);
};

ပြပါ();

/*****************************************
 * 2.5.1 Unicode Escape Sequences
 */

let café = 1; // Define a variable using a Unicode character
console.log(caf\u00e9); // => 1; access the variable using an escape sequence
console.log(caf\u{E9}); // => 1; another form of the same escape sequence
console.log("\u{1F600}"); // Prints a smiley face emoji

/*****************************************
 * 2.5.2 Unicode Normalizaton
 */

const café = 1; // This constant is named "caf\u{e9}"
const café = 2; // This constant is different: "cafe\u{301}"
café // => 1: this constant has one value
café // => 2: this indistinguishable constant has a different value

/*****************************************
 * 2.6 Optional Semicolons
 */

 // semicolon can be omitted
 a = 3
 b = 4

 // semicolon must be added
 a = 3; b = 4;

// continuation of statement 1
let a
a
=
3
console.log(a)
let a; a = 3; console.log(a); // interpreted

// continuation of statement 2

let y = x + f
(a+b).toString()

let y = x + f(a + b).toString(); // interpreted

// defensive semicolon

let x = 0 // Semicolon omitted here
;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this statement separate

// three exceptions

// written
return
true;

// interpreted
return; true;

// excepted
return true;

// written
x
++
y

// interpreted
x; ++y;

// excepted
x++; y;

