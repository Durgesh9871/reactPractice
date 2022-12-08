//  boolean 
let isBool = true;
isBool = true;
// number 
let amount = 99;
// string 
let firstName = "masai";
let lastName = 10;
let fullName = `${firstName} ${lastName}`;
//  array 
let arr = [1, 2, 3, 4, 5];
let arrOfString = ["name", "shoes"];
let arrOfNumber = [1, 2, 3, 4, 5];
const masai = {
    name: 'Masai_School',
    age: 3
};
console.log(masai.name);
//  primitive types in js 
let arrOfObj = [{ name: 'Banglore', age: 1 }, { name: 'Delhi', age: 2 }];
//  tuples  
let first_name = 'masai';
let rank = 1;
let masai_details = ['masai', 10];
// enum 
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
// console.log(Color)  
var Books;
(function (Books) {
    Books["GET_BOOKS_REQUEST"] = "GET_BOOKS_REQUEST";
    Books["GET_BOOKS_SUCCESS"] = "GET_BOOKS_SUCCESS";
    Books["GET_BOOKS_FAILURE"] = "GET_BOOKS_FAILURE";
})(Books || (Books = {}));
// OTHER 
let u;
let n;
let a;
//  when function does not return anything 
function sum(a, b = 5) {
    return a + b;
}
let temp = (sum(2, 3));
function printName({ name, age }) {
    console.log(name, '::', age);
}
// printName(masai) 
// union -> set theory 
let arr1 = ['Banglore', true];
//  Intersection of both types 
let masai_student = [{
        name: 'student a',
        age: 20,
        skills: 'software Development',
        isWorking: false
    }];
//# sourceMappingURL=index.js.map