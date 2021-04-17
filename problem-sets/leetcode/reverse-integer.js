/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let numArr = x.toString().split("");
    const isLess = x < 0;
    if (isLess) {
        numArr = numArr.slice(1);
    }
    let numReverse = isLess ? -numArr.reverse().join("") : +numArr.reverse().join("");

    if ((-2) ** 31 <= numReverse && numReverse < 2 ** 31 - 1) {
        return numReverse;
    }
    return 0;
};

console.log(reverse(-123));
