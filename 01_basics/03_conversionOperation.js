let score = "100";
// Convert string to number
let scoreNumber = Number(score);
console.log(scoreNumber); // 100
console.log(typeof scoreNumber); // number

let score1 = "100abc";
// Convert string to number
let scoreNumber1 = Number(score1);
console.log(scoreNumber1); // NaN
console.log(typeof scoreNumber1); // number

let score2 = null
// Convert null to number
let scoreNumber2 = Number(score2);
console.log(scoreNumber2); // 0
console.log(typeof scoreNumber2); // number

let score3 = undefined
// Convert undefined to number
let scoreNumber3 = Number(score3);
console.log(scoreNumber3); // NaN
console.log(typeof scoreNumber3); // number

let score4 = true
// Convert boolean to number
let scoreNumber4 = Number(score4);
console.log(scoreNumber4); // 1
console.log(typeof scoreNumber4); // number

let score5 = false
// Convert boolean to number
let scoreNumber5 = Number(score5);
console.log(scoreNumber5); // 0
console.log(typeof scoreNumber5); // number

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true
console.log(typeof booleanIsLoggedIn); // boolean

let isLoggedIn1 = 0
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1); // false
console.log(typeof booleanIsLoggedIn1); // boolean

let isLoggedIn2 = null
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); // false
console.log(typeof booleanIsLoggedIn2); // boolean

let isLoggedIn3 = undefined
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3); // false
console.log(typeof booleanIsLoggedIn3); // boolean

let isLoggedIn4 = ""
let booleanIsLoggedIn4 = Boolean(isLoggedIn4);
console.log(booleanIsLoggedIn4); // false
console.log(typeof booleanIsLoggedIn4); // boolean

let isLoggedIn5 = "abc"
let booleanIsLoggedIn5 = Boolean(isLoggedIn5);
console.log(booleanIsLoggedIn5); // true
console.log(typeof booleanIsLoggedIn5); // boolean


let myNumber = 100
let myString = String(myNumber);
console.log(myString); // "100"
console.log(typeof myString); // string

