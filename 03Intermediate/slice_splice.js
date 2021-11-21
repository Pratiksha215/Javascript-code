var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1, 4));
//end value is exclusive and start value is inclusive

console.log(users.slice(1));




users.splice(1, 2, "HI"); 
console.log(users);

users.splice(1, 3, "HI","BYE"); 

console.log(users);