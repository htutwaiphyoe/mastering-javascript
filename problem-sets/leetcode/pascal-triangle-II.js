/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let triangle = [];
    for (let i = 0; i <= rowIndex; ++i) {
        let currentRow = [];
        currentRow[0] = currentRow[i] = 1;
        for (let ii = 1; ii < i; ++ii) {
            currentRow[ii] = triangle[i - 1][ii - 1] + triangle[i - 1][ii];
        }
        triangle.push(currentRow);
    }
    return triangle[rowIndex];
};

console.log(getRow(2));
