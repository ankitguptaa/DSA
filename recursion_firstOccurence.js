function firstIndexOfOccurrenceRecursive(arr, target, index = 0) {
    if(arr.length === index) {
      return -1;
    } else if (arr[index] === target) {
      return index;
    }

    return firstIndexOfOccurrenceRecursive(arr, target, index + 1);
}


function firstIndexOfOccurrenceMain(arr, target) {
  return firstIndexOfOccurrenceRecursive(arr, target);
}

console.log(firstIndexOfOccurrenceMain("1 2 3 4 5", "3")); // 2
console.log(firstIndexOfOccurrenceMain("5 8 3 6 9", "8")); // 1
console.log(firstIndexOfOccurrenceMain("2 4 6 8 10", "5")); // -1
console.log(firstIndexOfOccurrenceMain("1 3 5 7 9", "1")); //0