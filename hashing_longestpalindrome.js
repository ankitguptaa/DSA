const reverse = function(s) {
    let reverse = "";
    for (let index = s.length -1; index >=0; index--) {
        reverse += s[index];
    }

    return reverse;
}

function longestPalindromicSubstring(s) {
    if(s.length === 0) {
        return s;
    }

    let maxSubstring = "";

    for (let i = 0; i < s.length; i++) {
        let substr="";
        for (let j = i; j < s.length; j++) {
            substr += s[j];
            if(substr === reverse(substr) && substr.length > maxSubstring.length) {
                maxSubstring = substr;
            }
        }
    }
    
    return maxSubstring;
}

let result, s;
s = "babad";
result = longestPalindromicSubstring(s);
console.log(result);

s = "cbbd";
result = longestPalindromicSubstring(s);
console.log(result);
