var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    const frequencyMap = new Map();

    for (let index = 0; index < s.length; index++) {
        if(frequencyMap.has(s[index])) {
            frequencyMap.set(s[index], frequencyMap.get(s[index])+1);
        } else {
            frequencyMap.set(s[index], 1);
        }
    }

    for (let index = 0; index < t.length; index++) {
        if(frequencyMap.has(t[index])) {
            frequencyMap.set(t[index], frequencyMap.get(t[index])-1);
        } else {
            return false;
        }
    }

    for(const value of frequencyMap.values()) {
        if(value !== 0) return false;
    }

    return true;
};
