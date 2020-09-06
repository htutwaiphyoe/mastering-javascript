/********************* Statements **********************/

/********************************
 * 5.1 Expression Statements
 */
let greeting,
  name = "HWP";
i = 1;
greeting = "Hello " + name;
i *= 3;
i++;

/********************************
 * 5.2 Compound and Empty Statements
 */
{
  let x = Math.PI;
  let cx = Math.cos(x);
  console.log("cos(π) = " + cx);
}

let a = [];
// Initialize an array a
for (let i = 0; i < a.length; a[i++] = 0);

let aa = 0,
  bb = 0;
if (aa === 0 || bb === 0); // Oops! This line does nothing...
o = null; // and this line is always executed.
console.log(o);

c = 1;
if (c) {
  console.log(c);
}

for (let i = 0; i < a.length; a[i++] = 0 /* empty */);

/********************************
 * 5.3.1 if
 */

let aaa;
if (!aaa) console.log("Single Statement");

if (!aaa) {
  aaa = "MultiStatement";
  console.log(aaa);
}
let bbb;
if (bbb) {
  console.log("If");
} else {
  console.log("else");
}

i = j = 1;
k = 2;
if (i === j)
  if (j === k) console.log("i equals k");
  else console.log("i doesn't equal j"); // WRONG!!

if (i === j) {
  if (j === k) console.log("i equals k");
  else console.log("i doesn't equal j"); // OOPS!
}

if (i === j) {
  if (j === k) {
    console.log("i equals k");
  }
} else {
  // What a difference the location of a curly brace makes!
  console.log("i doesn't equal j");
}

/********************************
 * 5.3.2 else if
 */
let n = 3;
if (n === 1) {
  console.log("ONE");
} else if (n === 2) {
  console.log("TWO");
} else if (n === 3) {
  console.log("THREE");
} else {
  console.log("GREATER THAN THREE");
}

if (n === 1) {
  console.log("ONE");
} else {
  if (n === 2) {
    console.log("TWO");
  } else {
    if (n === 3) {
      console.log("THREE");
    } else {
      console.log("GREATER THAN THREE");
    }
  }
}

/********************************
 * 5.3.3 switch
 */
let a = 1;

switch (a) {
  case 1:
    console.log("ONE");
    break;
  case 2:
    console.log("TWO");
    break;
  case 3:
    console.log("THREE");
    break;
  default:
    console.log("GREATER THAN THREE");
}

switch (a) {
  case 1:
    console.log("ONE");

  case 2:
    console.log("TWO");

  case 3:
    console.log("THREE");

  default:
    console.log("GREATER THAN THREE");
}

switch (a) {
  default:
    console.log("GREATER THAN THREE");

  case 1:
    console.log("ONE");
    break;

  case 2:
    console.log("TWO");
    break;

  case 3:
    console.log("THREE");
    break;
}

function convert(x) {
  switch (typeof x) {
    case "number": // Convert the number to a hexadecimal integer
      return x.toString(16);
    case "string": // Return the string enclosed in quotes
      return '"' + x + '"';
    default:
      // Convert any other type in the usual way
      return String(x);
  }
}

console.log(convert(4));

/********************************
 * 5.4.1 while
 */

let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

// Infinite while loop
// while(true) {
//   console.log("Infinity")
// }

/********************************
 * 5.4.2 do/while
 */

function printArray(a) {
  let len = a.length,
    i = 0;
  if (len === 0) {
    console.log("Empty Array");
  } else {
    do {
      console.log(a[i]);
    } while (++i < len);
  }
}
printArray([]);
printArray([100, 200]);

let count2 = 0;
do {
  console.log(count2);
  count2++;
} while (count2 < 5);

let count3 = 0;
do
  console.log(count3); // need semicolon
while (++count3 < 3); // need semicolon when loop body is not enclosed by curly braces

/********************************
 * 5.4.3 for
 */
for (let count = 0; count < 10; count++) {
  console.log(count);
}
let i,
  j,
  sum = 0;
for (i = 0, j = 10; i < 10; i++, j--) {
  sum += i * j;
}
console.log(sum);
function tail(o) {
  // Return the tail of linked list o
  for (; o.next; o = o.next /* empty */); // Traverse while o.next is truthy
  return o;
}
// Infinite for loop
// for(;;){
//   console.log("This is infinite loop")
// }

let iii;
for (iii = 0; iii > 0; iii++) {
  console.log("Loop execute");
}
console.log(iii);

/********************************
 * 5.4.4 for/of
 */

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum2 = 0;
for (let element of data) {
  sum2 += element; // each element, each iteration
}
console.log(sum2);

// Infinite for/of loop
// for(let el of data){
//   sum2 += el;
//   data.push(sum2);
// }

let data2 = [];
for (let el of data2) {
  console.log("OK"); // no element, no iteration
}

const x = ["JS", "Startup", "Like"];
console.log(x.filter((el) => el.size > 0));

// let o1 = { x: 1, y: 2, z: 3 };
// for(let element of o1) { // Throws TypeError because o is not iterable
// console.log(element);
// }

let o2 = { x: 1, y: 2, z: 3 };
let keys = "";
for (let k of Object.keys(o2)) {
  keys += k;
}
console.log(keys);

let sum3 = 0;
for (let v of Object.values(o2)) {
  sum3 += v;
}
console.log(sum3); // => 6

let pairs = "";
for (let [k, v] of Object.entries(o2)) {
  pairs += k + v;
}
console.log(pairs); // => "x1y2z3"

let frequency = {};
for (let letter of "mississippi") {
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
}
console.log(frequency);

let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let word of wordSet) {
  unique.push(word);
}
console.log(unique); // => ["Na", "na", "Batman!"]

let m = new Map();
m.set(1, "ONE");
m.set(2, "TWO");
for (let [key, value] of m) {
  console.log(key + ":" + value);
}

async function printStream(stream) {
  for await (let chunk of stream) {
    console.log(chunk);
  }
}
printStream("OK");

for (let p in o2) {
  // Assign property names of o to variable p
  console.log(p + ":" + o2[p]); // Print the value of each property
}

for (const property in null) {
  console.log("This won't work");
}

// for (const property of null) { //Error
//   console.log("This");
// }

let a = [],
  i2 = 0;
for (a[i2++] in o2) {
  console.log(a);
}
console.log(i2); //3

let a5 = ["ZERO", "ONE", "TWO"];
for (let i in a) console.log(i + ":" + a5[i]);

/*******************
 *  5.5 Jumps
 */
//break,continue,return,throw
/*******************
 *  5.5.1 Labeled Statements
 */

// const token = "asdf";
// mainloop: while (token !== null) {
//   // Code omitted...
//   continue mainloop; // Jump to the next iteration of the named loop
//   // More code omitted...
// }

/*******************
 *  5.5.2 break
 */
const a = [1, 2, 3];
const target = 3;
for (let i = 0; i < a.length; i++) {
  if (a[i] === target) break;
  else console.log(a[i]);
}
let matrix = [
  [1, 2],
  [3, 4],
]; // Get a 2D array of numbers from somewhere
// Now sum all the numbers in the matrix.
let sum = 0,
  success = false;
// Start with a labeled statement that we can break out of if errors occur
computeSum: if (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    let row = matrix[x];
    if (!row) break computeSum;
    for (let y = 0; y < row.length; y++) {
      let cell = row[y];
      if (isNaN(cell)) break computeSum;
      sum += cell;
    }
  }
  success = true;
}

console.log(sum, success);

x: function name() {
  // break; illegal break statement
  console.log("ok");
}
name();

/*******************
 *  5.5.3 continue
 */

// continue; Error continue can be used in loop body
let data = [1, 2, 3, 4],
  total = 0;
for (let i = 0; i < data.length; i++) {
  if (!data[i]) continue; // Can't proceed with undefined data
  total += data[i];
}
console.log(total);

for (let i of data) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
/*******************
 *  5.5.4 return
 */
// return 1;

function add(a, b) {
  return a + b;
}
console.log(add(2, []));

function show(a) {
  if (!a) return -1;
  console.log(a); // This part is not executed if a is undefined
}
console.log(show());

/*******************
 *  5.5.5 yield
 */
// A generator function that yields a range of integers
function* range(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}

range(0, 10);

/*****************************
 * 5.5.6 throw
 */

function factorial(x) {
  // If the input argument is invalid, throw an exception!
  if (x < 0) throw new Error("x must not be negative");
  // Otherwise, compute a value and return normally
  let f;
  for (f = 1; x > 1; f *= x, x-- /* empty */);
  return f;
}
console.log(factorial(4)); // => 24
