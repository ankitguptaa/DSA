/**
 * @param {string} str
 * @return {string}
 */
function findFirstNonRepeatingCharacter(str) {
    let map = new Map();
    for(let i=0;i<str.length;i++) {
        if(map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1);
        } else {
            map.set(str[i], 1);
        }
    }

    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (map.get(element) > 1) {
            return element;
        }
    }

    return null;
}

console.log(findFirstNonRepeatingCharacter("abccba"));
console.log(findFirstNonRepeatingCharacter("abcdabcd"));
console.log(findFirstNonRepeatingCharacter("aabbccd"));
console.log(findFirstNonRepeatingCharacter("abcdefg"));
