const score = 400 // by default treated score as a number 
// console.log(score);

const balance = new Number(100) // yahan number ko strictly define kiya hai
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
// ye some of the functions hai jo numbers ke saath use kar sakte hai
// browser ke console main jaake mil jayega or mdn
const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
// use it wisely

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// ye 1,00,000 aise values deta hai!!

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


// kuch methods maths ke (browser or mdn )
//++++++++++IMPORTANT++++++++++++++++++++

console.log(Math.random()); // ye 0 and 1 ke beech ke values deta hai
console.log((Math.random()*10) + 1);
// *10 karne se value left side shift hojati hai +1 gives 
// 0.1 +1 =1.1 ye karta hai +1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// agar koi game bana rahe aur 2 number ke beech
//wale values honge toh use (for example dice game)
// console.log(Math.floor(Math.random()*(max-min+1))+min)