// class User {
//     private _name: string
  
//     constructor(name:string){
//         this._name = name ;
//     }
//     getName():string{
//      return this._name;
//     }
// }

// const user1 = new User("Aman")

// console.log(user1.getName());


interface Shape{
    getArea():number
}

// class Rectangle implements Shape{
// public readonly name:string ;

    // constructor(name:string){
    //     this.name= name;
    // }


    
    // getName():string{
    //  return this.name;
    // }

//  public  getArea(): number {
//     console.log("Area is ");
    
//       return 22;
//   }
// }

// const user1 = new User("Aman")

// console.log(user1.getName());


class Parent {
    constructor(public name:string, public age:number){}

     getName(){
        return this.name 
     }
     getAge(){
        return this.age 
     }
     
    }

    class child extends Parent{
        constructor(private childName : string ) {

            super(childName,24)
        }

    }

