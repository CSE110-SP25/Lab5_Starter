// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    
    voiceSelect.innerHTML = '';
    
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select Voice:';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    voiceSelect.appendChild(defaultOption);

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  // Initially populate voices (some browsers need this)
  populateVoiceList();
  
  // Some browsers fire this event when voices are loaded
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
    // Find the selected voice
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterance.voice = voice;
        break;
      }
    }

    // Change to open mouth image when speaking starts
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    // Change back to closed mouth when speaking ends
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    // Speak the text
    synth.speak(utterance);
    
    // If synthesizer was paused from previous speech
    if (synth.paused) {
      synth.resume();
    }
  });
}
