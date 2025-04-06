'use strict';

function fetchCatFatct() {
    fetch('https://catfact.ninja/fact')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
        }).catch(error => {
            console.error('Error fetching cat fact:', error);
        });

}

fetchCatFatct();