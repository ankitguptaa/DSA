function powerSetRecursive(nums, index, subset, powerSet) {
    if(nums.length === index) {
        powerSet.push(subset);
        return;
    }

    powerSetRecursive(nums, index + 1, subset + nums[index], powerSet);
    powerSetRecursive(nums, index + 1, subset, powerSet);

    return powerSet;
}

function powerSetMain(nums) {
    return powerSetRecursive(nums, 0, [], []).join(",");
}

console.log(powerSetMain([1,2,3]));
console.log(powerSetMain([1,2]));
console.log(powerSetMain([7,8,9,10]));
console.log(powerSetMain([4,7,1,9]));