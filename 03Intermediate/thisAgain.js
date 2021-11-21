console.log(this);


var user = {
    firstName: "Pratiksha",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 7",this);
    },
};
user.getCourseCount();// function calling with object

function sayHello(){
    console.log("Hello");// regular fn
    console.log("LINE 10",this);
}
sayHello();

