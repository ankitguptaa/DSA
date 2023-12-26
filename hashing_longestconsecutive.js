/**
 * @param {number[]} arr
 * @return {number}
 */
var longestConsecutive = function (arr) {
    if(arr.length === 0) return 0;
    let count = 1, maxCount=1;
    let sortedArray = arr.sort(function(a, b){return a-b});
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] - sortedArray[i-1] === 1) {
            count++;
            maxCount = Math.max(count, maxCount);
        } else if(sortedArray[i] === sortedArray[i-1]) {
            continue;
        } else {
            count = 1;
        }
    }

    return maxCount;
};

let result = 0;
result = longestConsecutive([10,5,7,3,4,8,9])
console.log(result); //4