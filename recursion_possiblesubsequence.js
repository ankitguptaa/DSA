function subsequenceRecursive(str, index, current = '', subsequences = []) {
  if (index === str.length) {
    subsequences.push(current);
    return;
  }

  // Include the current character
  subsequenceRecursive(str, index + 1, current + str[index], subsequences);

  // Exclude the current character
  subsequenceRecursive(str, index + 1, current, subsequences);

  return subsequences;
}

function subsequenceMain(str) {
  return subsequenceRecursive(str, 0);
}

const inputString = "abc";
const subsequences = subsequenceMain(inputString);
console.log(subsequences);