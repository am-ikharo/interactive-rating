const getRating = document.querySelectorAll('.rating');
const getSelectedRatingValue = document.querySelector('.selected-rating-value');

let currentTotalSelectedRating = -1;

getRating.forEach((currentItem, index) => {
    currentItem.dataset.rating = index +1;
    currentItem.addEventListener('click', (event) => {
        const currentRatingValue = event.target.dataset
        getSelectedRatingValue = currentRatingValue
        
    })
})