type Points = {
    x:number,
    y:number
}

// type ReadonlyPoint= Readonly<Points> or I can use mapped types..... 
type ReadonlyPoint<T> = {
  readonly [key in keyof T] : T[key];    

}

let obj : ReadonlyPoint<Points>= {x:100,y:100};

// Mapping with Conditional Types
// Mapped types can work with conditional types:

type Nullable<T> =  {
  [Key in keyof T]: T[Key] | null;
};

type User = { name: string; age: number };

type UserNullable = Nullable<User>;
// { name: string | null; age: number | null }




// Ask
// Key remapping 
// type User = {
//     name: string;
//     age: number;
//   };

// type PrefixKeys<T, Prefix extends string> = {
//     [Key in keyof T as `${Prefix}${Key & string}`]: T[Key];
//   };
  
//   type UserPrefixed = PrefixKeys<User, "user_">;
  

// Built in mapped types 
type ReadonlyPoint2 = Readonly<Points> 
type OptionalPoints = Partial<Points>;

type Keys = "name"|"age";
type ObjectFromRecord = Record<Keys,string>
const a:ObjectFromRecord = {
  name:"Aman",
  age:"22"
}

export {}