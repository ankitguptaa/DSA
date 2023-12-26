function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

function longestSubarrayWithEqualVowelsAndConsonants(chars) {
    let maxLength = 0, vowelCount =0, consonantCount =0;
    let countMap = new Map();
    countMap.set(0, -1);
    for (let index = 0; index < chars.length; index++) {
        if(isVowel(chars[index])) {
            vowelCount++;
        } else {
            consonantCount++;
        }
        
        let difference = vowelCount - consonantCount;
        if(countMap.has(difference)) {
            maxLength = Math.max(maxLength, index - countMap.get(difference));
        } else {
            countMap.set(difference, index);
        }
    }

    return maxLength;
}