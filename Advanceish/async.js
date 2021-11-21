const uno = () => {
    console.log("I am One");
};


const dos = () => {
    setTimeout(() => {
        console.log("Woohoo");
    },3000); //it will get loaded after I am Three
    console.log("I am Two");
};


const tres = () => {
    console.log("I am Three");
};

uno();
dos();
tres();
