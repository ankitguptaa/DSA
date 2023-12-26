var findMaxForm = function (strs, m, n) {
    let i = 0;
    let max = strs.length;
    while (i < strs.length) {
        let zeroCount = count(strs[i], "0");
        let oneCount = count(strs[i], "1");
        if (zeroCount > m || oneCount > n) {
            max--;
        }

        i++;
    }

    return max;
};

function count(s, char) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(findMaxForm(["10","0001","111001","1","0"], 5, 3));