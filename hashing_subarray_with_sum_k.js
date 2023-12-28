function hasSubarrayWithSumKBruteForce(arr, K) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            if (sum === K) {
                return true;
            }
        }
    }

    return false;
}

function findAllSubarraysWithGivenSum(nums, k) {
    const map = new Map();
    let prefixSum = 0, count = 0;
    map.set(0, 1);

    for (let index = 0; index < nums.length; index++) {
        prefixSum += nums[index];
        const remove = prefixSum - k;
        if (map.has(remove)) {
            count += map.get(remove);
        }

        if (!map.has(prefixSum)) {
            map.set(prefixSum, 1);
        } else {
            map.set(prefixSum, map.get(prefixSum) + 1);
        }
    }
    return count;
}

const arr = [3, 1, 2, 4];
const k = 6;
const cnt = findAllSubarraysWithGivenSum(arr, k);
console.log("The number of subarrays is: " + cnt);

