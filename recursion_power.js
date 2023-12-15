function powerOptimized(x, n) {
    if (n === 0) {
        return 1;
    }

        return x * power(x, n-1);
}

console.log(powerOptimized(3,4))