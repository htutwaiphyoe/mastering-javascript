/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // climb stairs steps are fibonnaci series
    let nums = [1, 1, 2, 3];
    for (let i = 4; i <= n; ++i) {
        nums.push(nums[i - 1] + nums[i - 2]);
    }
    return nums[n];
};

console.log(climbStairs(5));
