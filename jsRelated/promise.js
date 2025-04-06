'use strict';

import { promises as fsPromises } from 'fs';


let redFile = fsPromises.readFile('f1.txt');

redFile.then((data) => {
    console.log(data.toString());
}).catch((err) => {
    console.log(err);
});

function Pizza(toppings, size, crust) {
    this.toppings = toppings;
    this.size = size
    this.crust = crust
    this.discribe = function() {
        console.log(`${this.size} size  of the pizza with ${this.toppings} on a ${this.crust} crust`);
    };
}
let pizza1 = new Pizza('pepperoni', 'large', 'thin');

class Pizza2 {
    constructor(toppings, size, crust) {
        this.toppings = toppings;
        this.size = size;
        this.crust = crust;
    }
    discribe() {
        console.log(`${this.size} size  of the pizza with ${this.toppings} on a ${this.crust} crust`);
    }
}
let pizza2 = new Pizza2('pepperoni', 'large', 'thin');