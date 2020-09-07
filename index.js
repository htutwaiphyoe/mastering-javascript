/*****************************
 * 5.6 Miscellaneous Statements
 */

/*****************************
 * 5.6.1 with
 */
let person = {
  name: {},
  address: {},
  email: {},
};
with (person) {
  // Access form elements directly here. For example:
  name.value = "";
  address.value = "";
  email.value = "";
  let a = "IK"; // this is oridinay variable
  console.log(a);
}

console.log(person);

let person2 = {
  name: {},
  address: {},
  email: {},
};
person2.name.value = "";
person2.address.value = "";
person2.email.value = "";
console.log(person2);

/*****************************
 * 5.6.2 debugger
 */

function f(o) {
  if (o === undefined) debugger;
  // Temporary line for debugging purposes
  else console.log(o);
}

// f(); this will open browser debugger
