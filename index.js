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

// There also are generator functions and asynchronous functions
/*****************************
 * 5.7.3 class
 */

class Circle {
  constructor(radius) {
    this.r = radius;
  }
  area() {
    return Math.PI * this.r * this.r;
  }
  circumference() {
    return 2 * Math.PI * this.r;
  }
}
const circle = new Circle(10);
console.log(circle.area());
console.log(circle.circumference());
/*****************************
 * 5.7.4 import and export
 */

import Circle from "./geometry/circle.js";
import { PI, TAU } from "./geometry/constants.js";
import { magnitude as hypotenuse } from "./vectors/utils.js";
// geometry/constants.js
const PI = Math.PI;
const TAU = 2 * PI;
export { PI, TAU };
export const TAU = 2 * Math.PI;
export function magnitude(x, y) {
  return Math.sqrt(x * x + y * y);
}
export default class Circle {
  /* class definition omitted here */
}
