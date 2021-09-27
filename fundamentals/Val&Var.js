//! Dynamic Typing
let firstName = 'Jonas' // String
let age = 23 // Number
let PI = 3.1415
let fullAge = true // Boolean
let children // Undefined
let childOne = null
let childTwo = undefined

console.log(typeof firstName)

//! let, const & var
//? var -> Scope = Global & in Function
//? let -> Can not be re-declared

//! Template Literals
console.log(`${firstName} /-> ${age}
NewLine O.o `)

//! Type Conversion (manual) & Coercion (hidden)
const inputYear = '1991'
console.log(inputYear + 18)

// Convert to int Conversion
console.log(Number(inputYear) + 18)
// Convert to int Coercion
console.log(inputYear * 1 + 18)

console.log(Number('test')) // NaN (is still typeof Number..)
console.log(String(23))

let n = '1' + 1 // -> n = 11
n = n - 1 // -> n = 10

//! Falsy  Values: 0, '', undefined, null, NaN
//! Truthy Values: {},

//! Equality Operators == & ===, != & !==
//? == -> Coercion and then compare
//? === -> no Coercion and strict compare

//! Ternary Operator
const age = 23
const drink = age >= 18 ? 'beer' : 'water'
