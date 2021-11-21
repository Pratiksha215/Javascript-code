// const user = ["pratiksha",3,"admin"];
// //console.log(name[1]);

// // var role = user[2];
// // var name = user[0];

// var [name,courseCount, role] = user;
// console.log(role);

const MyUser = {
    name : "pratiksha",
    courseCount: 5,
    role : "admin",
};

console.log((MyUser.courseCount));

const {name, courseCount, role} = MyUser;
console.log(role);