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
