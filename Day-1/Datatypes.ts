// basic syntax 
// let  variableName : type =  value

// Primitive DataTypes  -> Same as in Js 

// Primitve->
// number
let decimal1 :number = 42;
let hex: number = 0x2a; // Hexadecimal
let binary: number = 0b101010; // Binary
let octal: number = 0o52; // Octal

// string
let name = "Aman";

let fName:string = `First Name is ${name}`;
console.log(fName);


// Boolean 
let b : boolean = true;
console.log(typeof b);

// reference Types 

// 1: Array 

const arr1 : string[] = ["1,2,3,4,5,6"];
console.log(arr1);

let arr2 : Array<object> = [{"1":"Name"}];
let arr3 : Array<number> = [1,2,3];

// let mixedArray: number[] = [1, "string"]; // Error: Type 'string' is not assignable to type 'number'.

// enum = An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.
enum variables{
    var1 =1, 
    var2, 
    var3, 
    var4, 
}

// console.log(variables.var1);
// console.log(variables.var2);
// console.log(variables.var3);
// console.log(variables.var4);

// Eg2
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  };

  // logs 404
//   console.log(StatusCodes.NotFound);
  // logs 200
//   console.log(StatusCodes.Success);

  
  //   String Enum
enum StringValues{
    name = "Aman",
    age= "22",
    hobbies = "cricket",
    none= "none"
}

// console.log(StringValues[22]);   

// Note -> 
// Enums are objects in JavaScript, so they can be used both ways:but not in case of string enums 

// To get the name from the value.
// To get the value from the name.




// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

let ans :number|string|boolean = 22;

ans = "number";
ans = true;
console.log(ans);
// console.log(StringValues.name);



// Note-> you need to know what your type is when union types are being used to avoid type errors:
// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'
//   }

// Tuple:
// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:

let myTuple : [number,boolean,string];
myTuple = [1,true,"1"]

// Readonly Tuple
// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:

// let ourTuple: [number, boolean, string];

// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];

// // We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');

// console.log(ourTuple);

// So make tuple readonly
let myTuple1:readonly [number] =[1];










// Type Aliases.
// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type CarYear = number;
type CarType = string;
type CarModel = number;
type Car = {
    year : CarYear,
    type:CarType,
    model:CarModel,

}
const myCar : Car={
    year:123,
    type:"Racing",
    model:2000
}

console.log(myCar);


// Interfaces.
// Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle{
    height:number,
    width:number
}

let r1 : Rectangle = {
    height:10,
    width:100
}



// Extending Interfaces
// Interfaces can extend each other's definition.

interface  ColoredRectangle extends Rectangle{
color : string
}

const colorRec : ColoredRectangle= {
 height:10,
 width:20,
 color:"red"
}

console.log(colorRec);











export {};