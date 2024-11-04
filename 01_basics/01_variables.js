const accountId = "1234"
let accountEmail = "shashank12@gmail.com"
var accountPassword  = "2334"
accountCity = "jaipur"
let accountState;//undefined(value is not defined )

// accountId = 2// not allowed to change the value of const
 console.log(accountId);
 accountEmail = "abc12@.com"
 accountPassword = "12121"
 accountCity = "patna"
 console.table([accountId, accountEmail , accountPassword, accountCity, accountState])
/*
prefer not to use var (issue in block scope and functional scope)
*/