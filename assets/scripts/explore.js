// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  function populateVoiceList() {

      const options = voiceSelect.querySelectorAll('option:not([value="select"])');
      options.forEach(option => option.remove());
      
      voices = synth.getVoices();
      voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);

        if(voice.default){
          option.textContent += ' - DEFAULT';

        }
        voiceSelect.appendChild(option);
        

      });
    }
    populateVoiceList();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = populateVoiceList;
    }
    speakButton.addEventListener('click', () =>{
      synth.cancel();

      if(textArea.value.trim() === ''){
        alert('Please enter text to speak');
        return;
      }

      if(voiceSelect.selectedIndex <= 0){
        alert('Please select a voice');
        return;
      }
      const utterance = new SpeechSynthesisUtterance(textArea.value);
      

      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      const selectedVoice = voices.find(voice => voice.name === selectedOption);


      if(selectedVoice) {
        utterance.voice = selectedVoice;
      }
      utterance.onstart = () => {
        faceImage.src = 'assets/images/smiling-open.png';
        faceImage.alt = 'Talking face';
      };
      utterance.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
        faceImage.alt = 'Smiling face';
      };

      synth.speak(utterance);

    });


}