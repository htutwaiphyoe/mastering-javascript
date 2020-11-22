/************************************************
    3.2.1 Integer Literals
************************************************/
console.log(255); // 255 (2*100 + 5*10 + 5*1)
console.log(0xff); // 255 (15*16 + 15)
console.log(0b11111111); // 255 (1*128 + 1*64 + 1*32 + 1*16 + 1*8 + 1*4 + 1*2 + 1*1)
console.log(0o377); // 255 (3*64 + 7*8 + 7*1)

/************************************************
    3.2.2 Floating-Point Literals
************************************************/
console.log(3.14);
console.log(6.02e23);
console.log(1.45e-2);

let billion = 1_000_000_000; // Underscore as a thousands separator.
let bytes = 0x89_ab_cd_ef; // As a bytes separator.
let bits = 0b0001_1101_0111; // As a nibble separator.
let fraction = 0.123_456_789; // Works in the fractional part, too.

/************************************************
    3.2.3 Arithmetic in JavaScript
************************************************/
// Math Object
Math.pow(2, 53); // => 9007199254740992: 2 to the power 53
Math.round(0.6); // => 1.0: round to the nearest integer
Math.ceil(0.6); // => 1.0: round up to an integer
Math.floor(0.6); // => 0.0: round down to an integer
Math.abs(-5); // => 5: absolute value
Math.max(x, y, z); // Return the largest argument
Math.min(x, y, z); // Return the smallest argument
Math.random(); // Pseudo-random number x where 0 <= x < 1.0
Math.PI; // π: circumference of a circle / diameter
Math.E; // e: The base of the natural logarithm
Math.sqrt(3); // => 3**0.5: the square root of 3
Math.pow(3, 1 / 3); // => 3**(1/3): the cube root of 3
Math.sin(0); // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10); // Natural logarithm of 10
Math.log(100) / Math.LN10; // Base 10 logarithm of 100
Math.log(512) / Math.LN2; // Base 2 logarithm of 512
Math.exp(3); // Math.E cubed
// ES6 new functions
Math.cbrt(27); // => 3: cube root
Math.hypot(3, 4); // => 5: square root of sum of squares of all arguments
Math.log10(100); // => 2: Base-10 logarithm
Math.log2(1024); // => 10: Base-2 logarithm
Math.log1p(x); // Natural log of (1+x); accurate for very small x
Math.expm1(x); // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x); // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2, 3); // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf); // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9); // => 3: convert to an integer by truncating fractional part
Math.fround(x); // Round to nearest 32-bit float number
Math.sinh(x); // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x); // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()

// Overflow
console.log(9e1000); // Infinity
console.log(-9e1000); // -Infinity
console.log(9e1000 + 9e1000); // Infinity

// Underflow
console.log(0.1e-1000); // 0
console.log(-0.1e-1000); // -0

// Division by zero
console.log(9 / 0); // Infinity
console.log(-9 / 0); // -Infinity

// NaN
console.log(0 / 0); // NaN
console.log(Infinity / Infinity); // NaN
console.log(Math.sqrt(-2)); // NaN
console.log(2 * "Ok"); // NaN

Infinity; // A positive number too big to represent
Number.POSITIVE_INFINITY; // Same value
1 / 0; // => Infinity
Number.MAX_VALUE * 2 - // => Infinity; overflow
  Infinity; // A negative number too big to represent
Number.NEGATIVE_INFINITY - // The same value
  1 / 0 - // => -Infinity
  Number.MAX_VALUE * 2; // => -Infinity
NaN; // The not-a-number value
Number.NaN; // The same value, written another way
0 / 0; // => NaN
Infinity / Infinity; // => NaN
Number.MIN_VALUE / 2 - // => 0: underflow
  Number.MIN_VALUE / 2 - // => -0: negative zero
  1 / Infinity - // -> -0: also negative 0
  0;
// The following Number properties are defined in ES6
Number.parseInt(); // Same as the global parseInt() function
Number.parseFloat(); // Same as the global parseFloat() function
Number.isNaN(x); // Is x the NaN value?
Number.isFinite(x); // Is x a number and finite?
Number.isInteger(x); // Is x an integer?
Number.isSafeInteger(x); // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER; // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER; // => 2**53 - 1
Number.EPSILON; // => 2**-52: smallest difference between numbers

console.log(NaN === NaN); // => false
console.log(NaN === 12); // => false
const x = NaN;
console.log(x != x); // true
console.log(Number.isNaN(x)); // => true
console.log(Number.isNaN("ok")); // false
console.log(isNaN("ok")); // false

console.log(Number.isFinite(1)); // => true
console.log(Number.isFinite("1")); // false
console.log(isFinite("1")); // true

console.log(0 === -0); // => true
console.log(1 / 0 === 1 / -0); // false

/************************************************
    Binary Floating Points & Rounding Errors
************************************************/

console.log(0.1 + 0.2); // 0.30000000000000004
let x = 0.3 - 0.2;
let y = 0.2 - 0.1;
console.log(x == y); // false
console.log(x == 0.1); // false
console.log(y == 0.1); // true
console.log(x * 9 + 22); // 22.9
console.log(y * 9 + 22); // 22.9
console.log((0.175).toFixed(2)); // 0.17
console.log((1.175).toFixed(2)); // 1.18
console.log((2.175).toFixed(2)); // 2.17

/************************************************
    BigInt
************************************************/

1234n; // A not-so-big BigInt literal
0b111111n; // A binary BigInt
0o7777n; // An octal BigInt
0x8000000000000000n; // => 2n**63n: A 64-bit integer

BigInt(Number.MAX_SAFE_INTEGER); // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
BigInt(string); // => 10n**100n: one googol

1000n + 2000n; // => 3000n
3000n - 2000n; // => 1000n
2000n * 3000n; // => 6000000n
3000n / 997n; // => 3n: the quotient is 3
3000n % 997n; // => 9n: and the remainder is 9
2n ** 131071n - 1n; // A Mersenne prime with 39457 decimal digits

1n + 1 // Error Cannot mix BigInt and other types, use explicit conversions

1 < 2n // => true
2 > 1n // => true
0 == 0n // => true
0 === 0n // => false: the === checks for type equality as well

Math.floor(1n) // Error

/************************************************
    Dates & Times
************************************************/
console.log(Date.now());
var date = new Date(2020, 06, 24, 10, 11, 30);
var currDate = new Date();
console.log(typeof date, currDate, date - currDate);
console.log(currDate.getFullYear());
console.log(currDate.getMonth());
console.log(currDate.getDate());
console.log(currDate.getHours());
console.log(currDate.getDay());
console.log(currDate.getUTCHours());
console.log(typeof currDate.toUTCString());
console.log(typeof currDate.toString());
console.log(currDate.toLocaleDateString());
console.log(currDate.toLocaleTimeString());
console.log(currDate.toISOString());

/************************************************
    Text
************************************************/
let euro = "€";
let love = `💙`;
console.log(euro.length); // => 1: this character has one 16-bit element
console.log(love.length); // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"

/************************************************
    3.3.1 String Literals
************************************************/

// A string representing 2 lines written on one line:
console.log("two\nlines");
// A one-line string written on 3 lines:
console.log("one\
long\
line"); // A two-line string written on two lines:
console.log(`the newline character at the end of this line
is included literally in this string`);

console.log("I want to be a\"Software Engineer\" ");
console.log('I\'m Htut Wai Phyoe')

/************************************************
   3.3.2 Escape Sequences in String Literals
************************************************/
console.log("Hello \nWorld"); // new line
console.log('You\'re right, it can\'t be a quote'); // Escaping
console.log("\xA9"); // copyright symbol
console.log("\u03c0"); // pi symbol
console.log("\u{1f600}"); // 😀 emoji
console.log('\#100daysofcode'); // Ignore \


/************************************************
    3.3.3 Working with Strings
************************************************/

let msg = "Hello, " + "world"; // Produces the string "Hello, world"
let name = "Mg Mg";
let greeting = "Welcome to my blog," + " " + name; // Welcome to my blog, Mg Mg

console.log("hello" === "Hello"); // false
console.log("hah" !== "Hello"); // true
console.log("hello" > "Hello"); // true
console.log(name.length); //5

let s = "Hello, world"; // Start with some text.
// Obtaining portions of a string
s.substring(1, 4); // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1, 4); // => "ell": same thing
s.slice(-3); // => "rld": last 3 characters
s.split(", "); // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l"); // => 2: position of first letter l
s.indexOf("l", 3); // => 3: position of first "l" at or after 3
s.indexOf("zz"); // => -1: s does not include the substring "zz"
s.lastIndexOf("l"); // => 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell"); // => true: the string starts with these
s.endsWith("!"); // => false: s does not end with that
s.includes("or"); // => true: s includes substring "or"

// Creating modified versions of a string
s.replace("llo", "ya"); // => "Heya, world"
s.toLowerCase(); // => "hello, world"
s.toUpperCase(); // => "HELLO, WORLD"
s.normalize(); // Unicode NFC normalization: ES6
s.normalize("NFD"); // NFD normalization. Also "NFKC", "NFKD"

// Inspecting individual (16-bit) characters of a string
s.charAt(0); // => "H": the first character
s.charAt(s.length - 1); // => "d": the last character
s.charCodeAt(0); // => 72: 16-bit number at the specified position
s.codePointAt(0); // => 72: ES6, works for codepoints > 16 bits

// String padding functions in ES2017
"x".padStart(3); // => " x": add spaces on the left to a length of 3
"x".padEnd(3); // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*"); // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-"); // => "x--": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
" test ".trim(); // => "test": remove spaces at start and end
" test ".trimStart(); // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd(); // => " test": remove spaces at right. Also trimRight

// Miscellaneous string methods
s.concat("!"); // => "Hello, world!": just use + operator instead
"<>".repeat(5); // => "<><><><><>": concatenate n copies. ES6

// Read-only string
let s = "hello, world";
s[0] // => "h"
s[s.length-1] // => "d"

/************************************************
   3.3.4 Template Literals
************************************************/

let name = "Bill";
let greeting = `Hello ${name}.`; // greeting == "Hello Bill."
console.log(greeting);

let errorMessage = `\
\u2718 Test failure at :

Stack trace:

`;
console.log(errorMessage);

console.log(`\n`.length); // => 1: the string has a single newline character
console.log(String.raw`\n`.length); // => 2: a backslash character and the letter n

/************************************************
   R3.3.5 Pattern Matching
************************************************/
/^HTML/; // Match the letters H T M L at the start of a string
/[1-9][0-9]*/; // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i; // Match "javascript" as a word, case-insensitive

let text = "testing: 1, 2, 3"; // Sample text
let pattern = /\d+/g; // Matches all instances of one or more digits
console.log(pattern.test(text)); // => true: a match exists
console.log(text.search(pattern)); // => 9: position of first match
console.log(text.match(pattern)); // => ["1", "2", "3"]: array of all matches
console.log(text.replace(pattern, "#")); // => "testing: #, #, #"
console.log(text.split(/\D+/)); // => ["","1","2","3"]: split on nondigits

// /************************************************
//    Boolean
// ************************************************/
// let a = 1;
// let b = 2;
// if (a === 4) {
//   b = b + 1;
// } else {
//   a = a + 1;
// }

// // undefined
// // null
// // 0
// // -0
// // NaN
// // "" // the empty string

// let c = true;
// console.log(c.toString());

// /*********************************************************
//             null & undefined
// *********************************************************/

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(undefined === null);
// console.log(undefined == null);

// /*********************************************************
//             Symbol
// *********************************************************/
// let strname = "string name"; // A string to use as a property name
// let symname = Symbol("propname"); // A Symbol to use as a property name
// console.log(typeof strname); // => "string": strname is a string
// console.log(typeof symname); // => "symbol": symname is a symbol
// let o = {}; // Create a new object
// o[strname] = 1; // Define a property with a string name
// o[symname] = 2; // Define a property with a Symbol name
// console.log(o[strname]); // => 1: access the string-named property
// console.log(o[symname]); // => 2: access the symbol-named property
// console.log(Symbol("12") == Symbol("12")); // false same arguments but different Symbol values
// let s = Symbol("Haa");
// console.log(s.valueOf());
// console.log(s.toString());
// let t = Symbol.for("shared");
// console.log(t.toString());
// console.log(Symbol.keyFor(t)); // output is argument in Symbol.for()
// console.log(Symbol.for("12") === Symbol.for("12")); // true same arguments and same values

// /*********************************************************
//             The Global Object
// *********************************************************/
// console.log(global); // Global Object of Node.js

// console.log(window); // Global Object of Web Browser
// console.log(globalThis); // Global Object of ES2020, both Platform
// console.log(self); // Global Object of Code worker

// /*********************************************************
//   Immutable Primitive Values & Mutable Object Reference
//  *********************************************************/
// let s = "hello"; // Start with some lowercase text
// console.log(s.toUpperCase()); // Returns "HELLO", but doesn't alter s
// console.log(s); // => "hello": the original string has not changed
// let o = { x: 1 }; // Start with an object
// o.x = 2; // Mutate it by changing the value of a property
// o.y = 3; // Mutate it again by adding a new property
// console.log(o);
// let a = [1, 2, 3]; // Arrays are also mutable
// a[0] = 0; // Change the value of an array element
// a[3] = 4; // Add a new array element
// console.log(a);

// let ob = { x: 1 },
//   p = { x: 1 }; // Two objects with the same properties
// console.log(ob === p); // => false: distinct objects are never equal
// let ar = [],
//   b = []; // Two distinct, empty arrays
// console.log(ar === b); // => false: distinct arrays are never equal

// let arr = []; // The variable a refers to an empty array.
// let bb = arr; // Now b refers to the same array.
// bb[0] = 1; // Mutate the array referred to by variable b.
// // => 1: the change is also visible through variable a.
// console.log(arr === bb); // => true: a and b refer to the same object, so they are equal

// let aaa = ["a", "b", "c"]; // An array we want to copy
// let bbb = []; // A distinct array we'll copy into
// for (let i = 0; i < a.length; i++) {
//   // For each index of a[]
//   bbb[i] = aaa[i]; // Copy an element of a into b
// }
// let ccc = Array.from(bbb); // In ES6, copy arrays with Array.from()
// console.log(bbb, ccc);

// function equalArrays(a, b) {
//   if (a === b) return true; // Identical arrays are equal
//   if (a.length !== b.length) return false; // Different-size arrays not equal
//   for (let i = 0; i < a.length; i++) {
//     // Loop through all elements
//     if (a[i] !== b[i]) return false; // If any differ, arrays not equal
//   }

//   return true; // Otherwise they are equal
// }
// console.log(equalArrays(["a", "b", "c"], ["a", "b"]));

// /*********************************************************
//   3.9 Type Conversion
//  *********************************************************/
// console.log(10 + " objects"); // => "10 objects": Number 10 converts to a string
// console.log("7" * "4"); // => 28: both strings convert to numbers
// console.log(1 - "x"); // n == NaN; string "x" can't convert to a number

// console.log(null + 1 + true + false + "" + []); // 1 null = 0 in Number Type
// console.log(" 2 " * 1);

// /*********************************************************
//     3.9.1 Conversion & Equality
//  *********************************************************/
// console.log(null == undefined); // => true: These two values are treated as equal.
// console.log("0" === 0); // => true: String converts to a number before comparing.
// console.log(0 == false); // => true: Boolean converts to number before comparing.
// console.log("0" == false); // => true: Both operands convert to 0 before comparing!

// /*********************************************************
//     3.9.2 Explict Conversion
//  *********************************************************/
// console.log(Number("3")); // => 3
// console.log(String(false)); // => "false": Or use false.toString()
// console.log(Boolean([])); // => true

// let n = new Number(10000);
// let s = new String(10000);
// let b = new Boolean(1);
// console.log(n, s, b);

// let x = "1" + 1;
// console.log(x);
// // x + "" // => String(x)
// // +x // => Number(x)
// // x-0 // => Number(x)
// // !!x // => Boolean(x): Note double !

// var arr = [2];
// var res = arr + 1;
// console.log(res);

// let nnn = 17;
// let binary = "0b" + nnn.toString(2); // binary == "0b10001"
// let octal = "0o" + nnn.toString(8); // octal == "0o21"
// let hex = "0x" + nnn.toString(16); // hex == "0x11"
// console.log(nnn, binary, octal, hex);

// let nnnnnn = 123456.789;
// nnnnnn.toFixed(0); // => "123457"
// nnnnnn.toFixed(2); // => "123456.79" // round trailing digits
// nnnnnn.toFixed(5); // => "123456.78900" // pad with zeros
// nnnnnn.toExponential(1); // => "1.2e+5"
// nnnnnn.toExponential(3); // => "1.235e+5"
// nnnnnn.toPrecision(4); // => "1.235e+5"
// nnnnnn.toPrecision(7); // => "123456.8"
// nnnnnn.toPrecision(10); // => "123456.7890"

// Number("123asfd");
// parseInt("3 blind mice"); // => 3
// parseFloat(" 3.14 meters"); // => 3.14
// parseInt("-12.34"); // => -12
// parseInt("0xFF"); // => 255
// parseInt("0xff"); // => 255
// parseInt("-0XFF"); // => -255
// parseFloat(".1"); // => 0.1
// parseInt("0.1"); // => 0
// parseInt(".1"); // => NaN: integers can't start with "."
// parseFloat("$72.47"); // => NaN: numbers can't start with "$"

// parseInt("11", 2); // => 3: (1*2 + 1)
// parseInt("ff", 16); // => 255: (15*16 + 15)
// parseInt("zz", 36); // => 1295: (35*36 + 35)
// parseInt("077", 8); // => 63: (7*8 + 7)
// parseInt("077", 10); // => 77: (7*10 + 7)

// /*********************************************************
//     3.9.3 Object to Primitive Conversion
//  *********************************************************/

// console.log(Boolean({}), Boolean([]), Boolean(new Number())); // all objects are converted to TRUE in Object-to-Boolean Conversion
// console.log(new String({ name: "Ok" }));
// console.log(`${{ name: "OK" }} haha`);
// console.log(parseInt({}));
// console.log(1 * { name: "12" });
// console.log(+"ha");

// console.log(1 + { num: "1" });
// console.log("a" == { a: 1 });
// console.log("a" != { a: 1 });
// console.log("1" >= 1);
// console.log({ num: 1 } >= 1);
// console.log(new Date() >= new Date());

// console.log({ num: 1 }.toString());

// console.log([12, 12].toString()); // toString method in Array Class
// let ha = function () {
//   console.log("Hello World");
// };
// console.log(ha.toString()); // toString method in Function Class
// console.log(new Date().toString()); // toString method in Date Class
// console.log(/\d+/g.toString()); // toString method in RegExp Class

// console.log([1, 2].valueOf());
// console.log(new Number(1).valueOf());
// console.log({}.valueOf());
// console.log(new Date().valueOf());
// console.log(new Date() + 1); // 1, 41
// console.log([] + {});
// console.log(Number([])); // => 0: this is unexpected!
// console.log(Number([99])); // => 99: really?
// console.log(String([9]));

// console.log(
//   {
//     valueOf: function () {
//       return 1;
//     },
//   } * 1
// );
// console.log([1] == { valueOf: 1 });
// console.log([] + 1);

// /*********************************************************
//     3.10.1,2 var vs let vs const
//  *********************************************************/
// const i = "HTUTWAIPHYOE";
// let j;
// console.log(j);
// j = "ELODY";
// j = "WHERE";
// console.log(i, j);

// var k = 2;
// console.log(k);
// var k = "OK";
// console.log(k);

// console.log(o);
// for (var l = 0; l < 2; l++) {
//   var o = 0;
//   console.log(l);
// }

// const x = 1; // Declare x as a global constant
// if (x === 1) {
//   let x = 2; // Inside a block x can refer to a different value
//   console.log(x); // Prints 2
// }
// console.log(x); // Prints 1: we're back in the global scope now
// // let x = 3; // ERROR! Syntax error trying to re-declare x

// let p = 10;
// p = "ten";

// console.log(h);
// if (true) {
//   var h = 1;
//   let hh = 2;
//   console.log(h);
// }
// // console.log(hh); //ERROR
// console.log(h);
// var hhh = 4;
// let hhhh = 5;
// console.log(hhh === globalThis.hhh);
// // delete globalThis.hhh;
// // console.log(globalThis.hhh);

// for (var iiii = 0; iiii < 2; iiii++) {
//   for (var iiii = 4; iiii < 6; iiii++) {
//     console.log(iiii);
//   }

//   console.log(iiii);
// }

// var obj = {
//   i: "ok",
// };
// delete obj.i;
// console.log(obj);

// /*********************************************************
//     3.10.3 Destructuring Assignment
//  *********************************************************/
// let [x, y] = [1, 2]; // Same as let x=1, y=2
// [x, y] = [x + 1, y + 1]; // Same as x = x + 1, y = y + 1
// [x, y] = [y, x]; // Swap the value of the two variables
// [x, y]; // => [3,2]: the incremented and swapped values

// console.log(x, y);
// // Convert [x,y] coordinates to [r,theta] polar coordinates
// function toPolar(x, y) {
//   return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
// }
// // Convert polar to Cartesian coordinates
// function toCartesian(r, theta) {
//   return [r * Math.cos(theta), r * Math.sin(theta)];
// }

// let [r, theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); theta == Math.PI/4
// let [xx, yy] = toCartesian(r, theta); // [x, y] == [1.0, 1,0]
// console.log(r, theta, xx, yy);
// let o = { x: 1, y: 2 }; // The object we'll loop over
// for (const [name, value] of Object.entries(o)) {
//   console.log(name, value); // Prints "x 1" and "y 2"
// }

// let [xxx, yyy] = [1]; // x == 1; y == undefined
// [xxx, yyy] = [1, 2, 3]; // x == 1; y == 2
// [, xxx, , yyy] = [1, 2, 3, 4]; // x == 2; y == 4

// console.log(xxx, yyy);

// let [xy, ...yx] = [1, 2, 3, 4]; // y == [2,3,4]
// console.log(xy, yx);

// let [a, [b, c]] = [1, [2, 2.5], 3]; // a == 1; b == 2; c == 2.5
// console.log(a, b, c);

// function ok(...a) {
//   console.log(a);
// }
// ok(1, 3, 4);

// let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]
// console.log(first, rest);

// let transparent = { red: 0.0, g: 0.0, blue: 0.0, a: 1.0 }; // A RGBA color
// let { red: rr, g, blue } = transparent; // r == 0.0; g == 0.0; b == 0.0
// console.log(rr, g, blue);
// // Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
// const { sin, cos, tan } = Math;
// // Same as const cosine = Math.cos, tangent = Math.tan;
// const { cos: cosine, tan: tangent } = Math;

// let points = [
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
// ]; // An array of two point objects
// let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points; // destructured into 4 variables.
// console.log(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4); // => true

// let pointss = { p1: [1, 2], p2: [3, 4] }; // An object with 2 array props
// let {
//   p1: [x6, y7],
//   p2: [x8, y9],
// } = pointss; // destructured into 4 vars
// console.log(x6 === 1 && y7 === 2 && x8 === 3 && y9 === 4); // => true
// let ss = [
//   { aaa: 1, bbb: 2 },
//   { ccc: 3, ddd: 4 },
// ];

// let [{ aaa: aaaa, bbb: bbbb }, { ccc: cccc, ddd: dddd }] = ss;
// let ss2 = [
//   { aaaa, bbbb },
//   { cccc, dddd },
// ];

// console.log(ss.values === ss2.values);
