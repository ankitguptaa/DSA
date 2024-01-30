function selectionSort(arr) {
    let least = 0;
    let leastIndex = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        least = arr[i];
        leastIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < least){
                least = arr[j];
                leastIndex = j;
            }
        }
        swap(arr, i, leastIndex);
        console.log(arr);
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
console.log(selectionSort(unsortedArray));