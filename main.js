const getRating = document.querySelectorAll('.rating');
const getSelectedRatingValue = document.querySelector('.selected-rating-value');
const getSubmit = document.querySelector('.submit');

let currentTotalSelectedRating = -1;

getRating.forEach((currentItem, index) => {
    currentItem.dataset.rating = index +1;
    currentItem.addEventListener('click', handleOnClick)
    currentItem.addEventListener('mouseleave', handleMouseLeave)
    
})

function handleUpdatedRatingState(getCurrentRatingValue){
    for(let i=0; i<5; i++) {
        if(i < getCurrentRatingValue){
            getRating[i].classList.replace('rating', 'rated');
        }else{
            getRating[i].classList.replace('rated', 'rating');
        }
    }
}



function handleOnClick(event){
    const currentRatingValue = event.target.dataset.rating;
    currentTotalSelectedRating = currentRatingValue;
    handleUpdatedRatingState(currentTotalSelectedRating)
    getSelectedRatingValue.textContent = currentTotalSelectedRating

}

function handleMouseLeave(event){
    handleUpdatedRatingState(currentTotalSelectedRating)
   
}

getSubmit.addEventListener('click', (event) => {
    const ratingValue = currentTotalSelectedRating;
    sessionStorage.setItem('ratingValue', ratingValue); // This line sends the data
    window.location.href = 'thanks.html'; // This line navigates to the next page
});

