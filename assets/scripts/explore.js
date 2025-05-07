// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  function populateVoices() {
    voiceSelect.innerHTML = '';
    const voices = synth.getVoices();
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = i;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const voices = synth.getVoices();
    utterance.voice = voices[voiceSelect.value];
    faceImage.src = 'assets/images/smiling-open.png';
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
    synth.speak(utterance);
  });
}
