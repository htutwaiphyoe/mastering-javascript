/****************************************************************
 * Expressions and Operators
 */

/****************************
 * 4.1 Primary Expression
 */

//literal
console.log(1.23); // A number literal
console.log("hello"); // A string literal
console.log(/pattern/); // A regular expression literal
// keywords
console.log(true);
console.log(null);
//variable & constants
let i = 1;
const j = 3;
console.log(i, j, globalThis.location);

/**************************************
 * 4.2 Object & Array Initializers
 */
let arr1 = []; // An empty array: no expressions inside brackets means no elements
let arr2 = [1 + 2, 3 + 4]; // A 2-element array. First element is 3, second is 7
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // Nested Arrays

let sparseArray = [1, , , , 5]; // Undefined elements
console.log(sparseArray);

let arr3 = [1, 3, 4]; // Can add , after last element
console.log(arr3[3]); // Undefined if index is greater than array

let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3;
q.y = -1.2; // Now q has the same properties as p
console.log(p, q);

let rectangle = {
  upperLeft: { x: 2, y: 2 },
  lowerRight: { x: 4, y: 5 },
}; // Nested Object

/**************************************
 * 4.3 Function Definition Expressions
 */

// This function returns the square of the value passed to it.
let square = function (x) {
  return x * x;
};
console.log(square(2));

/**************************************
 * 4.4 Property Access Expressions
 */

let o = { x: 1, y: { z: 3 } }; // An example object
let a = [o, 4, [5, 6]]; // An example array that contains the object
o.x; // => 1: property x of expression o
o.y.z; // => 3: property z of expression o.y
o["x"]; // => 1: property x of object o
a[1]; // => 4: element at index 1 of expression a
a[2]["1"]; // => 6: element at index 1 of expression a[2]
a[0].x; // => 1: property x of expression a[0]

const l = {
  1: 1,
};
console.log(l[1]);
/**************************************
 * 4.4.1 Conditional Property Access
 */

let a = { b: null };
console.log(a.b?.c.d); // => undefined

let aa; // Oops, we forgot to initialize this variable!
let index = 0;
try {
  aa[index++]; // Throws TypeError
} catch (e) {
  index; // => 1: increment occurs before TypeError is thrown
}
console.log(aa?.[index++]); // => undefined: because a is undefined
index; // => 1: not incremented because ?.[] short-circuits
// aa[index++];
/**************************************
 * 4.5 Invocation Expressions
 */
let x = 1,
  y = 3,
  z = 2;
console.log(Math.max(x, y, z)); // Math.max is the function; x, y, and z are the arguments.

function ok() {
  return "Ok";
}
function ok2() {
  console.log("ok");
}
console.log(ok());
console.log(ok2());

let obj = {
  func: function () {
    console.log(this);
    console.log("func");
  },
};

obj.func();

/**************************************
 * 4.5.1 Conditional Invocation
 */

const x = [1, 2, 4, 2, 1, 4];
console.log(x.sort((a, b) => a - b));
function square1(x, log) {
  // The second argument is an optional function
  if (log) {
    // If the optional function is passed
    log(x); // Invoke it
  }
  return x * x; // Return the square of the argument
}
function square2(x, log) {
  // The second argument is an optional function
  log?.(x); // Call the function if there is one
  return x * x; // Return the square of the argument
}

let func;
console.log(func?.());
let f = null,
  xx = 0;
try {
  console.log(f(xx++)); // Throws TypeError because f is null
} catch (e) {
  console.log(xx); // => 1: x gets incremented before the exception is thrown
}

let f2 = null;
let xxx = 0;
console.log(f?.(xxx++)); // => undefined: f is null, but no exception thrown
console.log(xxx); // => 0: increment is skipped because of short-circuiting

const o = { m: function () {} };
o.m(); // Regular property access, regular invocation
o?.m(); // Conditional property access, regular invocation
o.m?.(); // Regular property access, conditional invocation

/**************************************
 * 4.6 Object Creation Expressions
 */

console.log(new Date(2020));
console.log(new Date());

/**************************************
 * 4.7 Operator Overview
 */

let x = 1;
console.log(x++); // post increment
console.log(++x); //  pre increment
console.log(x--); // post decrement
console.log(--x); // pre decrement
console.log(-x); // 1 => -1 convert to negative
console.log(+true); // true => 1 convert to num
console.log(~2); // invert bit
console.log(!x); // invert boolean
let y = { one: 1 };
delete y.one; // delete property
console.log(y);
console.log(typeof x); // type
console.log(void x); // undefined
console.log(2 ** 3); // exponential
console.log(3 / 3); // division
console.log(4 * 4); // multiplication
console.log(4 % 2); // remainder
console.log(1 + 1); // addition
console.log(2 - 1); // subtraction
console.log("1" + 1); // concatenation
console.log(1 >> 1); // shift left
console.log(1 << 1); // shift right with sign
console.log(1 >>> 1); // shift right with zero
console.log(1 < 1, 1 <= 1, 1 > 1, 1 >= 1); // number comparison
console.log(
  "Hello" < "hello",
  "Hello" <= "hello",
  "Hello" >= "hello",
  "Hello" > "hello"
); // string comparison
console.log(y instanceof Object); // instanceof (constructor)
console.log("one" in y); // check property exist
console.log(1 == "1", 1 != "1", 1 === "1", 1 !== "1"); // equlity & inequality
console.log(1 & 2, 1 ^ 2, 1 | 2); // bitwist
console.log(1 && 1, 1 || 1, null ?? 1, 1 ? 1 : 2); // logical
let z = 1;
console.log((z += 1), (z *= 2), (z /= 2)); // shorthand
console.log(2); // comma

/**************************************
 * 4.7.1 Number of Operands
 */
let x = 1;
console.log(-x); // Unary operator
console.log(x + x); // Binary operator
console.log(x ? x : -x); // Ternary operator

/**************************************
 * 4.7.2 Operand and Result Type
 */

console.log(1 * "4");
console.log(1 * "sadf");
let bol = 1;
console.log(!bol);
console.log(1 + 1);
console.log(1 + "1");
console.log(1 > 1);
console.log("Hello" > "hello");

/**************************************
 * 4.7.3 Operator Side Effects
 */
let xxx = 1;
xxx = 2;
xxx = xxx + xxx;
console.log(xxx);
/**************************************
 * 4.7.4 Operator Precedence
 */

console.log(1 + 2 * 5);
console.log((1 + 2) * 5);
const obj = {
  function(y) {
    return y * 10;
  },
};
console.log(typeof obj.function(10));
/**************************************
 *4.7.5 Operator Associativity
 */

console.log(10 - 3 + 3); // left to right
console.log(2 ** (3 ** 3)); // right to left

/**************************************
 * 4.7.6 Order of Evaluation
 */
let ww = 1,
  zz = 1,
  wz;
wz = ww + zz; // order of evaluation is left to right evaluation means calculating value for operation
console.log(wz);

/**************************************
 * 4.8 Arithmetic Expressions
 */

console.log((-3) ** 2);
console.log(-(3 ** 2));
console.log(2 / 1);
console.log(5 / 2); // floating-point result
console.log(0 / 0, 5 / 0, -5 / 0); // No error
console.log(5 % 2, -5 % 2, 6.5 % 2.1);

/**************************************
 *4.8.1 The + Operator
 */

console.log(1 + 2); // => 3: addition
console.log("1" + "2"); // => "12": concatenation
console.log("1" + 2); // => "12": concatenation after number-to-string
console.log(1 + {}); // => "1[object Object]": concatenation after object-to-string
console.log(true + true); // => 2: addition after boolean-to-number
console.log(2 + null); // => 2: addition after null converts to 0
console.log(2 + undefined); // => NaN: addition after undefined converts to NaN

console.log(1 + 2 + " blind mice"); // => "3 blind mice"
console.log(1 + (2 + " blind mice")); // => "12 blind mice"

/**************************************
 *4.8.2 Unary Arithmetic Operators
 */

console.log(+"1"); //1
console.log(+"Hel"); // NaN
console.log(+1); // Nothing changes
// console.log(+BigInt(1121212)); //Error

console.log(-1);
console.log(-"1");
console.log(-"ha");
console.log(-"-1");

let i = 1,
  j = ++i; // i and j are both 2
let n = 1,
  m = n++; // n is 2, m is 1
console.log(i, j, n, m);

console.log(33333333 & 44444444);
console.log(3 | 4);
console.log(3 ^ 4);
let ii = { name: 1 };
let iii = [8];
console.log(++ii, ++iii); //NaN

console.log(~1);
console.log(7 << 1); // 14 equal to multiple by 2 to 7
console.log(7 << 2); // 28 equal to multiple by 4 to 7
console.log(7 >> 2); // 1 equal to divide by 4 to 7
console.log(7 >> 1); // 3 equal to divide by 2 to 7

console.log(-1 >>> 4); //269435455
console.log(-1 >> 4); // -1

/**************************************
 *4.9 Relational Expressions
 */
if (1 == 1) {
  console.log("Relational Expressions");
}

/**************************************
 *4.9.1 Equality and Inequality Operators
 */
console.log(1 == "1"); // true equality
console.log(1 != "2"); // true inequality
console.log(1 === "1"); // false strict equality
console.log(1 !== "2"); // false strict inequality

let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };
console.log(obj1 === obj1); // true
console.log(obj1 === obj2); // false
console.log([1, 2, 3] === [1, 2, 3]); // false

// strict equality
console.log(1 === "1"); //false difference types
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(true === true); // true
console.log(false === false); // true
console.log(NaN === NaN); // false
console.log(NaN === 1); // false
console.log(1 === 1); // true
console.log(0 === -0); //true

console.log("Hello" === "Hello"); // true same
console.log("Hello" === "Helloo"); // false difference length
console.log("Hello" === "hello"); // false difference character
console.log([1, 2] === [1, 2]); // false difference array

// equality with type conversion
console.log(null == undefined); // true
console.log(1 == "1"); // true
console.log(true == "1"); // true true = 1
console.log(false == "false"); // false false = 0
console.log([1, 2] == "1,2"); //true
console.log([1] == true); // true

/**************************************
 *4.9.2 Comparison Operators
 */

console.log(1 < 2); // true
console.log(1 <= 2); // true
console.log(1 >= 2); // false
console.log(1 > 2); // false
console.log([1] >= "1"); // true

console.log(["1"] >= "1"); // true
console.log(["1"] >= 1); // true
console.log(0 >= -0); // true
console.log(Infinity >= Infinity); //true
console.log(Infinity > 3); //true
console.log(Infinity > "Helo"); //false
console.log(-Infinity > -100); // false
console.log(NaN > 1); // always false for NaN
console.log(1n > 1); // false
console.log("Z" < "a"); // true
console.log("Helloss".localeCompare("hello"));
console.log("HELLO".toLowerCase() > "hello");

console.log(1 + 2); // => 3: addition.
console.log("1" + "2"); // => "12": concatenation.
console.log("1" + 2); // => "12": 2 is converted to "2".
console.log(11 < 3); // => false: numeric comparison.
console.log("11" < "3"); // => true: string comparison.
console.log("11" < 3); // => false: numeric comparison, "11" converted to 11.
console.log("one" < 3); // => false: numeric comparison, "one" converted to NaN.

/**************************************
 *4.9.3 The in Operator
 */
let point = { x: 1, y: 1 }; // Define an object
console.log("x" in point); // => true: object has property named "x"
console.log("z" in point); // => false: object has no "z" property.
console.log("toString" in point); // => true: object inherits toString method
let data = [7, 8, 9]; // An array with elements (indices) 0, 1, and 2
console.log("0" in data); // => true: array has an element "0"
console.log(1 in data); // => true: numbers are converted to strings
console.log(3 in data); // => false: no element 3

/**************************************
 *  4.9.4 The instanceof Operator
 */

let d = new Date(); // Create a new object with the Date() constructor
console.log(d instanceof Date); // => true: d was created with Date()
console.log(d instanceof Object); // => true: all objects are instances of Object
console.log(d instanceof Number); // => false: d is not a Number object
let a = [1, 2, 3]; // Create an array with array literal syntax
console.log(a instanceof Array); // => true: a is an array
console.log(a instanceof Object); // => true: all arrays are objects
console.log(a instanceof RegExp); // => false: arrays are not regular expressions
// console.log(a instanceof a); // Error
var dd = 1;
console.log(dd instanceof Number); // false left operand should be object
var aa = { a: 1 };
console.log(aa instanceof Object); // Prototype chain

/**************************************
 *  4.10 Logical Expressions
 */
if (1 === 1 && 2 === 2) {
  console.log("Equal");
}

/**************************************
 *  4.10.1 Logical AND (&&)
 */

let o = { x: 1 };
let p = null;
console.log(o && o.x); // => 1: o is truthy, so return value of o.x
console.log(p && p.x); // => null: p is falsy, so return it and don't evaluate p.x

let a = 1;
let b = 1;
const stop = () => {
  console.log(a, b);
};

if (a === b) stop();
a === b && stop(); // short-circuiting

/**************************************
 *  4.10.1 Logical AND (&&)
 */

console.log(1 || 2); //1
console.log(false || true); // true
let aa = 1,
  bb = 0,
  cc;
cc = bb || aa;
console.log(cc);

function defaultParameter(a) {
  a = a || 10;
  console.log(a);
}
defaultParameter();

/**************************************
 *
 * 4.10.3 Logical NOT (!)
 */
console.log(!1);
console.log(!!1);
// DeMorgan's Laws
let pp = 1,
  q = 2;
console.log(!(pp && q) === (!pp || !q)); // => true: for all values of p and q
console.log(!(pp || q) === (!pp && !q)); // => true: for all values of p and q

/**************************************
 * 4.11 Assignment Expressions
 */

let i,
  j = {};
i = 1;
j.x = 1;

let a;
console.log((a = i) === 1);
let x = (y = z = 1);
console.log((x = 3));

/**************************************
 * 4.11.1 Assignment with Operation
 */

let b = 1;
console.log((b += 2));
console.log((b *= 2));
console.log((b -= 2));
console.log((b /= 2));
console.log((b **= 2));
console.log((b <<= 2));
console.log((b >>= 2));
console.log((b >>>= 2));
console.log((b &= 2));
console.log(b != 2);
console.log((b ^= 2));
console.log((b %= 2));

let data = [1, 2, 3];
let k = 0;
// data[k++] += 2; // [3,2,3]
console.log(data);
data[k++] = data[k++] + 2; // [4,2,3]
console.log(data);

/**************************************
 * 4.12 Evaluation Expressions
 */

console.log("4 + 1");
console.log(eval("4+2"));
let f = eval;
let g = f;
console.log(g("1 + 2"));

/**************************************
 * 4.12.1 eval()
 */

console.log(eval(3));
// console.log(eval("haha")); Error
let xx = 1;
console.log(eval("xx"));
console.log(eval("xx = 3"));
eval("var xxx = 3");
console.log(xxx);
eval("let xxxx = 3");
// console.log(xxxx); Error
eval("function ff() { console.log('hah') }");
ff();
// console.log(eval("return 1")); Error
function fff() {
  console.log("FFF");
}
eval("fff()");

/**************************************
 * 4.12.2 Global eval()
 */

const geval = eval; // Using another name does a global eval
let x = "global",
  y = "global"; // Two global variables
function f() {
  // This function does a local eval
  let x = "local"; // Define a local variable
  eval("x += 'changed';"); // Direct eval sets local variable
  return x; // Return changed local variable
}
function g() {
  // This function does a global eval
  let y = "local"; // A local variable
  geval("y += 'changed';"); // Indirect eval sets global variable
  return y; // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global":
console.log(g(), y); // Global variable changed: prints "local globalchanged":

/**************************************
 * 4.13 Miscellaneous Operators
 */

/**************************************
 * 4.13.1 The Conditional Operator (?:)
 */

let x = 1;
console.log(x > 0 ? x : -x);
let username;
let greeting = "hello " + (username ? username : "there");
console.log(greeting);

let greeting2 = "hello ";
if (username) {
  greeting2 += username;
} else {
  greeting2 += "there";
}
console.log(greeting2);

/**************************************
 * 4.13.2 First-Defined (??)
 */

let a,
  b = 2,
  c = 3;

console.log(c ?? a);
a !== null && a !== undefined ? console.log(a) : console.log(b);
console.log(a ?? b);

let aa = 0 || false || "" || 1; // 1 check truthy
console.log(aa);

let bb = 0 ?? false ?? "" ?? 1; // 0 check defined
console.log(bb);

let options = { timeout: 0, title: "", verbose: false, n: null };
console.log(options.timeout ?? 1000); // => 0: as defined in the object
console.log(options.title ?? "Untitled"); // => "": as defined in the object
console.log(options.verbose ?? true); // => false: as defined in the object
console.log(options.quiet ?? false); // => false: property is not defined
console.log(options.n ?? 10); // => 10: property is null

console.log(options.timeout || 1000); // => 1000:
console.log(options.title || "Untitled"); // => Untitled
console.log(options.verbose || true); // => true
console.log(options.quiet || false); // => false
console.log(options.n || 10); // => 10

console.log((a ?? b) || c); // ?? first, then ||
console.log(a ?? (b || c)); // || first, then ??
// a ?? b || c // SyntaxError: parentheses are required

/**************************************
 * 4.13.3 The typeof Operator
 */

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof true);
console.log(typeof 12);
console.log(typeof NaN);
console.log(typeof 1n);
console.log(typeof "OK");
console.log(typeof Symbol(2));
console.log(typeof function () {});
console.log(typeof {});

/**************************************
 * 4.13.4 The delete Operator
 */
let o = { x: 1, y: 2 }; // Start with an object
delete o.x; // Delete one of its properties
console.log(o.x); // => false: the property does not exist anymore
console.log(o.x in o);
console.log(o);
let a = [1, 2, 3]; // Start with an array
delete a[2]; // Delete the last element of the array
console.log(2 in a); // => false: array element 2 doesn't exist anymore
console.log(a.length); // => 3: note that array length doesn't change, though
console.log(a);
console.log(a[2]);

let oo = { x: 1, y: 2 };
console.log(delete oo.x); // Delete one of the object properties; returns true.
console.log(typeof oo.x); // Property does not exist; returns "undefined".
console.log(delete oo.x); // Delete a nonexistent property; returns true.
console.log(delete 1); // This makes no sense, but it just returns true.
// Can't delete a variable; returns false, or SyntaxError in strict mode.
console.log(delete oo);
// Undeletable property: returns false, or TypeError in strict mode.
console.log(delete Object.prototype);

/**************************************
 * 4.13.6 The void Operator
 */

let counter = 0;
const increment = () => void counter++;
console.log(increment()); // => undefined
console.log(counter); // => 1

void (function test() {
  console.log("boo!");
  // expected output: "boo!"
})();

try {
  test();
} catch (e) {
  console.log(e);
  // expected output: ReferenceError: test is not defined
}

/**************************************
 * 44.13.7 The comma Operator (,)
 */

let i = 0,
  j = 1,
  k = 2;
console.log(i, j, k);

let x = 1;

x = (x++, ++x);

console.log(x);
// expected output: 2

x = (2, 3);

console.log(x);
// expected output: 3
// The first comma below is part of the syntax of the let statement
// The second comma is the comma operator: it lets us squeeze 2
// expressions (i++ and j--) into a statement (the for loop) that expects 1.
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i + j);
}
