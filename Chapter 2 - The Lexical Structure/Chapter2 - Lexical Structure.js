/**********************  Chapter 2 - Lexical Structure *********************/

/*****************************************
 * 2.1 The Text of a JavaScript Program
 */

/*****************************************
 * 2.2 Comments
 */

/*****************************************
 * 2.3 Literals
 */

/*****************************************
 * 2.4 Identifiers and Reserved Words
 */

/*****************************************
 * 2.4.1 Reserved Words
 */

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