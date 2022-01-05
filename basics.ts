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
function insert<T>(array: T[], value:T){ 
    // if we want to provide any type in the array and value, but they need to have the same type
    const newArr = [...array, value];
    return newArr;
}
const demoArr = [1, 2, 3];
insert(demoArr, -1); // [1, 2, 3, -1]


