var user = { //user is objct
    firstName : "Pratiksha", //key : value(string or boolean)
    lastName : "Patil",
    role : "Admin",
    loginCount: 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName){
      this.courseList.push(courseName);

    },//how we define function
    getCourseCount : function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
    }
};
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course")
user.buyCourse("Angular Course")
console.log(user.getCourseCount());