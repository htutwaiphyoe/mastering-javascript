/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let triangle = [];
    for (let i = 0; i < numRows; ++i) {
        const currRow = [];
        currRow[0] = currRow[i] = 1;
        for (let ii = 1; ii < i; ++ii) {
            currRow[ii] = triangle[i - 1][ii - 1] + triangle[i - 1][ii];
        }
        triangle[i] = currRow;
    }
    return triangle;
};

console.log(generate(4));
