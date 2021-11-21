/* How function know that from where i need to execute*/



// sayHello();//this works bcz of global context of javascript


// function sayHello(){
//     console.log("Hello");
// }

if(2 === 2){
    console.log("This is true");
}


var myName = "pratiksha";
if(myName === window.myName){ //This code works in browser bcz of global context.
    console.log("This is again a true statement");
}


