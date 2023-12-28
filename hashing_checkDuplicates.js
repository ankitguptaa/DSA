/**
 * @param {number[]} array
 * @return {boolean}
 */
function checkDuplicates(array) {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            return "There are duplicate elementsin the array.";
        } else {
            map.set(array[i], 1);
        }
    }

    return "There are no duplicate elements in the array.";
}

console.log(checkDuplicates([1,2,3,4,5,1]));
console.log(checkDuplicates([10,20,30,40,50]));
console.log(checkDuplicates([1,2,3,4,5,6,7,8,9,10,10]));
console.log(checkDuplicates([0,0,0,0,0]));