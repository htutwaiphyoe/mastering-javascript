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
