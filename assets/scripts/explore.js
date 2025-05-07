// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const face = document.querySelector('#explore img');
  const talk_button = document.querySelector('button');
  const text = document.getElementById('text-to-speak');
  const voice_options = document.getElementById('voice-select');

  let voices = [];

  function load_voices(){
    voices = window.speechSynthesis.getVoices();
    voice_options.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name}(${voice.lang})`;
      voice_options.appendChild(option);
    });
  }

  load_voices();
  window.speechSynthesis.onvoiceschanged = load_voices;

  talk_button.addEventListener('click', () =>{
    const cur_voice_option = voices[voice_options.value];
    const utterance = new SpeechSynthesisUtterance(text.value);
    
    if (!utterance.text || !cur_voice_option) 
      return;

    utterance.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
    };
    
    utterance.onend = () => {
      face.src = 'assets/images/smiling.png';
    };

    utterance.voice = cur_voice_option;
    
    window.speechSynthesis.speak(utterance);
  });
}