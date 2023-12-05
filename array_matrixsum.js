/**
 * @param {number} rows
 * @param {number} cols
 * @param {number[][]} array1
 * @param {number[][]} array2
 * @return {number[][]}
 */
function sumOfTwoMatrices(rows, cols, array1, array2) {
    if (rows * cols !== array1.length ||
        rows * cols !== array2.length
    ) {
        return "Arrays must have the same dimensions.";
    }
    let row =0;col= 0;
    let result = new Array();
    let line = [];
    for (let i = 0; i < rows * cols; i++) {
        line.push(array1[i] + array2[i]);
        if(col === cols - 1) {
            result.push(line);
            line = [];
            row++;
            col = 0;
        } else {
            col++;
        }
    }

    return result;
}

// Test Case 1
let result = sumOfTwoMatrices(2, 3, [1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]);
console.log(result);
//[[8,10,12],[14,16,18]]

// Test Case 2
result = sumOfTwoMatrices(2, 2, [1, 2, 3, 4], [5, 6, 7, 8]);
console.log(result);
//[[6,8],[10,12]]
// Test Case 3
result = sumOfTwoMatrices(3, 2, [1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]);
console.log(result);
//[[8,10],[12,14],[16,18]]

// Test Case 4
result = sumOfTwoMatrices(3, 3, [3, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 2, 10, 11, 12, 13]);
console.log(result);
//Arrays must have the same dimensions.