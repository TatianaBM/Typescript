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
export {};
//# sourceMappingURL=intro.js.map