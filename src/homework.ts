// password validator returns true if: 
//   - At least one uppercase
//   - At least one lowercase
//   - At least one digit
//   - Min length: e.g. >= 12
// otherwise function return false
type Password = string
function validatePassword(pass: Password): boolean {
    const hasHumber: boolean = /\d/.test(pass)
    const hasLowercase: boolean = /[a-z]+/.test(pass)
    const hasUppercase: boolean = /[A-Z]+/.test(pass)
    return pass.trim().length >= 8 && hasHumber && hasUppercase && hasLowercase 
} 
const password = '        Aal2        '
const password1 = 'jahozhlL125ljj.!'
const password2 = '                         '
console.log(validatePassword(password))
console.log(validatePassword(password1))
console.log(validatePassword(password2))

// valiable declaration
const num1: number = 42    
const str: string = 'Hello, TypeScript!'
const isComplete: boolean = true
const numbers: number[] = [1,2,3,4,5]
const cities: string[] = ["Minsk", "Warsaw", "London"]
const person:  { name: string, age: number, city: string } = { name: "Alice", age: 30, city: "Minsk" }

// Type Aliases
//     - Type User: name (string), age (number), optional email (string).
//     - Type Grade: 'junior' | 'middle' | 'senior'.
type User = {
    name: string,
    age: number,
    email?: string
}
const user1: User = {
    name: 'John',
    age: 25
}
type Grade = 'junior' | 'middle' | 'senior'
const myGrade: Grade = 'middle'

// Create interface Car:
//     - brand (string),
//     - model (string),
//     - optional year (number)
interface Car {
    brand : string,
    model : string,
    year? : number
}
const car: Car = {
    brand : 'Volvo',
    model : 'cuper',
    year : 2025
}

// Extending inteface
interface Address {
    street: string, 
    city: string,
    zicode: number
}
interface FullAddress extends Address {
    country: string
}
const myAddress: FullAddress = {
    street: 'Langgstr.', 
    city: 'Zurich',
    zicode: 8013,
    country: 'Switzerland'
}

// Create a union of types:
//  - Type Product with fields id (number), name (string), and price (number).
//  - Type DiscountedProduct, which combines Product and adds a discount field (number).
type Product = {
    id: number,
    name: string,
    price: number
}
type DiscountedProduct = Product & { discount: number }
const discProduct: DiscountedProduct = {
    id: 5,
    name: 'jeans',
    price: 25,
    discount: 20
}

// 6. Create a function calculateDiscount that takes an object of type DiscountedProduct 
//    and returns the final price with discount applied.
//    Explicitly type both input and output data. Use the following data:
//    const product: DiscountedProduct = {
//     id: 1,
//     name: "Laptop",
//     price: 1000,
//     discount: 10
//   };
//   console.log(calculateDiscount(product)); // Expected: 900
function calculateDiscount(product: DiscountedProduct): number {
    return product.price - product.price*product.discount/100
}
const product: DiscountedProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
}
console.log(calculateDiscount(product))


// Generics

// 1. Create a generic function wrapInArray that takes a value of any type and returns 
// it as an array of that type.
function wrapInArray<T> (value: T): T[] {
    return [value]
}
console.log(wrapInArray('5'))
console.log(wrapInArray(5))

// 2. Create a generic function getLastElement that takes an array of elements 
// of type T, and returns the last element (of type T).
    // function getLastElement<T>(arr: T[]): T {
    //   your code here
    // }
    // console.log(getLastElement([1, 2, 3, 4])); // 4
    // console.log(getLastElement(['a', 'b', 'c'])); // 'c'
function getLastElement<T> (array: T[]): T | undefined {
    return array[array.length-1] 
}
console.log(getLastElement([1, 2, 3, 4]))
console.log(getLastElement([]))


// 3. Create a generic interface IPair that accepts two types T and U and contains fields first: T and second: U.
//    Implement a function that takes an IPair and returns a string describing the pair.
interface IPair<T, U> {
    first: T,
    second: U
}
function describePair<T, U> (pair: IPair<T, U>): string {
    return `${pair.first} and ${pair.second}`
}
console.log(describePair( { first: 'Alice', second: 30 }))

// Write a function that implements the array map method (you cannot use the built-in map, 
// you must write a custom one).
// The function takes an array and a callback as input. Use generic types.
// You need to type both the function itself and the callback.
// Create an implementation of the map function that takes an array of numbers 1-5 and returns a new array,
// where each element is the original array element multiplied by its index.
// Example:
// map([1,2,3,4,5], callback) => [0,2,6,12,20]
function multiply(a: number, b : number): number {
    return a*b
}
function multipliedByIndex<T> (arr: T[], callBack: any): T[] {
    let newArr: T[] = []
    for( let i = 0; i < arr.length; i++) {
        newArr.push(callBack(arr[i], i))
    }
    return newArr
}
console.log(multipliedByIndex([1,2,3,4,5], multiply))

//////////////////////////////// Utility types
// we make changes only to the base type we created
type UserIt = {
    id: number,
    name: string,
    age: number,
    address?: {
        street: string,
        city: string
    }
}

// we want to pass everything exect for id
function createUser (user: Omit<UserIt, 'id'>) {
    //
}
// here i want to update a property but i am not sure yet which one so i use partial utility type
// now all the keya are optional
function updateUser (user: Partial<UserIt>) {
    user.id = 20
    console.log(user.id)
}
// pass only particular properties based on base UserIt type
function renderUserDetails (user: Pick<UserIt, 'name' | 'age'>) {
    console.log(user.name, user.age)
}

// here we want to make sure that address is required
// so all the properties from the UserIt will be required here
function createUserWithAddress(user: Required<UserIt>) {
}

//now we want all the propertied of the user to be readonly
// but it does not do deep level nesting!!!!
// so street and city wont be readonly
type T = Readonly<UserIt>
function readonlyUser(user: T) {}

renderUserDetails({name: 'Kaly', age: 55})
updateUser({id: 15})

// with Record we can create object that have specific key and specofic values
// here we created a new type where all the keys are strings
// all the keys are strings and return values are UserIt objejcts
// we can have generic string here
type K = Record<string, UserIt>
const userK: K = {
    key1 : {
        id:5,
        name: 'Lala',
        age: 44,
        address: {
            street: 'dwa',
            city: 'ds'
        }   
    }
}
// or union
type U = Record<'admin' | 'user', UserIt>
const userU: K = {
    admin : {
        id:5,
        name: 'Lala',
        age: 44,
        address: {
            street: 'dwa',
            city: 'ds'
        }   
    }
}

// or we can use Property key meaning anything that is a valid key inside JS
type P = Record<PropertyKey, { id: 5, card: 'master'}>

// extract 
type Role = 'admin' | 'user' | 'moderator'
// i want now type H to have only 'admin' and 'user'
type H = Extract<Role, 'admin' | 'user'>

type OtherRole = 'testing' | 'user' | 'admin' | 'security'

//  to get intersections of two types 
type I = Extract<Role, OtherRole>
// to exclude
type E = Exclude<Role, 'user'>
type M = Exclude<Role, 'user' | 'moderator'>
// remove repeated and leave unique types in Role
type L = Exclude<Role, OtherRole>