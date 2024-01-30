function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]){
                arr = swap(arr, j, j+1);
            }
        }
    }

    return arr;
}

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}

const unsortedArray = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(unsortedArray));