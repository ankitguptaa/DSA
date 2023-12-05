function powerOptimized(x, n) {
    if (n === 0) {
        return 1;
    }

    if (n % 2 === 0) {
        return power(x,n/2) * power(x, n/2);
    } else {
        return x * power(x, n - 1);
    }
}

function power(x, n) {
 
}

console.log(powerOptimized(3,4))