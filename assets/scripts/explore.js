// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let textarea = document.getElementById("text-to-speak");
  let selectVoice = document.getElementById("voice-select");
  let button = document.querySelector("button");
  let smiley = document.querySelector('#explore img');

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    // clear all the options to be safe
    selectVoice.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      let option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})${voice.default ? " [Default]" : ""}`;
      selectVoice.appendChild(option);
    });
  }

  // Load voices 
  speechSynthesis.onvoiceschanged = loadVoices;

  button.addEventListener("click", () => {
    let text = textarea.value.trim();
    let selectedIndex = selectVoice.value;

    // handle the null case 
    if (!text || selectedIndex === "select") {
      return;
    }

    smiley.src = 'assets/images/smiling-open.png';

    let tts = new SpeechSynthesisUtterance(text);
    tts.voice = voices[selectedIndex];
    speechSynthesis.speak(tts);

    tts.onend = function() {
      smiley.src = 'assets/images/smiling.png';
    };
  });

  // keep loading the voices
  loadVoices();
}