/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    nums1.push(...nums2);
    // nums1.splice(m, n, ...nums2); About 3 lines of code is equal to this code
    nums1.sort((a, b) => a - b);
    console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
