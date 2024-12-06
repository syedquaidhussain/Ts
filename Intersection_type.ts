type User={
    name:string
}

type Admin = {
    role:string[]
}

type Both = Admin&User;

let adminUser : Both = {
    name :"Aman",
    role : ["hello","Bye"]
}

console.log(typeof adminUser);








// type obj1 = {

//     [key:string]:(name:string) => number;

// };

// type obj2 = {
//     [key:string] :()=>void
// }



// const user : obj1&obj2 = {
//     name:function(name){
//         return 21;
//     },

  
// }

// user.name("smksm");

// console.log(user.address("add"))


export{}