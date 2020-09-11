/************************* CHAPTER 6 - OBJECTS ***************************/

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
// console.log(o2 + "12"); error this object no toString() mehtod
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

/************************************
 * 6.3 Querying and Setting Properties
 */
const book = {
  author: "HWP",
  "main title": "The Definitive Guide",
  name: "Htut Wai Phyoe",
};
let author = book.author; // Get the "author" property of the book.
let name = book.name; // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.
console.log(author, name, title);
book.edition = 7; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Change the "main title" property.
console.log(book);

book[1] = "One";
book[Symbol(2)] = "Two";
console.log(book);

/************************************
 * 6.3.1 Objects As Associative Arrays
 */
const customer = {
  address0: "0",
  address1: "1",
  address2: "2",
  address3: "3",
};

let addr = "";
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + "\n";
}
console.log(addr);

const portfolio = {};
function addstock(portfolio, stockname, shares) {
  portfolio[stockname] = shares;
}

addstock(portfolio, "idm", 50);
addstock(portfolio, "mmlink", 100);
addstock(portfolio, "aya", 150);
function computeValue(portfolio) {
  let total = 0.0;
  for (let stock in portfolio) {
    // For each stock in the portfolio:
    let shares = portfolio[stock]; // get the number of shares
    total += shares * 1000; // add stock value to total value
  }
  return total; // Return total value.
}

console.log(computeValue(portfolio));

/************************************
 * 6.3.2 Inheritance
 */

let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ...Object.prototype and has an own property z.
let f = q.toString(); // toString is inherited from Object.prototype
console.log(f); // object Object
console.log(q.z + q.x + q.y); // 6

o.x = 10;

p.x = 20;
console.log(o.x);
console.log(p.x);

let unitcircle = { r: 1 }; // An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1;
c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property
console.log(unitcircle.r); // => 1: the prototype is not affected
unitcircle.r = 3;
console.log(unitcircle.r, c.r);

/************************************
 * 6.3.3 Property Access Errors
 */

let obj = {};
console.log(obj.x);
// console.log(obj.x.length); Error
let l;
if (obj) {
  if (obj.x) {
    l = obj.x.length;
  }
}
console.log(l);

l = obj && obj.x && obj.x.length;
console.log(l);

l = obj?.x?.length;
console.log(l);

// obj.x.k = 1; Error

/************************************
 * 6.4 Deleting Properties
 */

const obj = { x: 1, y: 2, z: 3 };
delete obj.x;
delete obj["y"];
console.log(obj); // z: 3

const obj2 = { x: 1 };
const obj3 = Object.create(obj2);

delete obj3.x;
console.log(obj3); // does not affect on inherited properties

let o = { x: 1 }; // o has own property x and inherits property toString
console.log(delete o.x); // => true: deletes property x
console.log(delete o.x); // => true: does nothing (x doesn't exist) but true anyway
console.log(delete o.toString); // => true: does nothing (toString isn't an own property)
console.log(delete 1); // => true: nonsense, but true anyway

// In strict mode, all these deletions throw TypeError instead of returning false
console.log(delete Object.prototype); // => false: property is non-configurable
var x = 1; // Declare a global variable
console.log(delete globalThis.x); // => false: can't delete this property
function f() {} // Declare a global function
console.log(delete globalThis.f); // => false: can't delete this property either

globalThis.x = 1; // Create a configurable global property (no let or var)
console.log(delete x); // => true: this property can be deleted

delete x; // SyntaxError in strict mode
delete globalThis.x; // This works
