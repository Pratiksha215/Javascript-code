const google = "google";
const fb = null;

if(google){
    console.log("I execute - BLOCK 1");
}

if(!!fb){ //true or false //best way
    console.log("I execute - BLOCK 2");
}