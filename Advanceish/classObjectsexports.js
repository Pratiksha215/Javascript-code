//import User from "./class.js";

const User = require("./classjs.js");
const user = require("./classjs.js");

const pratiksha = new User("pratiksha","pratiksha@gmail.com");

console.log(pratiksha.getInfo());
pratiksha.enrollCourse("React Bootcamp");
pratiksha.enrollCourse("Angular Bootcamp");

console.log(pratiksha.getCourseList());

let courses = pratiksha.getCourseList();

courses.forEach((c) => console.log(c));