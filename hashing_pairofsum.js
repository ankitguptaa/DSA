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