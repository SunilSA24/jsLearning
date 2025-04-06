'use strict';

function orderDrink(drink) {
    return new Promise((resolve, reject) => {
        if (drink === 'coffee') {
            resolve('Here is your coffee!');
        } else if (drink === 'tea') {
            resolve('Here is your tea!');
        } else {
            reject('Sorry, we only serve coffee and tea.');
        }
    })
}

function orderPreparing() {
    return new Promise(resolve => {
        resolve('Your order is being prepared!');
    });
}

function orderReady() {
    return new Promise(resolve => {
        resolve('Your order is ready!');
    });
}

function billGeneration() {
    return new Promise(resolve => {
        resolve('Your bill is generated!');
    });
}

async function orderDrinkAsync(drink) {
    try {
        let order = await orderDrink(drink);
        console.log(order);
        let preparing = await orderPreparing();
        console.log(preparing);
        let ready = await orderReady();
        console.log(ready);
        let bill = await billGeneration();
        console.log(bill);
    } catch (error) {
        console.error(error);
    }
}

orderDrinkAsync('coffee');