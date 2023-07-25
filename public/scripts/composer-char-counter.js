$(document).ready(function () {
  const MAX_CHARACTER_LIMIT = 140; // Maximum character limit for the tweet

  // Get references to necessary DOM elements
  const tweetText = $("#tweet-text");
  const counter = $(".counter");

  // Function to update the character count and display it
  function updateCharacterCount() {
    const remainingChars = MAX_CHARACTER_LIMIT - tweetText.val().length;

    // Prevent the character count from going below zero
    const displayCount = Math.max(0, remainingChars);
    counter.text(remainingChars);
    counter.text(displayCount);
    // Add or remove a class for the counter text color based on the remaining characters
    if (remainingChars < 0) {
      counter.addClass("exceeded-limit");
      // Disable the textarea when the character limit is exceeded
      tweetText.prop("disabled", true);
    } else {
      counter.removeClass("exceeded-limit");
      // Enable the textarea when the character limit is not exceeded
      tweetText.prop("disabled", false);
    }
  }

  // Event listener for the tweet text area input
  tweetText.on("input", updateCharacterCount);

  // Initial update of the character count on page load
  updateCharacterCount();
});
