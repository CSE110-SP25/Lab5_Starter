// explore.js



function init() {
  const voiceSelect = document.getElementById('voice-select');
  const talkButton  = document.querySelector('#explore button');
  const textInput   = document.getElementById('text-to-speak');
  const faceImage   = document.querySelector('#explore img');

  function populateVoices() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((v, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.text  = `${v.name} (${v.lang})`;
      voiceSelect.appendChild(opt);
    });
  }
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  populateVoices();

  
  talkButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (!text) return;

    const utter = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    const chosen = voices[voiceSelect.value];
    if (chosen) utter.voice = chosen;

   
    faceImage.src = 'assets/images/smiling-open.png';

    utter.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utter);
  });
}

window.addEventListener('DOMContentLoaded', init);