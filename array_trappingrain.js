function trapRainWater(heights) {
    let maximumRainWater = 0;
    for (let i = 1; i < heights.length - 1; i++) {
        // Find maximum element on its left 
        let left = heights[i];
        for (let j = 0; j < i; j++) {
            left = Math.max(left, heights[j]);
        }

        // Find maximum element on its right 
        let right = heights[i];
        for (let j = i + 1; j < heights.length; j++) {
            right = Math.max(right, heights[j]);
        }

        // Update maximum water value 
        maximumRainWater += Math.min(left, right) - heights[i];
    }
    return maximumRainWater;
}

// Method for maximum amount of water 
function findWater(heights) {
    // left[i] contains height of tallest bar to the 
    // left of i'th bar including itself 
    let left = new Array(heights.length);

    // Right [i] contains height of tallest bar to 
    // the right of ith bar including itself 
    let right = new Array(heights.length);

    // Initialize result 
    let water = 0;

    // Fill left array 
    left[0] = heights[0];
    for (let i = 1; i < heights.length; i++)
        left[i] = Math.max(left[i - 1], heights[i]);

    // Fill right array 
    right[heights.length - 1] = heights[heights.length - 1];
    for (let i = heights.length - 2; i >= 0; i--)
        right[i] = Math.max(right[i + 1], heights[i]);

    // Calculate the accumulated water element by element 
    // consider the amount of water on i'th bar, the 
    // amount of water accumulated on this particular 
    // bar will be equal to min(left[i], right[i]) - arr[i] . 
    for (let i = 0; i < heights.length; i++)
        water += Math.min(left[i], right[i]) - heights[i];

    return water;
}
//using stack
var trap = function (height) {
    const stack = [];
    let res = 0;
    for (let i = 0; i < height.length; i++) {
        // it is > not >= so we dont have to do it one by one;
        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (stack.length === 0) {
                break;  // means no left wall;
            }      // min of  right wall and left wall
                    // width is distance between right wall and left wall;
            res += (Math.min(height[i], height[stack[stack.length - 1]]) - height[top]) * (i - stack[stack.length - 1] - 1);
            
        }
        stack.push(i);
    }
    return res;
}

let result = trapRainWater([0, 1, 0, 2, 0])
console.log(result) //1
result = trapRainWater([3, 0, 0, 2, 0, 4])
console.log(result) //10
result = trapRainWater([4, 2, 0, 3])
console.log(result) //3
result = trapRainWater([0, 1, 0, 3, 0, 2, 0])
console.log(result) //4

result = findWater([0, 1, 0, 2, 0])
console.log(result) //1
result = findWater([3, 0, 0, 2, 0, 4])
console.log(result) //10
result = findWater([4, 2, 0, 3])
console.log(result) //3
result = findWater([0, 1, 0, 3, 0, 2, 0])
console.log(result) //4