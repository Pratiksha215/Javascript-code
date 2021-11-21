var User = function(firstName,courseCount){ // use capital U for Users as it is recommended for prototype
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};
//proto
User.prototype.getFirstname = function () {
    console.log(`Your firstname is : ${this.firstName}`);
    
}


var pratiksha = new User("pratiksha", 2) //new keyword is responsible for invoking constructor and creating a unique instance every single time 
pratiksha.getCourseCount();
pratiksha.getFirstname();

if (pratiksha.hasOwnproperty("firstName")) {
    pratiksha.getFirstname();
    
}





//console.log(pratiksha);

var vedanti =  new User("vedanti", 1)
 vedanti.getCourseCount();
//console.log(vedanti);
vedanti.getFirstname();