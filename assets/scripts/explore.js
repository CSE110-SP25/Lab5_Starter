// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoiceName = voiceSelect.value;

    // Find the selected voice object
    const selectedVoice = voices.find((voice) => voice.name === selectedVoiceName);
    if (selectedVoice) {
      utterThis.voice = selectedVoice;
    }

    // Open mouth image while speaking
    faceImage.src = 'assets/images/smiling-open.png';

    // Restore smiling image when done
    utterThis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
  });
}
