function maxProductSubarray(elements) {
    let res = elements[0];
    let currMax = 1, currMin = 1;
    for (let n of elements) {
        let tmpMax = currMax;
        currMax = Math.max(n * currMax, n * currMin, n);
        currMin = Math.min(n * tmpMax, n * currMin, n);
        res = Math.max(res, currMax);
    }
    return res;
}