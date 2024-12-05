// function getTime():number {
// return new Date().getTime();
// }


// function getTime() : void{

// console.log(new Date().getDate())
// }

// getTime();

// function with paramter

// function sum(x:number,y:number) : number {

//     return x+y;
// }


// console.log("Sum is ",sum(12,12.3));

// function odd(x:number, y){
//     console.log(typeof x)
//     console.log(typeof y)
// }

// odd(1,{}) 


/*
If no parameter type is defined, TypeScript will default to 
using any, unless additional type information is available as shown 
in the Default Parameters and 
Type Alias sections below.
*/

/*
Optional Parameters
By default TypeScript will assume all parameters are required, 
but they can be explicitly marked as optional.
*/

// function isEven(x:number,c?:number|string):boolean{
//     if(x%2===0){

//         console.log(c || "c not given ");
        
//         return true;
//     }

//     else{

//         console.log(c ||"c not given" );
        
//         return false 
//     }
// }

// if(isEven(21))
//     console.log("Evene h ")

// else console.log("Odd h");


/*
Default Parameters
For parameters with default values, the default 
value goes after the type annotation:
 */

/*
    let count =1;

    function fiboNumber(x:number =1) : number{
        console.log(count);
        count++;
        
    if(x<=1) {

        return x;
    }
    return fiboNumber(x-1) + fiboNumber(x-2);

    }

    console.log(fiboNumber());
*/



// Named Parameter
function sum({x,y}:{x:number,y:number}) : number {

    return x+y;
}

sum({x:12,y:12});




// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

// Example
// function add(a: number, b: number, ...rest: number[]) {
//   return a + b + rest.reduce((p, c) => p + c, 0);
// }

function add(x:number,y:number, ...rest:string[]){

    // let sum = x+y;
    
    // if(rest.length) {
    //    return rest.reduce((acc,curr)=> acc+curr,sum)
    // }
    // return sum;
    console.log(rest);
    


}

console.log(add(1,2,"alm"));



// Type Alias
// Function types can be specified separately from functions with type aliases.

// These types are written similarly to arrow functions, read more about arrow functions here.

// Example
// type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
// const negateFunction: Negate = (value) => value * -1;

// making userdefined/custom datatype 
type printDetails = (value:number, se:number)=>boolean;

let lol : printDetails = (value,l) => true;

lol(1,2);



type zaidType = (v:number)=>number

const f:zaidType = (v)=>v;
console.log(f(22));





export{}