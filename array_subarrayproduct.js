function isSubarraySumZero(arr, k) {
    let arrcount = 0;
    const lengthOfArray = arr.length;
    const prefixSum = new Array(lengthOfArray);
    // creating prefix sum
    prefixSum[0] = arr[0];
    for (let i = 1; i < lengthOfArray; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    const prefixSumSet = new Set();
    for (let i = 0; i < lengthOfArray; i++) {
        if (prefixSumSet.has(prefixSum[i]) || prefixSum[i] === k) {
            arrcount++;
        }
        prefixSumSet.add(prefixSum[i]);
    }

    return arrcount;
}

//Max product of a Subarray

console.log(isSubarraySumZero([10, 2, -2, -20, 10], -10));

// Given an array, count the no of subarrays with sum equals to K.

// Input: [10,2,-2,-20,10], K= -10
// Output: 3