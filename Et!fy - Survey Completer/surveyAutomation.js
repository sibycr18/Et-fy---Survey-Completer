// Select the first option for each question
function selectFirstOption() {
    var questionElements = document.querySelectorAll('ul.survey li .answer'); // Select the answer elements within the survey list items
  
    questionElements.forEach(function (answerElement) {
      var firstOption = answerElement.querySelector('input[type="radio"]'); // Select the first option within each answer element
  
      if (firstOption) {
        firstOption.checked = true; // Select the first option
      }
    });
}

// Submit the answers
function submitAnswers() {
    var submitButton = document.querySelector('button[type="submit"][name="yt0"]'); // Select the submit button with type attribute "submit" and name attribute "yt0"
  
    if (submitButton && submitButton.textContent === " Submit Answers") {
        var clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          submitButton.dispatchEvent(clickEvent);
    }

    // Set a delay of 3 seconds (adjust the time interval as needed)
    setTimeout(function() {
        // Navigate back to the previous page
        window.history.back();
    }, 3500);
    // Set a delay of 3 seconds (adjust the time interval as needed)
    setTimeout(function() {
        // Reload the page
        location.reload();
    }, 2500);
  

  }
  
  // Start the survey automation process
  var intervalId = setInterval(function () {
    selectFirstOption();
    submitAnswers();
  }, 10);
  