/**
   * @param {string} str
   * @return {string}
   */
function firstNonRepeatingElement(str) {
    let map = new Map();
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    }

    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (map.get(element) === 1) {
            return element;
        }
    }

    return null;
}

console.log(firstNonRepeatingElement('abbcadef'));
console.log(firstNonRepeatingElement('aabbccdd'));
console.log(firstNonRepeatingElement('abcdefg'));
console.log(firstNonRepeatingElement('aaaabbbbccccddd'));
