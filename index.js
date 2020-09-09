/************************************
 * 6.1 Introduction to Objects
 */

const obj = {
  one: 1,
  one: "1", // no error but overwrite
};
console.log(obj);

/************************************
 * 6.2 Creating Objects
 */

// There is three types for creating objects
// 1. Object Literals ( {} )
// 2. New Keyward  ( new ... )
// 3. Object.create() function

/************************************
 * 6.2.1 Object Literals
 */
let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; // Two numeric properties
let p2 = { x: point.x, y: point.y + 1 }; // More complex values
let book = {
  "main title": "JavaScript", // These property names include spaces,
  "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
  for: "all audiences", // for is reserved, but no quotes.
  author: {
    // The value of this property is
    firstname: "David", // itself an object.
    surname: "Flanagan",
  },
};

console.log(empty, point, p2, book);

/************************************
 * 6.2.2 Creating Objects with new
 */

let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Create a Map object for key/value mapp

/************************************
 * 6.2.3 Prototypes
 */

let arr = new Array(); // this object inherits from Array.prototype and Object.prototype called prototype chain
console.log(arr);

/************************************
 * 6.2.4 Object.create()
 */

let o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x and y.
console.log(o1);
console.log(o1.x + o1.y); // => 3

let o2 = Object.create(null); // o2 inherits no props or methods.
console.log(o2);

let o3 = Object.create(Object.prototype); // o3 is like {} or new Object().
console.log(o3);

let o4 = Object.create(
  { x: 1 },
  {
    y: { value: 2 },
  }
);
console.log(o4);

let o5 = { x: "don't change this value" }; // like spread operator
// library.function(Object.create(o)); // Guard against accidental modifications
