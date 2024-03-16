"use strict";
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "Hp",
    model: "Spectre x360",
    year: 2016,
    describe: function () {
        console.log(`"This laptop is a ${this.make} ${this.year} ${this.model} `);
    },
};
laptop.describe();
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "HP", model: "Spectre x360", year: 2021 },
];
let laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let laptopPrices1 = [50000, 30000, 8000, 25000];
let laptopPrices2 = [19000, 73000, 67000, 43000];
let combinedPrices = [...laptopPrices1, ...laptopPrices2].sort((a, b) => a - b);
console.log(combinedPrices);
