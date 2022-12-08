//  boolean 
let isBool:boolean = true ; 
isBool= true

// number 
let amount:number = 99 

// string 
let firstName:string = "masai" ;
let lastName:number = 10 ;
let fullName = `${firstName} ${lastName}` ;

//  array 

let arr:number[] = [1,2,3,4,5]  
let arrOfString: string[] = ["name","shoes"]
let arrOfNumber: Array <number> = [1,2,3,4,5]

//  objets 
// shape of obj -> interface , types 
type company = {
    name:string ,
    age:number
    rank?:number ;
}
const masai:company ={
    name:'Masai_School' ,
    age:3
}
console.log(masai.name)

// 2

type softwareDeveloper ={
    skills:string ,
    isWorking:boolean 
}





//  primitive types in js 
let arrOfObj:company[]= [{name:'Banglore' , age:1} , {name:'Delhi' , age:2}]


//  tuples  
let first_name ='masai' ;
let rank =1 

let masai_details :[string,number?] =['masai',10]

// enum 
enum Color {
    RED , GREEN , BLUE 
}

// console.log(Color)  
enum Books{
    GET_BOOKS_REQUEST ='GET_BOOKS_REQUEST' ,
    GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS',
    GET_BOOKS_FAILURE ='GET_BOOKS_FAILURE'

}

// OTHER 

let u:undefined ;
let n :null ;
let a :any ;

//  when function does not return anything 
function sum(a:number,b:number = 5){
    return a+b 
}
let temp = (sum(2,3))


function printName({name ,age}:company):void{
    console.log(name, '::',age)
}

// printName(masai) 

// union -> set theory 

let arr1:(string | boolean)[] = ['Banglore' , true]

//  Intersection of both types 
let masai_student:(company & softwareDeveloper)[] =[{
    name:'student a' ,
    age:20 , 
    skills: 'software Development',
    isWorking : false 
}]