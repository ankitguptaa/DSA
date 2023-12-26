function hasZeroSumSubArrays(arr) {
    if (arr.length === 0) return false;
    
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            for (let k = i; k <= j; k++) {
                sum += arr[k];
                if(sum === 0) return true;
            }
        }
    }

    return false;
}



function subArrayExists(arr) {
    const n = arr.length;
 
    for (let i = 0; i < n; i++) {
        let sum = arr[i];
 
        if (sum === 0)
            return true;
 
        for (let j = i + 1; j < n; j++) {
            sum += arr[j];
 
            if (sum === 0)
                return true;
        }
    }
    return false;
}

function subArrayExistsSet (arr) {
    const sumset = new Set();
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        if(sum === 0 || sumset.has(sum)) {
            return true;
        }

        sumset.add(sum);
    }

    return false;
}

//console.log(hasZeroSumSubArrays([4, 2, -3, 1, 6]))
//console.log(subArrayExists([4, 2, -3, 1, 6]))
console.log(subArrayExistsSet([4, 2, -3, 1, 6]))