//COMPARING VAR LET AND CONST

//-----LET KEYWORD-----//
//A key difference is that you cannot access a let variable before declaring it.

//1. We CANNOT access a let variable before we declare it
console.log(user); //Error!
let user;

//2. We CAN declare an unassigned variable with let
let user;
console.log(user);

//3. We CAN´T redeclare a let variable
let user= "Anna";

//4. But we CAN re-assign it
user = "Anna";
console.log (user);
