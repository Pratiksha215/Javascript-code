var name = "Pratiksha";

console.log("Line number 3" , name);

function sayName(){
    var name = "Miss P";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo(){
        var name = "Miss. PP"
        console.log("Line number 12", name);
    

        
    }
}


sayName();