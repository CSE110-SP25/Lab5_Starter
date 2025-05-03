// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const imageElement = document.querySelector('img');

  // SpeechSynthesis API
  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    // Bring all the voices from the library
      voices = synth.getVoices();

      // Update to the initial state
      voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

      voices.forEach((voice) => {
          const option = document.createElement('option');
          option.textContent = `${voice.name} (${voice.lang})`;
          option.setAttribute('data-name', voice.name);
          option.setAttribute('data-lang', voice.lang);
          voiceSelect.appendChild(option);
      });
  }

  populateVoiceList();

  // Some browsers load voices asynchronously
  if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener('click', () => {
      // utterThis is for the user text input.
      const utterThis = new SpeechSynthesisUtterance(textInput.value);
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

      for (let i = 0; i < voices.length; i++) {
          if (voices[i].name === selectedOption) {
              utterThis.voice = voices[i];
              break;
          }
      }

      // when start speaking then smiling mouth-open face
      utterThis.onstart = () => {
          imageElement.src = 'assets/images/smiling-open.png';
      };

      // when end speaking then back to smiling face
      utterThis.onend = () => {
          imageElement.src = 'assets/images/smiling.png';
      };

      // speak utterThis
      synth.speak(utterThis);
  });
}