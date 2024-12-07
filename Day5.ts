
// // Interfaces 
// interface User {

//     readonly DbId : number,

//     email:string,

//     userId:number,
    
//     googleId?: number,

//     // making method
//     startTrial():string,
      
//     // Another Method 
//      getCoupon(couponName:string,value:number): number

// }


// // Reopening the interface or just adding more values.
// interface User{
//     githubToken:string
// }


// // Inheritance in Interface 
// interface Admin extends User{
//     roleId: "admin" | "superPower" 
// }





// const Aman:Admin = {

//     userId:1293002020,

//     email:"sm",

//     DbId:1233,

//     startTrial : ()=>{
//        return "Hello"
//     },

//   getCoupon:(myString:"Aman", off)=>{
//         console.log("Inside the getCoupon ",myString);
//         console.log("Inside the getCouponoff is  ",off);
        
//     return 10;
//     },

//     githubToken:`kks`,
    
//     roleId: 

//     }

//     Aman.getCoupon("ksks",90);
    

      





// Class with interface.
// Eg1 
/*
interface Vehicle {
    speed: number; // property
    move(): void; // method
}   

  
  class Car implements Vehicle {
    speed: number;
  
    constructor(speed: number) {
      this.speed = speed;
    }
  
    move(): void {
      console.log(`Car is moving at ${this.speed} km/h`);
    }
  }
  
  const car = new Car(100);
  car.move(); // Output: Car is moving at 100 km/h
  
  


  interface Device {
    brand: string;
    model: string;
    batteryLevel?: number; // optional property
    powerOn(): void;
  }
  */


//   Eg2 

// interface Device {
//     brand: string;
//     model: string;
//     batteryLevel?: number; // optional property
//     powerOn(): void;
//   }

/*
class Smartphone implements Device {
    brand: string;
    model: string;
    batteryLevel?: number;
  
    constructor(brand: string, model: string, batteryLevel?: number) {
      this.brand = brand;
      this.model = model;
      if (batteryLevel !== undefined) {
        this.batteryLevel = batteryLevel;
      }
    }
  
    powerOn(): void {
      console.log(`${this.brand} ${this.model} is powering on...`);
    }
  }
  
  const phone = new Smartphone("Apple", "iPhone 14", 90);
  phone.powerOn(); // Output: Apple iPhone 14 is powering on...
  
  */

//   Eg 3
// interface Calculator {
//     add(a: number, b: number): number;
//     subtract(a: number, b: number): number;
//   }

/*
class SimpleCalculator implements Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      return a - b;
    }
  }
  
  const calc = new SimpleCalculator();
  console.log(calc.add(10, 5)); // Output: 15
  console.log(calc.subtract(10, 5)); // Output: 5
  
  */




//   Implementing the interface 
interface Shape {
    area(): number;
  }
  
  interface Perimeter {
    perimeter(): number;
  }
  
  class Rectangle implements Shape, Perimeter {
    constructor(public width: number, public height: number) {}
  
    area(): number {
      return this.width * this.height;
    }
  
    perimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  
  const rect = new Rectangle(10, 5);
  console.log(rect.area()); // Output: 50
  console.log(rect.perimeter()); // Output: 30
  