/**
 * @param {number[]} arr
 * @return {number[]}
 */
function deleteDivisibleElements(arr) {
    let i = arr.length-1;
    while(i >= 0) {
        if(arr[i] % 2 === 0 || arr[i] % 3 === 0 ) {
            arr.splice(i, 1);
        }
        i--;
    }

    return arr;
}

console.log(deleteDivisibleElements([2,4,6,8,10]))