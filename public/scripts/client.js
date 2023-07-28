// Wait for the DOM to be loaded before executing any JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Get references to necessary DOM elements
  const tweetForm = document.getElementById("tweet-form");
  const tweetText = document.getElementById("tweet-text");
  const errorContainer = document.getElementById("error-container");
  const tweetsContainer = document.getElementById("tweets-container");
  const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

  // Function to handle the form submission
  tweetForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Validate the tweet text
    const tweetContent = tweetText.value.trim();
    if (tweetContent === "") {
      showError("Tweet text cannot be empty.");
      return;
    }

    // If the tweet is valid, you can handle it here (e.g., send it to the server)

    // Clear the tweet text area
    tweetText.value = "";

    // Update the character counter to 140
    const counter = document.querySelector(".counter");
    counter.textContent = "140";

    // Clear any previous error messages
    clearError();
  });

  // Function to show an error message
  function showError(message) {
    errorContainer.textContent = message;
    errorContainer.style.display = "block";
  }

  // Function to clear error messages
  function clearError() {
    errorContainer.textContent = "";
    errorContainer.style.display = "none";
  }

  // Function to handle the scroll-to-top button
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // You can add more JavaScript code here for other interactions and functionalities
  
});
