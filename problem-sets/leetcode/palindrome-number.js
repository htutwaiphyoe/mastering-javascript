/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) return false;
    return `${x}` === x.toString().split("").reverse().join("");
};

console.log(isPalindrome(10));
