let a=prompt("Hey whats you age?")
a=Number.parseInt(a)//converting string  to a number
console.log(typeof a);
if(a<0){
    alert("This is a invalid  age");
}else if(a<9){
    alert("You are a kid and  you can't even think of driving ");

}
else if(a<18 && a>=9){
    alert("You are a kid and  you can even think of driving  after 18");

}


else{
    alert("You can now  drive as you are above  18");
}
console.log("Done"); 
console.log("you can",a
    <18?"Not Drive": "Drive")
//lear mdn js switch