// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const face = document.querySelector('img');
  const voiceOptions = document.getElementById('voice-select');
  const tts = document.getElementById('text-to-speak');
  const button = document.querySelector('button');

  const synthesis = window.speechSynthesis;
  let voices = [];

  //adding voices
  function addVoice(){
    voices = synthesis.getVoices();
    while(voiceOptions.options.length > 1){
      voiceOptions.remove(1);
    }
    voices.forEach(voice => {
      const choice = document.createElement('option');
      choice.textContent = `${voice.name} (${voice.lang})`;
      choice.setAttribute('data-name', voice.name);
      voiceOptions.appendChild(choice);
    });
  }

  //loading voice
  addVoice();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addVoice;
  }
  // adding speeech
  button.addEventListener('click', function(){
    //fixing issue wear mouth moves when nothing is spoken
    if(tts.value.trim() === ''){
      return;
    }
    const speech = new SpeechSynthesisUtterance(tts.value);
    const select = voiceOptions.selectedOptions[0].getAttribute('data-name');
    
    const voiceChoice = voices.find(voice => voice.name === select);
    // choosing voice
    if(voiceChoice){
      speech.voice = voiceChoice;
    }
    //while talking
    speech.onstart = function(){
      face.src = 'assets/images/smiling-open.png';
    };
    //done talking
    speech.onend = function(){
      face.src = 'assets/images/smiling.png';
    };
    synthesis.speak(speech);
  });
}