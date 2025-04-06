let str="Har\""
console.log(str.length);

const sentence='The quick brown  fox jumps over the lazy dog.'
const word='fox';
console.log(sentence.includes(word))
console.log(`The word "${word}"${sentence.includes(word)? 'is ':'is not' }in the sentence.`);

console.log(word.toLowerCase());
console.log(word.toUpperCase());

let str2="Please give Rs.1000";
let amount=Number.parseInt(str2.slice("Please give Rs.".length));
console.log(amount);
console.log(typeof amount);

let friend="Deepika";
friend[3];
console.log(friend);//friend is not change because string is immutable