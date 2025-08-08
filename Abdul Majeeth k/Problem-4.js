const input=[1,2,8,9,12,46,76,82,15,20,30];//modify the numbers in this array to check with various numbers

const output={};
for (let index = 1; index<=9; index++) {
    let count=0;
    for(let n of input){
        if(n%index===0){
            count++;
        }
    }
     output[index]=count;
}
console.log(output);
