/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var power = function (x, n) {
    if (n === 0) { return 1; }

    if(n < 0){
        return 1/x * power(x, n + 1)    
    } else 
    return x * power(x, n - 1)
};

let x = 2.00000, n = 10;
console.log(power(x, n));
x = 2.10000, n = 3;
console.log(power(x, n));
x = 2.00000, n = -2;
console.log(power(x, n));