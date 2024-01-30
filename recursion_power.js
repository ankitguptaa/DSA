/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var power = function (x, n) {
    if (n === 0) { return 1; }

    if (n < 0) {
        return 1 / x * power(x, n + 1)
    } else
        return x * power(x, n - 1)
};

let x = 2.00000, n = 10;
console.log(power(x, n));
x = 2.10000, n = 3;
console.log(power(x, n));
x = 2.00000, n = -2;
console.log(power(x, n));

/**
 * @param {number} x
 * @param {number} p
 * @return {number}
 */
function exponentiation(x, p) {
    if (p === 0) {
        return 1;
    }

    if (p > 0) {
        return x * exponentiation(x, p - 1);
    } else {
        return parseFloat(1 / x * exponentiation(x, p + 1)).toFixed(2);
    }

}

console.log(exponentiation(2, 3));
console.log(exponentiation(5, 0));
console.log(exponentiation(10, -2));
console.log(exponentiation(-3, 4));