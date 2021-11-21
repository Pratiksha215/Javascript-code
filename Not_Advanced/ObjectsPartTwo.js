var User = {
    name : "",
    getUserName: function(){
        console.log(`User name is : ${this.name}`);
    },
};

var pratiksha = Object.create(User);
console.log(pratiksha);
pratiksha.name = "Pratiksha patil"
pratiksha.getUserName();

var jyoti = Object.create(User,{
    name: {value: "jyo"},
    courseCount: {value: 3},
});

jyoti.getUserName();


