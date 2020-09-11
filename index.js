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
