
// Eg 1
// let obj : object = {
//     name:"aman",
//     key : 1
// }

// Eg 2
// let obj : object = ()=>{
//     console.log("Hello World")
// }

// Eg 3
// let obj1 : object = [1,2,3] // All are correct 
// console.log(obj1[0]);



// let obj: object = { name: "Alice" };
// console.log(obj.name); // error     ------------------IMP 

  
// Another way of making object 
// Inline Type Declaration:
// let user: { name: string; age: number } = { name: "John", age: 30 };
// console.log(user.name); // "John"


// Making Interface 
// interface square {
//     width:number
    
// }

// let mySquare :square = {
//     width:10
// }

// console.log(mySquare.width);


// using type Aliases

// type MyDatatype = {
//     name:string,
//     "phone number" : number,
//      employeed : boolean

// }

// let details : MyDatatype = {
//     name: "Aman",
//     "phone number":6396875128,
//     employeed:false
// }

// console.log(details);

// any type:
/*
any Type
The any type is a special type in TypeScript that allows a variable to hold any value, bypassing TypeScript's type-checking.

Key Features:
Flexibility: Variables of type any can hold values of any type.
Type-Safety Disabled: Using any disables type-checking, making it similar to plain JavaScript.
*/
let a :any =  {
    add:"sum",
    nested:{
        array:[1,2,3]
    }
}
// console.log(a);
// Drawbacks of any:
// Overuse of any defeats the purpose of TypeScript’s type safety.
// Use safer alternatives like unknown, union types, or proper typings when possible.

// type unionType = number|string;

// let y : unionType = "aknx";
// y =1 ;



//  Index Signatures
// Index signatures allow you to define the shape of an object where you don't know the
//  exact property names but know the type of their keys and values.

// type  User = {
//     [key : string] : string
// };


// const user : User ={
//     "name":"zaid",
    
// }

// type objj = {
//     add1:string,
//     add2:number
// }

// type User2 = {
//      [key:number]:string
// }


// const naman:User2 = {
//     1:"jnd"
// }

type NumericProperties = {
    [key: number]: boolean; // Key type is number, value type is boolean
  };
  
  const data: NumericProperties = {
    1: true,
    2: false,
  };
  console.log(data[1]); // true
  

export {}






// Note/ Learnings
// let obj: object = { name: "Alice" };
// // console.log(obj.name); // ❌ Error: Property 'name' does not exist on type 'object'


