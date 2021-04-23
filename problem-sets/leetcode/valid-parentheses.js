/**
 * @param {string} s
 * @return {boolean}
 */
const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
};
const isValid = function (s) {
    const tracker = [];
    for (let c of s) {
        if (pairs[c]) tracker.push(pairs[c]);
        else {
            if (!tracker.length) return false;
            if (c !== tracker.pop()) return false;
        }
    }
    return tracker.length === 0;
};

console.log(isValid("()"));
