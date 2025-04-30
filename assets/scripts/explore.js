// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const voiceImage = document.querySelector('#explore img');
  const textToSpeak = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');

  let voices = [];

  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();

  speakButton.addEventListener('click', () => {
    const selectedVoiceName = voiceSelect.value;
    const voice = voices.find(v => v.name === selectedVoiceName);

    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    utterance.voice = voice;

    utterance.onstart = () => {
      voiceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      voiceImage.src = 'assets/images/smiling.png';
    };

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  });
}