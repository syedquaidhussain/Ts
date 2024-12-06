// keyof is a keyword in TypeScript which is used to extract the key type from an object type.

// When used on an object type with explicit keys, keyof creates a union type with those keys.


// interface MyObj {
 
//     name2 : string,
//     age : number,
//     1:number

// }

// type keys = keyof MyObj;

// let myFun = ( giveObject:MyObj, keysOfObject: keys )=>{
 
//   console.log(keysOfObject);
// }

// const pas = {
//    name2:"Aman",
//    age:12,
//    1:1
// }

// myFun(pas,1)


// KeyOf with index signature.
interface Object2{
    [key:string] : number
}

const customObj : Object2 = {
    name:12,
    age:19,
    rollNo:33
}

function dynamic(customObj : Object2, key : keyof Object2) : Object2
{
console.log(customObj);
console.log(key);
return {
   [ key]:1
}

}

console.log(dynamic(customObj,1))




export{}






  
    


