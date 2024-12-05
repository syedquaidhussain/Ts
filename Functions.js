"use strict";
// function getTime():number {
// return new Date().getTime();
// }
Object.defineProperty(exports, "__esModule", { value: true });
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
function sum(_a) {
    var x = _a.x, y = _a.y;
    return x + y;
}
sum({ x: 12, y: 12 });
// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
// Example
// function add(a: number, b: number, ...rest: number[]) {
//   return a + b + rest.reduce((p, c) => p + c, 0);
// }
function add(x, y) {
    // let sum = x+y;
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    // if(rest.length) {
    //    return rest.reduce((acc,curr)=> acc+curr,sum)
    // }
    // return sum;
    console.log(rest);
}
console.log(add(1, 2, "alm"));
var lol = function (value, l) { return true; };
lol(1, 2);
var f = function (v) { return v; };
console.log(f(22));
