// Types: number, string, boolean, array, object

let age: number = 8; //number

let userName: string = 'MUX2112'; // string

let bool: boolean = false; //boolean

//Complex types

let numbers: number[] = [3, 4, 5, 6.2]; // array of numbers

let person: {name: string; age: number} = { name: 'Max', age: 12};// obj can store only str and nums
let people:{name: string; age: number}[]= [];// an array of objects

//Type alias
type PersonType = {name: string; age: number};
let newPeople: PersonType[] = []; // an array of personType objects


// Type inference - when we immediately innitialize our variable - typescript will not allow us to reasign it 
// with a different type, therefore we dont need to write type if we asign variable when we create it

let surname = 'Yarinovsky'; // we cannot write 'surname = 34'

//union types allow  to store  more then one type in a variable

let personId: string | number = 47384310;
personId = 'maxyarinovsky_47384310';

//Function & types

function add(a: number, b:number){
    return a+b; // returned value will be a number as well
    // it is infered type
}

function printOut(value: any): void{ // void means that this function will never return something
    // we do not need to initialize the void type it will be as infered type
    console.log(value)
}

// Generics
function insert<T>(array: T[],  value:T){ 
    // if we want to provide any type in the array and value, but they need to have the same type
    const newArr = [...array, value];
    return newArr;
}
const demoArr = [1, 2, 3];
insert(demoArr, -1); // [1, 2, 3, -1]

let list: number[] = [1, 2, 3]; 

let tupleType: [string, number] = ["hello", 10];
// tupleType = [10, "hello"] - error

// never type 
const error = () : never => {
    throw new Error('Something went wrong')
} 
const infiniteLoop = () : never => {
    while(true) {
        console.log('hello')
    }
}
// never says that function returns an error or has an infinite loop
// void type says that function does not returns data

//Enum type
enum Directions {
    Up,
    Down,
    Left,
    Right 
}
Directions[0] //Up
Directions[1] //Down
Directions[2] //Left
Directions[3] //Right
// enum elements have indexes, but we can change them

enum Directions1 {
    Up = 2,
    Down = 4,
    Left = 6,
    Right 
}
Directions[2] //Up
Directions[4] //Down
Directions.Left //6
Directions[7] //Right - previous element's index + 1
// we can get elements not only by keys, but also by values! 


const createPassword = (name: string, age: number): string => `${name}${age}`;

//createPassword('Max') - will cause an error, because age is not provided

const createPassword1 = (name: string, age?: number) : string => `${name}${age}`;
//createPassword1('Max') - will not cause an error, because age now is optional argument 

// simple class in typescript
class User {
    public name: string; // public - the access is free
    private age: number; // private - property or method is not available outside this class 
    protected nickname: string; // protected - proprety or method is available only in class and extended classes
    readonly pass: number; // readonly - read only proprety

    constructor(name: string, age:number, nickname: string, pass: number){
        this.name = name;
        this.age = age;
        this.nickname = nickname;
        this.pass = pass; 
    }
}

class User1 {
    private name: string = 'Maxim Yarinovsky';
}
// in this case we do not need to call constructor method
// User class, but less code:
class User2 {
    static userClass: string = 'A';// this property will be in every class example 
    constructor(
    public name: string, 
    private age: number, 
    protected nickname: string, 
    readonly pass: number 
    ){}

    setAge(age: number){
        this.age = age;
    }
}
// in this case property's modificator(public, private ...) is obligatory
 
 
namespace Names {
    export const max: string = 'Max';
    export const sasha: string = 'Sasha'; // export variables from namespace
    const misha: string = 'Misha'; // misha const is private variable
}
const maxSasha: string = `${Names.max}${Names.sasha}`

// we can create namespace in the special file and use it across the app
// "///<reference path='Names.ts'>" - imropt namespace into another file





