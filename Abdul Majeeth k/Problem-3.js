//Simple Updated length of Generating Odd numbers with JS

function Generate(x) {
    let solve=[];
    let length=(x%2===0)?x-1:x
    
    for(let i=0;i<length;i++){
        solve.push(2*i+1);
    }
    console.log(solve.join(','));
    //console.log(solve); //This line shows the output in Array Format
}

//Sample Inputs Made Here
const make1=Generate(1);
const make2=Generate(2);
const make3=Generate(3);
const make4=Generate(4);
const make5=Generate(5);
const make6=Generate(6);