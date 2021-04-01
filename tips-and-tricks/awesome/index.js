// Filter Unique Values
const array = [1, 2, 3, 1, 2, 3, 1, 2, 3];

const uniqueArray = [...new Set(array)];

console.log(uniqueArray);

//  Array Methods: Every & Some
const nums = [1, 30, 39, 29, 10, 13];
console.log(nums.every((num, i, arr) => num < 40));
console.log(nums.some((num, i, arr) => num < 5));