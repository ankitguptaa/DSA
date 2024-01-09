/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfFour(n) {
    if(n === 1){
        return true;
    }

    if(n==0){
        return false;
    }

    if(n % 2 !== 0) {
        return false;
    } else {
        return isPowerOfFour(n/2);
    }  
};

console.log(isPowerOfFour(16));