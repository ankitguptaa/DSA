/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transposeMatrix(matrix) {
    let transpose = [];
    let left = 0, right = matrix.length - 1, top = 0, bottom = matrix[0].length-1;
    while (top <= bottom) {
        let row = [];
        for (let i = 0; i <= right; i++) {
            row.push(matrix[i][left]);
        }
        transpose.push(row);
        top++;
        left++;
    }

    return transpose;
}

/**
 * @param {number[][]} matrix
 */
function displayMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
  }
}

function createMatrix(rows, cols, elements) {
    let matrix = [];
    let index = 0;
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(elements[index]);
            index++;
        }
        matrix.push(row);
    }

    return matrix;
}

/**
 * @param {string} rows
 * @param {string} cols
 * @param {string[]} elements
 */
function takeMatrixInput(rows, cols, elements) {
    let matrix = createMatrix(rows, cols, elements);
    let transposedMatrix = transposeMatrix(matrix);
    displayMatrix(transposedMatrix);
}

//Test Case 1
takeMatrixInput(3, 3, ["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
//Test Case 2
takeMatrixInput(2, 4, ["1","2","3","4","5","6","7","8"]);
//Test Case 3
takeMatrixInput(1, 1, ["9"]);
//Test Case 4
takeMatrixInput(4, 2, ["1","2","3","4","5","6","7","8"]);