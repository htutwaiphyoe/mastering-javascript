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
    let tracker = [];
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (pairs[curr]) tracker.push(curr);
        else {
            if (!tracker.length) return false;
            if (pairs[tracker.pop()] !== curr) return false;
        }
    }
    return tracker.length === 0;
};

console.log(isValid("}}"));
