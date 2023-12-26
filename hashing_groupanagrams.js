function groupAnagrams(strs) {
    const anagramMap = new Map();
  
    for (const str of strs) {
      const sortedStr = str.split("").sort().join("");
      
      if (anagramMap.has(sortedStr)) {
        anagramMap.get(sortedStr).push(str);
      } else {
        anagramMap.set(sortedStr, [str]);
      }
    }
  
    return Array.from(anagramMap.values());
  }
  
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const anagramGroups = groupAnagrams(strs);
  console.log(anagramGroups);