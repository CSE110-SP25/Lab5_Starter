// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');

  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices();

    // Only populate if not already done
    if (voiceSelect.options.length > 1) return;

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // First call, then wait for voices to load
  populateVoices();
  if (typeof speechSynthesis !== 'undefined') {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoiceName = voiceSelect.value;

    utterance.voice = voices.find((v) => v.name === selectedVoiceName);
    speechSynthesis.speak(utterance);
  });
}
