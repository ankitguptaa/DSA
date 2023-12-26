function indicesRecursive(arr, target, index) {
    if(index >= arr.length) {
        return [];
    }

    if(arr[index] === target) {
        return [index] + indicesRecursive(arr, target, index+1);
    } else {
        return indicesRecursive(arr, target, index+1);
    }
}

function indicesMain(arr, target) {
let output = indicesRecursive(arr, target, 0);
return [...output];
}

let result = indicesMain([1,2,3,2,4,2,5], 2);
console.log(result); // [1, 3, 5]
result = indicesMain([3,2,5,4,2,2,1], 2);
console.log(result); //[1, 4, 5]
result = indicesMain([1,1,1,1,1], 1);
console.log(result); //[0, 1, 2, 3, 4]
result = indicesMain([4,5,6,7,8], 9);
console.log(result); //[]