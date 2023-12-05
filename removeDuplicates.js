var removeDuplicates = function(nums) {
    let map = new Map();
    for(let i=nums.length-1;i>=0;i--) {
        if(map.has(nums[i])) {
            nums.splice(i, 1);
        } else {
            map.set(nums[i], i);
        }
    }

    return nums;
};

console.log(removeDuplicates([1,1,2]));
