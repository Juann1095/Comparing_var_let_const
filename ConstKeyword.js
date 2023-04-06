//-----CONST KEYWORD-----
//1.-The const variable MUST BE INITIALIZED
console.log(user); // Error!
const user;

//2.- We CAN´T access the const variable before initialization
console.log(user);
const user = "Andrew";

//3. We CAN´T redeclare a const variable
user = "Anna" 

function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);
