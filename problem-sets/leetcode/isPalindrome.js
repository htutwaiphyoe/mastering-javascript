/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    const forward = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reverse = forward.split("").reverse().join("");
    return forward === reverse;
};

console.log(isPalindrome("race a car"));
