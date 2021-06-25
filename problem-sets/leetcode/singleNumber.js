/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let duplicate = {};
    for (let i = 0; i < nums.length; i++) {
        const currItem = nums[i];
        if (duplicate[currItem] === 0 || duplicate[currItem]) {
            delete duplicate[currItem];
        } else {
            duplicate[currItem] = currItem;
        }
    }
    return Object.values(duplicate)[0];
    // best solution
    // var singleNumber = function (nums) {
    //     return nums.reduce((prev, curr) => prev ^ curr); // XOR
    // };
};

console.log(singleNumber([4, 1, 2, 1, 2]));
