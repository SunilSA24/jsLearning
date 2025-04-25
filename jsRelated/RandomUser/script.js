'use strict';
// Create a random user generator using the "https://randomuser.me/api/" API. 
document.querySelector('#fetchUserBtn').addEventListener('click', function() {
    fetchRandomUser();
});

async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (response.ok) {
            const data = await response.json();
            const user = data.results[0];
            console.log(user);

            document.getElementById('userName').innerText = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`;
            document.getElementById('userEmail').innerText = `Email: ${user.email}`;
            document.getElementById('userCountry').innerText = `Country: ${user.location.country}`;
        }

    } catch (error) {
        console.error(error);
    }
}