function sumArray(arr, n) {
    if(n===0) {
        return arr[0];
    } else {
        sumArray(arr, n-1) + arr[n];
    }
}