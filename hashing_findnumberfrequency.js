function findNumberFrequency(arr) {
    const frequencyMap = new Map();
  
    for (const num of arr) {
      if (frequencyMap.has(num)) {
        frequencyMap.set(num, frequencyMap.get(num) + 1);
      } else {
        frequencyMap.set(num, 1);
      }
    }
  
    return Object.fromEntries(frequencyMap);
  }
  
  const arr = [4, 2, 8, 3, 3, 4, 8, 9, 4, 2, 6, 7, 8, 6, 9];
  const frequencyObj = findNumberFrequency(arr);
  console.log(frequencyObj);