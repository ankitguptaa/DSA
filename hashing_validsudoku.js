/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set = new Set();

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            let cell = board[i][j]
            if(cell === '.') continue;
            const row = `row: ${i}, value: ${cell}`
            const column = `column: ${j}, value: ${cell}`
            const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            const box = `boxNumber: ${boxNumber}, value: ${cell}`
            if(set.has(row) || set.has(column) || set.has(box)) return false
            set.add(row);
            set.add(column);
            set.add(box);
        }
    }
    return true
};