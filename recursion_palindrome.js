function isPalindrome(arr, first, last) {
    if (first === last || first === last - 1) {
        return arr[first] === arr[last];
    }
    
    return isPalindrome(arr, first + 1, last - 1) && arr[first] === arr[last];
}