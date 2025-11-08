// LESSON 1
// typescript is js with syntax for types, it helps writing better js
// ts extends js
let username = 'miro';
console.log(username);
// type in terminal tsc filename.ts  - to compile ts file into js file
// we will notive var instead of let - this is to make js compatible with old browsers
// everytime we make a change in this file we need to recompile ts into js by running 'tsc filename.ts' in terminal
// to avoid it we can run tsc filename.ts -w ---- where -w means watch  this file for any changes
// it is great if we are working with one file
// but typically we we would scructure our project differently:
// src folder - raw code
// build folder - index.html, css folder, js folder and so on
// run tsc --init to generate ts confic file and find root directory
// "rootDir": "./src",   // this is where all our ts files will be
// "outDir": "./build/js",   // this is where js will be compiled
// now we run tsc -w without specifing any ts file, as it will look for all ts files and compile them in js files
// now that we have ts config fiel variables will be initialized with let and not var, this is because of  "target": "esnext", in config file 
// if we put  "target": "es5" to be compatible with oldest browsers we would get var
// if we decide to remove a ts file we would need to remove it from js files folder as well
// to ignore other ts files that are not in src folder add to config file  "include": ["src"]
// if we do not want to compile if any ts error: set "noEmitOnError": true in ts config file
// meaning if we made ts erro js file wont be generated and we see not found error
// if we set noEmitOnError to false meaning we still compile eventhough there if a ts error, 
// and we decide to override (no compiling) config file run in terminal tsc --noEmitOnError -w
// this will not generate js file
let a = 12;
let b = 6;
let c = 2;
//let a = 12
//let b = '6'
// js uses dynamic types so it ok in js to number divide by string as it will convert string into a number if can
// however ts compiler will start complaing about types
// thats why we need to spicify types 
console.log(a / b);
console.log(b * c);
// valid js = valid ts but it does not mean compiler is goign to like it. So we need to pay attention to ts compilet to help us write better code
// LESSON 2
// ts is staticl typed language meanign tyypes are check during compilation
// whereas js if dynamically typed language means types are checked during runtime
//we implicitly declared type
let myName = 'Tania';
//compliler does not like it cause we implicitly declared string data tyype
//myName = 42
let mySurname;
mySurname = 'White';
let meaningOfLife;
let isLoading;
// when we are not sure what data type we will be receiving
let album;
// union type, e.g. string or number, it can be more that just two different types
let data;
data = 415;
data = 'any string';
meaningOfLife = 42;
isLoading = true;
album = 'any type';
// ts can infer what a function is going to return based on what it knows about the function
const sum = (a, b) => {
    return a + b;
};
// here sum1 is going to return a string, ts infers that string will be returned
const sum1 = (a, b) => {
    return a + b;
};
//union type
let postId;
let isActive;
// regExp type
// ts intellisense tells you what type you can put
let re = /\w+/g; //regular expression all words
console.log(isLoading);
// LESSON 3
// arrays
let stringArr = ['one', 'hey', 'today'];
let guitars = ['strat', 'les paul', 1980];
let mixedData = ['tomorrow', 1985, true];
//stringArr[0] = 42
stringArr[0] = '42';
stringArr.push('hello');
guitars[0] = 1546;
guitars.unshift('world');
console.log(guitars);
//stringArr = guitars
guitars = stringArr;
console.log(guitars);
mixedData = guitars;
let test = [];
let bands = [];
bands.push('Van');
//bands.push(42)
// the length of the array and the order of the types do not matter
//ts just knows what types belong to the array
//however to be more strict we can create a tuple
// we define specific position and specific length
let strictTuple = ['lunch', 42, true];
strictTuple.push('85');
//strictTuple[4] = 'el'
strictTuple[0] = 'dinner';
//strictTuple[0] = 55
console.log(strictTuple);
// below is union type , not tuple
let mixed = ['dinner', 2, false];
mixed = strictTuple;
//strictTuple = mixed    not possible cause tuple thinks that mixed may not have all three elements
// Objects
let myObj;
//we can reassign to an array cause array is also an object in js
myObj = [];
console.log(typeof myObj);
myObj = bands;
console.log(myObj);
const exampleObj = {
    prop1: 'Tania',
    prop2: true,
};
let evh = {
    name: 'Bon Jovi',
    active: true,
    albums: ['album1', 'album2', 5]
};
let jp = {
    name: 'Jimmy',
    active: false,
    albums: [8, 'album1', 7]
};
evh = jp;
let eng1 = {
    name: 'John',
    experience: ['company1', 10, 5]
};
const greetEnginner = (eng) => {
    return `Hello ${eng.name} !`;
};
console.log(greetEnginner(eng1));
let waiter = {
    name: 'Sergio',
    age: 45,
    isActive: true,
    hobbies: ['drawing', 12, 'swimming']
};
let sallesPerson = {
    age: 22,
    isActive: true,
    hobbies: [1, 12, 'swimming']
};
const greetPerson = (person) => {
    return `Hi ${person.name}, how are you?`;
};
console.log(greetPerson(waiter));
console.log(greetPerson(sallesPerson));
const greetSalles = (person) => {
    if (person.name) {
        return `Hi ${person.name.toUpperCase()}, how are you?`;
    }
    return 'hi';
};
console.log(greetSalles(sallesPerson));
// interface here works the same as type
// Enums
//Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
//Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent,
// or create a set of distinct cases. TypeScript provides both numeric and string-based enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));
console.log(Grade.A);
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["right"] = 3] = "right";
    Direction[Direction["left"] = 4] = "left";
})(Direction || (Direction = {}));
console.log(Direction.down);
export {};
//# sourceMappingURL=intro.js.map