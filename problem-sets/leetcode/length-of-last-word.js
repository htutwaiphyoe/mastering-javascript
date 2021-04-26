/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    return s.trimEnd().split(" ").slice(-1)[0].length;
};

console.log(lengthOfLastWord("b  a     "));
