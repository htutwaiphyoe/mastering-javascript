/**********************  Chapter 2 - Lexical Structure *********************/
// 2.1 The Text of a JavaScript Program

// Case-sensitive
let name = "MgMg";
let Name = "AungAung";
console.log(name, Name);

// Whitespaces
function showName(name) {
    console.log(name);
}

// line break & carriage return
console.log("My\n"); // the \n moves to the beginning of the next line.
console.log("name\ris"); // The \r moves to the beginning of the current line, without moving to the next line
console.log("Mg\r\nMg"); // The \r moves to the beginning of the current line and move to the next line

/*
 * @explanation
 * The difference is simply as that, when you using the Carriage return escape sequence \r at the end of each print sequence, the next iteration of this sequence do not getting into the following text line - At the end of each print sequence, the cursor did not jumped to the *beginning of the next line.
 * Instead, the cursor jumped back to the beginning of the line, on which he has been at the end of, before using the \r character. - The result is that each following iteration of the print sequence is replacing the previous one.
 * Note: A \n do not necessarily jump to the beginning of following text line. On some, in general more elder, operation systems the result of the \n newline character can be, that it jumps to anywhere in the following line, not just to the beginning. That is why, they rquire to use \r \n to get at the start of the next text line.
 */

// /*****************************************
//  * 2.5 Unicode
//  */

// const နာမည် = "ထွဋ်ဝေဖြိုး";

// const ပြပါ = () => {
//     console.log(နာမည်);
// };

// ပြပါ();

// /*****************************************
//  * 2.5.1 Unicode Escape Sequences
//  */

// let café = 1; // Define a variable using a Unicode character
// console.log(café); // => 1; access the variable using an escape sequence
// console.log(café); // => 1; another form of the same escape sequence
// console.log("\u{1F600}"); // Prints a smiley face emoji

// /*****************************************
//  * 2.5.2 Unicode Normalizaton
//  */

// const café = 1; // This constant is named "caf\u{e9}"
// const café = 2; // This constant is different: "cafe\u{301}"
// café; // => 1: this constant has one value
// café; // => 2: this indistinguishable constant has a different value

// /*****************************************
//  * 2.6 Optional Semicolons
//  */

// // semicolon can be omitted
// a = 3;
// b = 4;

// // semicolon must be added
// a = 3;
// b = 4;

// // continuation of statement 1
// let a;
// a = 3;
// console.log(a);
// let a;
// a = 3;
// console.log(a); // interpreted

// // continuation of statement 2

// let y = x + f(a + b).toString();

// let y = x + f(a + b).toString(); // interpreted

// // defensive semicolon

// let x = 0; // Semicolon omitted here
// [x, x + 1, x + 2].forEach(console.log); // Defensive ; keeps this statement separate

// // three exceptions

// // written
// return;
// true;

// // interpreted
// return;
// true;

// // excepted
// return true;

// // written
// x;
// ++y;

// // interpreted
// x;
// ++y;

// // excepted
// x++;
// y;
