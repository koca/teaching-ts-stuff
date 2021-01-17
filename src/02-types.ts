/* eslint-disable */

let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objs
let now: Date = new Date();

// Arrays
let colors: string[] = ["red", "green", "black"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object Literals

let point: { x: number; y: number } = {
  x: 5,
  y: 20
};

// Functions

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations

// 1) function that returns the 'any' type
const json = `{"x":4, "y": 10}`;
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean; // let foundWord;

words.forEach((word) => {
  if (word === "green") foundWord = true;
});

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

numbers.forEach((number) => {
  if (number > 0) {
    numberAboveZero = number;
  }
});
