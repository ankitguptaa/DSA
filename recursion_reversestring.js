function reverseString(str, n) {
    if(n < 0) {
        return "";
    }

    return str[n-1] + reverseString(str,n-1);
}

console.log(reverseString("ankit", 5));