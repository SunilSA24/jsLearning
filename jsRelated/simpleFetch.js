'use strict';

// function fetchCatFatct() {
//     fetch('https://catfact.ninja/fact')
//         .then(response => {
//             return response.json()
//         })
//         .then(data => {
//             console.log(data);
//         }).catch(error => {
//             console.error('Error fetching cat fact:', error);
//         });

// }

// fetchCatFatct();

function divide(a, b) {
    //write your code here ===============================================
    let result;
    if (a > 0 && b > 0) {
        result = (a / b);
    } else {
        result = "Division by zero is not allowed."
    }


    return result
}



function solution() {
    try {
        const result = divide(0, 2);
        console.log("Result:", result);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

solution();

