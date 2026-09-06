const accountId = 14453
let accountEmail = "test@yopmail.com" // variable declaration
var accountPassword = "12345" // variable declaration
accountCity = "BLR" // never use it
let accountState; // default value=undefined

// accountId = 2 not allowed for const variable


accountEmail = "yalnu@yopmail.com"
accountPassword = "test@qwrer"
accountCity = "JPR"

console.log(accountId);
console.log(accountEmail);

/**
 * multi comments
 * var is not prefer, for defining scope of the variable
 */

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);