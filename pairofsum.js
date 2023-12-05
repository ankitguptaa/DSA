function findSumPairs(arr, targetSum) {
    let sumArrays = [];
    let right;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum && i !== j && right !== arr[j]) {
                right = arr[j];
                sumArrays.push([arr[i], arr[j]]);
            }
        }
    }

    return sumArrays;
}

function findSumPairs(arr, targetSum) {
    let map = new Map();
    let result= [];
    for (let index = 0; index < arr.length; index++) {
        let compliment = targetSum - arr[index];
        if(map.has(compliment)) {
            result.push([compliment, arr[index]]);
        } else {
            map.set(arr[index], index);
        }        
    }

    return result.reverse();
}

console.log(findSumPairs([2,4,6,8,10], 12));