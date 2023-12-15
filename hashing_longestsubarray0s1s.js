/**
 * Write a function that takes an array of 0s and 1s as input and finds the length of the
 * longest subarray that contains an equal number of 0s and 1s.
 * @param {number[]} arr
 * @return {number}
 */
function findLongestSubarray(arr) {
    let map = new Map();
    let largest = 0;
    map.set(0, -1);
    let sum = 0;
    for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
        if (arr[currentIndex] === 0) {
            sum += -1;
        } else {
            sum += 1;
        }
        
        if(map.has(sum)) {
            let lastIndex = map.get(sum);
            let length = currentIndex - lastIndex;
            if(length > largest) {
                largest = length;
            }
        } else {
            map.set(sum, currentIndex);
        }
    }

    return largest;
}

let result = 0;

result = findLongestSubarray([0, 1, 0, 1, 1, 0, 0]);
console.log(result) // 6

result = findLongestSubarray([1, 0, 1, 0, 1, 0, 1]);
console.log(result) // 6

result = findLongestSubarray([0, 0, 0, 0, 0, 0]);
console.log(result) // 0

result = findLongestSubarray([1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]);
console.log(result) // 8