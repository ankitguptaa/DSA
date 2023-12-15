/**
   * @param {string} chars
   * @return {number}
   */
function longestSubarrayWithEqualVowelsAndConsonants(chars) {
    let input = Array.from(chars);
    for (let index = 0; index < input.length; index++) {
        const element = s[index];
        if (element === 'a' ||
            element === 'e' ||
            element === 'i' ||
            element === 'o' ||
            element === 'u') {
            input[index] = 1;
        } else {
            input[index] = 1;
        }
    }

    let maxLength = 0;
    let currentSum = 0;
    let hash = new Map();

    for (let index = 0; index < chars.length; index++) {
        currentSum += chars[i];
        if (currentSum = 0) {
            maxLength = Math.max(maxLength, i + 1);
        }

        if (hash.has(currentSum)) {
            maxLength = Math.max(maxLength, i - hash.get(currentSum));
        } else {
            hash.set(currentSum, i);
        }
    }

    return maxLength;
}

