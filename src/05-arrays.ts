/* eslint-disable */

const emptyCarMakers: string[] = [];

const carMakers = ["ford", "toyota", "bmw"];

const dates = [new Date(), new Date()];

const emptyCarsByMake: string[][] = [];
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// help with inference when extracting valus
const car = carMakers[0];
const mmyCars = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// help with map
carMakers.map((car) => {
  car.toUpperCase();
});

// flexible types
// const importantDates = [new Date(), '2030-10-10']
const importantDates: (string | Date)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());

//33
