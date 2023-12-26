function towerOfHanoi(n,start,dest,temp){
    // base case
    if(n===1){
        console.log(`Move disk 1 from ${start} to ${dest}`);
    } else {
    // 1.move n-1 disks from start to temp
    towerOfHanoi(n-1,start,temp,dest);
    // 2. move nth disk from start to dest
    console.log(`Move disk ${n} from ${start} to ${dest}`);
    //3. move n-1 disks from temp to dest
    towerOfHanoi(n-1,temp,dest,start);
    }
}

towerOfHanoi(5,'R1','R3','R2');