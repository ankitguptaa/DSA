/**
 * @param {string} s
 * @return {boolean}
 */

const reverse = function(s) {
    let reverse = "";
    for (let index = s.length -1; index >=0; index--) {
        reverse += s[index];
    }

    return reverse;
}
const isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    if(s.length === 0) {
        return true;
    }
    
    return s === reverse(s);
};




let s = "A man, a plan, a canal: Panama323"
let result = false;
result = isPalindrome(s);
console.log(result);

s = "race a car"
result = isPalindrome(s);
console.log(result);