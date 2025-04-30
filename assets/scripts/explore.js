window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = [];

  const voiceSelection = document.getElementById('voice-select');
  const image = document.querySelector('header + img');
  const button = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');

  // Populate voice list
  function populateVoiceList() {
    voices = synth.getVoices();

    voiceSelection.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select Voice';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    voiceSelection.appendChild(defaultOption);

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-name', voice.name);
      option.setAttribute('data-lang', voice.lang);
      voiceSelection.appendChild(option);
    });
  }

  // Ensure voices are loaded
  if (typeof synth.onvoiceschanged !== 'undefined') {
    synth.onvoiceschanged = populateVoiceList;
  }
  populateVoiceList();

  // On button click, speak
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const text = textArea.value.trim();
    if (!text) return;

    const utterThis = new SpeechSynthesisUtterance(text);

    // Setup image change events FIRST
    utterThis.onstart = () => {
      image.src = 'assets/images/smiling-open.png';
    };
    utterThis.onend = () => {
      image.src = 'assets/images/smiling.png';
    };

    // Assign voice AFTER setting events
    const selectedName = voiceSelection.selectedOptions[0].getAttribute('data-name');
    const voice = voices.find(v => v.name === selectedName);
    if (voice) {
      utterThis.voice = voice;
    }

    synth.cancel(); // Stop any existing speech
    synth.speak(utterThis);
  });
}