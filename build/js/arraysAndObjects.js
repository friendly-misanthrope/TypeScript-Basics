"use strict";
// Arrays
let stringArr = ['one', 'hey', 'Nick'];
let guitars = ["strat", "les paul", 5150];
let mixedData = ['EVH', 1984, true];
//! Nope
// stringArr[3] = 42
// stringArr.push(69)
// Tuple - fixed length, specific data types for each location in array
let myTuple = ["Nick", 42, false];
let mixed = ["John", 1, true];
// legal
mixed = myTuple;
// illegal
//! myTuple = mixed
// Objects
// legal, because an array is an object in JS
let myObj;
myObj = [];
let exampleObj = {
    prop1: "Nick",
    prop2: true
};
// Creating an instance of custom type
let eddieVh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jimmyP = {
    name: "Jimmy",
    active: true,
    albums: ['I', 'II', 'IV']
};
// This is valid because they both have the same 3 properties and data types for each property.
eddieVh = jimmyP;
// Optional properties
//! line 39 - Question mark after property denotes that it can either be boolean or undefined (optional)
const greetGuitarist = (guitarist) => {
    if (guitarist) {
        return `Hello ${guitarist.name}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jimmyP));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
