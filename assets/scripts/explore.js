// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const button = document.querySelector('button');
  const textToSpeak = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const faceImage = document.getElementById('face');

  button.addEventListener('click', () => {
    const text = textToSpeak.value.trim();
    const voiceIndex = voiceSelect.value;

    if (!text || voiceIndex === 'select') {
      alert("Please enter text and choose a voice.");
      return;
    }
    speakText(text, voiceIndex, faceImage);
    faceImage.src = 'assets/images/smiling-open.png';
    speechSynthesis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
  });
  loadVoices(voiceSelect);
}

function loadVoices(voiceSelect) {
  let voices = speechSynthesis.getVoices();
  voices = voices.sort((a, b) => a.name.localeCompare(b.name));
  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });

  speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; 
    loadVoices(voiceSelect);
  };
}

function speakText(text, voiceIndex, faceImage) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();

  utterance.voice = voices[voiceIndex];
  speechSynthesis.speak(utterance);
}