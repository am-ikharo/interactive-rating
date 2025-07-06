const selectedRating = sessionStorage.getItem("ratingValue");

// Get the element where you want to display the rating
const displayRatingElement = document.querySelector(".rating-value");

if (displayRatingElement && selectedRating) {
  displayRatingElement.textContent = selectedRating;
} else {
  // Handle cases where the rating might not be found (e.g., direct access to thanks.html)
  if (displayRatingElement) {
    displayRatingElement.textContent = "N/A"; // Or a default message
  }
  console.warn(
    "Rating value not found in sessionStorage or display element not found."
  );
}
