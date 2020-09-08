/**********************************
 * 5.7 Declarations
 */

/*****************************
 * 5.7.1 const, let, and var
 */
const TAU = 2 * Math.PI;
let radius = 3;
var circumference = TAU * radius;

/*****************************
 * 5.7.2 function
 */

console.log(area(10)); // HOISTED
function area(radius) {
  return Math.PI * radius * radius;
}
/*****************************
 * 5.7.3 class
 */

/*****************************
 * 5.7.4 import and export
 */
