window.addEventListener('DOMContentLoaded', init);

function init() {
  //TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    while (voiceSelect.options.length > 1) {
      voiceSelect.remove(1);
    }
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', () => {
    if (textToSpeak.value !== '') {
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
      const selectedVoice = voices.find(voice => voice.name === selectedOption);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      utterance.onstart = () => {
        faceImage.src = 'assets/images/smiling-open.png';
      };
      utterance.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
      };
      synth.speak(utterance);
    }
  });
}
