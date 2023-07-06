document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementsByTagName('button')[0]; // Select the first button element
    var buttonOptions = [
      "Click for some Magic",
      "Abracadabra!",
      "Chanting Survey Spell",
      "Survey Sorcery at Work",
      "Click for Survey Wizardry",
      "Cast Your Answers",
      "Survey Presto-Chango",
      "Conjure up the Perfect Responses",
    ];
  
    function getRandomButton() {
      var randomIndex = Math.floor(Math.random() * buttonOptions.length);
      return buttonOptions[randomIndex];
    }
  
    startButton.textContent = getRandomButton();
    startButton.addEventListener('click', startSurvey); // Add a click event listener
  });
  
  function startSurvey() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["surveyAutomation.js"],
      });
    });
  }
  