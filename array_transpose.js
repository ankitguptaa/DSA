/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let transpose = [];
    let left = 0, right = matrix.length - 1, top = 0, bottom = matrix[0].length;
    while (top < bottom) {
        // left to right
        let row = [];
        for (let i = 0; i <= right; i++) {
            row.push(matrix[i][left]);
        }
        transpose.push(row);
        top++;
        left++;
    }

    return transpose;
};
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let result = transpose(matrix);
console.log(result);
