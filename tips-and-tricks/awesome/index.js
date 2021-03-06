// Filter Unique Values
const array = [1, 2, 3, 1, 2, 3, 1, 2, 3];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

//  Array Methods: Every & Some
const nums = [1, 30, 39, 29, 10, 13];
console.log(nums.every((num, i, arr) => num < 40));
console.log(nums.some((num, i, arr) => num < 5));

// Convert to Boolean
const isTrue = !"";
const isFalse = !"true";
const alsoTrue = !!"true";
console.log(isTrue, isFalse, alsoTrue);

// conditionally setting a variable
const user = {};
const photo = user.photo || "default.png";
console.log(photo);

// convert to String
const val = 1 + "";
console.log(val, typeof val);

// convert to Number
const num = +"2021";
console.log(num, typeof num);

// casting values in array
const values = ["1", "5", "18"];
console.log(values.map(Number));
console.log(values.map(Boolean));

// float to integer with bitwise operator
const f = 12.121212;
const i = ~~f;
console.log(i);

// get last item of array
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(-1));
console.log(arr.slice(-3));
