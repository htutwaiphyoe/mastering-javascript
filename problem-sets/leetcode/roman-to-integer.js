const ROMAN = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
};
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let val = 0;

    for (let i = 0; i < s.length; i++) {
        const key = `${s[i]}${s[i + 1]}`;

        if (ROMAN[key]) {
            val += ROMAN[key];
            i++;
            continue;
        }

        if (ROMAN[s[i]]) {
            val += ROMAN[s[i]];
        }
    }
    return val;
};

console.log(romanToInt("IV"));

//  let result = 0;
//  for (let i = 0; i < s.length; ++i) {
//      const cur = ROMAN[s[i]];
//      const next = ROMAN[s[i + 1]];
//      result = cur < next ? result - cur : result + cur;
//  }
//  return result;
