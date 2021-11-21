const pratiksha = {
    firstName : "Pratiksha",
    lastName : "Patil",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and she is studying ${this.courseCount} courses
        `);
    },

};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
};


// pratiksha.getInfo();
// dj.getInfo();

// var djInfo = pratiksha.getInfo.bind(dj)//binding (reference) to get dj details
// djInfo();// it require to call that method manually

pratiksha.getInfo.call(dj); // call directly calls it
