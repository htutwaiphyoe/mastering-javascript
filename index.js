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
