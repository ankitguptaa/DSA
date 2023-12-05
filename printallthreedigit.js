/*
function print(i, n, current){
    if(i === n) {
        console.log(current);
        return;
    }
    current[i] = 1;
    print(i +1, n, current);

    current[i] = 2;
    print(i +1, n, current);
}
const current = new Array(3);

print(0, 3, current);
*/

function print(i, n, current) {
    if (i === n) {
        console.log(current);
        return;
    }
    current[i] = 1;
    print(i + 1, n, current);

    current[i] = 2;
    print(i + 1, n, current);
}

const current = [1,2,3,4];
print(0, 3, current);