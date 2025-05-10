const accountId = 1234567890;
let accountName = "John Doe";
let accountBalance = 1000.50;

accountCity = "New York"; // This will create a global variable
let accountState; // This will also create a global variable

console.log(accountId); // 1234567890
console.table([accountId, accountName, accountBalance, accountCity, accountState]); // [1234567890, "John Doe", 1000.50, "New York"]


/* prefer not to use var
Use let and const instead
let is block scoped
const is block scoped and cannot be reassigned
Use const for variables that won't change
Use let for variables that will change
Use camelCase for variable names
*/
