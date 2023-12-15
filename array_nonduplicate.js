/**
 * @param {number[]} arr
 * @return {number}
 */
function findNonDuplicateElement(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        let index = unique.indexOf(arr[i]);
        if (index !== -1) {
            unique.splice(index, 1);
        } else {
            unique.push(arr[i]);
        }
    }

    return unique[0];
}

let arr = [1, 1, 2, 2, 3, 4, 4];
console.log(findNonDuplicateElement(arr));
