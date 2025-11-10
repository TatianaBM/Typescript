// LESSON 1
// typescript is js with syntax for types, it helps writing better js
// ts extends js
let username = 'miro'
console.log(username)
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

let a : number = 12
let b : number = 6
let c : number = 2
//let a = 12
//let b = '6'
// js uses dynamic types so it ok in js to number divide by string as it will convert string into a number if can
// however ts compiler will start complaing about types
// thats why we need to spicify types 
console.log(a/b)
console.log(b*c)
// valid js = valid ts but it does not mean compiler is goign to like it. So we need to pay attention to ts compilet to help us write better code

// LESSON 2
// ts is staticl typed language meanign tyypes are check during compilation
// whereas js if dynamically typed language means types are checked during runtime

//we implicitly declared type
let myName : string = 'Tania'
//compliler does not like it cause we implicitly declared string data tyype
//myName = 42
let mySurname: string
mySurname = 'White'

let meaningOfLife : number
let isLoading : boolean
// when we are not sure what data type we will be receiving
let album : any
// union type, e.g. string or number, it can be more that just two different types
let data : string | number
data = 415
data = 'any string'
meaningOfLife = 42
isLoading = true
album = 'any type'

// ts can infer what a function is going to return based on what it knows about the function
const sum = (a : number, b : number) => {
    return a + b
}
// here sum1 is going to return a string, ts infers that string will be returned
const sum1 = (a : number, b : string) => {
    return a + b
}

//union type
let postId : string | number
let isActive : boolean | number

// regExp type
// ts intellisense tells you what type you can put
let re : RegExp = /\w+/g   //regular expression all words
console.log(isLoading)

// LESSON 3

// arrays
let stringArr = ['one', 'hey', 'today']

let guitars = ['strat', 'les paul', 1980]

let mixedData = ['tomorrow', 1985, true]

//stringArr[0] = 42
stringArr[0] = '42'
stringArr.push('hello')

guitars[0] = 1546
guitars.unshift('world')
console.log(guitars)

//stringArr = guitars
guitars = stringArr
console.log(guitars)

mixedData = guitars

let test = []
let bands : string[] = []
bands.push('Van')
//bands.push(42)
// the length of the array and the order of the types do not matter
//ts just knows what types belong to the array
//however to be more strict we can create a tuple
// we define specific position and specific length
let strictTuple : [string, number, boolean] = ['lunch', 42, true]
strictTuple.push('85')
//strictTuple[4] = 'el'
strictTuple[0] = 'dinner'
//strictTuple[0] = 55
console.log(strictTuple)
// below is union type , not tuple
let mixed =  ['dinner', 2, false]
mixed = strictTuple
//strictTuple = mixed    not possible cause tuple thinks that mixed may not have all three elements

// Objects
let myObj : object
//we can reassign to an array cause array is also an object in js
myObj = []
console.log(typeof myObj)
myObj = bands
console.log(myObj)

const exampleObj = {
    prop1: 'Tania',
    prop2: true,
}
//exampleObj.prop2 = 42

// define types for the object in advance
type Guitarist = {
    name: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Bon Jovi',
    active: true,
    albums: ['album1', 'album2', 5]
}
let jp: Guitarist = {
    name: 'Jimmy',
    active: false,
    albums: [8, 'album1', 7]
}

evh = jp
//evh.years = 45

//to make a property optional
type Engineer = {
    name: string,
    active?: boolean,
    experience: (string | number)[]
}

let eng1: Engineer = {
    name: 'John',
    experience: ['company1', 10, 5]
}

const greetEnginner = (eng: Engineer) => {
    return `Hello ${eng.name} !`
}
console.log(greetEnginner(eng1))

// another way to predefine types is to use key word interface
interface Person {
    name?: string,
    age: number,
    isActive: boolean,
    hobbies: (string | number)[]
}
let waiter : Person = {
    name: 'Sergio',
    age: 45,
    isActive: true,
    hobbies: ['drawing', 12, 'swimming']
}
let sallesPerson : Person = {
    age: 22,
    isActive: true,
    hobbies: [1, 12, 'swimming']
}
const greetPerson = (person: Person) => {
    return `Hi ${person.name}, how are you?`
}
console.log(greetPerson(waiter))
console.log(greetPerson(sallesPerson))
const greetSalles = (person: Person) => {
    if (person.name) {
        return `Hi ${person.name.toUpperCase()}, how are you?`
    }
    return 'hi'
}
console.log(greetSalles(sallesPerson))
// interface here works the same as type

// Enums
//Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
//Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent,
// or create a set of distinct cases. TypeScript provides both numeric and string-based enums

enum Grade {
    A,
    B,
    C,
    D,
}
console.log(Grade.A)

enum Direction {
    up = 1,
    down,
    right,
    left
}
console.log(Direction.down)

// type aliases - we are creating aliases for typescript types
type stringOrNumber = (string | number)
type stringOrNumberArray = (string | number)[]
type Player = {
    name: string,
    age: number,
    club: stringOrNumberArray
}
type userId = stringOrNumber

// but we cannot do it with interface
//interface PostId = stringOrNumber

//Literal Types, literal assignment
let myName1 : 'tania'
//myName1 = 'john'
// this is useful when you have union type, cause there might be variable where only certain values are expected
let userName : 'Dave' | 'John' | 'Amy'
userName = 'Amy'
//userName = 'rachel'

//benefits of type aliases and literal types - to keep code DRY (do not repeat yourself)

// FUNCTIONS
// with return
const add = (a: number, b: number): number => {
    return a + b
}
//without return - void type is for functions that do not return anything
const logMsg = (message: any): void => {
    console.log(message)
}
logMsg('no return function')
logMsg(add(2,5))

let substruct = function(a: number, b: number): number {
    return a-b
}

// create type alias
type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function(a,b) {
    return a*b
}
console.log(multiply(8,3))

// interface here is also an option 
// but typically when we think about interfaces we think about classes, so we would rather use type aliases

interface math {
    (a: number, b: number): number
}
let divide: math = function(a,b) {
    return a/b
}
logMsg(divide(8,4))

// functions with optional parameters
// optional parameter must be the last in the list!!!!!!!!!!!!!!!!
const addAll = (a: number, b: number, c?: number): number => {
    //type guard
    if(typeof c !== 'undefined') {
          return a + b + c
    } 
    return a + b
}
console.log(addAll(2,8))
console.log(addAll(2,8,8))

// function with a default parameter value
const sumAll = (a: number, b: number, c: number = 2): number => {
    //type guard
    if(typeof c !== 'undefined') {
          return a + b + c
    } 
    return a + b
}
logMsg(sumAll(1,2,3))
logMsg(sumAll(1,2))

// when default param is not the last, we should pass undefined
const sumAll1 = (a: number = 10, b: number, c: number = 2): number => {
    //type guard
    if(typeof c !== 'undefined') {
          return a + b + c
    } 
    return a + b
}
logMsg(sumAll1(undefined,3))

// however with an alias type or interface , we can not do it with default values

// Rest Parameters 
// rest operator should come at the end
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}
logMsg(total(1,2,3,4))

const total1 = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}
logMsg(total1(1,2))

// never type
// for functiona that explicitly return errors 

const createError = (errorMsg: string): never=> {
    throw new Error(errorMsg)
}

// infinite loop returns also never type
const infinite = () => {
    let i: number = 1
    while(true) {
        i++
    }
}
// we should avoid a function returning never type, meaning if we see a function returns never type,
// there is an issue with the function, e.g. endless loop
// ts always helping by infering data type

const infinite1 = () => {
    let i: number = 1
    while(true) {
        i++
        if(i > 100) break
    }
}

// when never type can be useful

// custom type guards
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

// use of the never type
const numberOrstring = (value: number | string): string => {
    //type guards
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'
    //return never type. we need this error to handle potential underfined, when two ifs wont be true
    return createError('This should never happen!')
}
logMsg(numberOrstring('da'))
// will throw an error
//logMsg(numberOrstring(true))

//Types assertions / type casting

type One = string
//union
type Two = string | number
//literal
type Three = 'Hello'

// convert to more or less specific type
let f: One = 'Hello'
let g = f as Two  //less specific: we have change f type to string or number
let j = f as Three // more specific

let k = <One>'World'
let e = <String | number>5

const addOrConcat = (a: number, b: number, c: 'add'| 'concat'): number | string => {
    if( c === 'add') return a + b
    return '' + a + b
}
logMsg(addOrConcat(1,2,'concat'))

// in here myVal is string type, addOrConcat returns string or number, and ts does not like it
//let myVal: string = addOrConcat(2,2,'concat')
// we can fix this with an assertion
// it slike we tell ts hey ingore the warning, we know better it is string type
let myVal: string = addOrConcat(2,2,'concat') as string

// Be careful! TS sees no problem here but there is a problem, as we know function will return a string
let nextVal: number = addOrConcat(2,2,'concat') as number
//however here TS will tell us that it is a mistake, so TS checks whem it can
//10 as string

// forced casting or double casting or two assertions
// we are going to overrule TS using uknown type BUT NOT RECOMMENDED!!!!!!!!!!!
(10 as unknown) as string

// The DOM
// adding ! means non NUll
// const img = document.getElementById('img')!
const img = document.getElementById('img') as HTMLImageElement
// no need to use ! with combination with as
const img1 = document.getElementById('#myId') as HTMLImageElement
// or we can use angle bracket notation
const nextImg = <HTMLImageElement>document.getElementById('#myImg')

// select source property
img.src
img1.src
