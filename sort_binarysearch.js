// For binary Search to be execute, we expect a sorted array to be passed.
function binarySearch(arr, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let middle = Math.floor((end + start) / 2);
        if (arr[middle] < target) {
            start = middle + 1;
        } else if (arr[middle] > target) {
            end = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

let sortedArray = [2, 4, 5, 8, 9, 11, 16, 65, 69, 84, 103, 232, 333, 421, 467];
let elementToFind = 333;
console.log(binarySearch(sortedArray, elementToFind));
console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1