let ratingContainer = document.querySelector('#starContainer');
let starList = document.querySelectorAll('.star');
let count = document.getElementById('rating');

let selectedRating = 0;


ratingContainer.addEventListener('mouseover', function(event) {
    const hoveredValue = parseInt(event.target.getAttribute('data-value'));
    starList.forEach((star) => {
        updateStar(star, hoveredValue);
    });
});

ratingContainer.addEventListener('mouseout', function() {
    starList.forEach((star) => {
        updateStar(star, selectedRating);
    });
})



function updateStar(starElement, value) {
    const starValue = parseInt(starElement.getAttribute('data-value'));
    if (starValue <= value) {
        starElement.classList.add('filled');
    } else {
        starElement.classList.remove('filled');
    }

}

starList.forEach(star => {
    star.addEventListener('click', handleStarClick);
});

function handleStarClick(event) {
    selectedRating = parseInt(event.target.getAttribute('data-value'));
    starList.forEach((star) => {
        updateStar(star, selectedRating);
    });
    count.textContent = selectedRating; // Update the displayed rating
    console.log('Rating selected:', selectedRating);
}