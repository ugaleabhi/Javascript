let marks={
    harry:90,
    shubham:9,
    lovish:56,
    Monika:4
}
for(let i=0;i<Object.keys(marks).length;i++){
    // console.log("The marks of "+Object.keys(marks)[i]+"are "+marks[Object.keys(marks)[i]]);
}
for(let i in marks ){
//   console.log("The marks of "+i+"are "+marks[i])
}
let cn=43
let i
while(i!=cn){
     console.log("Try Again")
    i=prompt("Enter the number");
   
}
console.log("Youn have entered a correct number");
const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4;
}
console.log(mean(4,5,6,7));