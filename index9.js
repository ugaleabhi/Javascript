let sum=0;
let n=prompt("Enter the  value of n:")
n=Number.parseInt(n);
for(let i=0;i<n;i++){
    sum+=i+1;
}
console.log("Sum of first:"+n+"natural number:"+sum);
let obj={
    harry:90,
    shubh:45,
    shivika:56,
    ritika:57,
    shiv:23
}
//for in loop
for(let a in obj){
    console.log("Marks of "+a+" are:"+obj[a]);
}
//for off loop
for(let b of "harry"){
    console.log(b)
}