var user = { //user is objct
    firstName : "Pratiksha", //key : value
    lastName : "Patil",
    role : "Admin",
    loginCount: 32,
    facebookSignedIn : true
};

console.log(user.firstName); //dot is used for accessing the objects
console.log(user["lastName"]); //Its weired as we have to pass in string format
console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
console.table(user);