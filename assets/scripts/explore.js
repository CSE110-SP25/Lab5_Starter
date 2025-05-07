// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImg = document.querySelector('#explore img'); 

  let voices = [];


  function populateVoiceList()
  {
    voices = speechSynthesis.getVoices();
    for(let i = 0; i < voices.length ; i++)
      {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
    
        if(voices[i].default)
        {
          option.textContent += "- Default"
        }
    
        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if(speechSynthesis.onvoiceschanged !== undefined)
  {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener('click',function(){
    if(synth.speaking)
    {
      console.error('Already speaking...');
      return;
    }
    const utterThis = new SpeechSynthesisUtterance(textInput.value);

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for(let i = 0; i < voices.length; i++)
    {
      if(voices[i].name === selectedOption)
      {
        utterThis.voice = voices[i];
        break;
      }
    }

    utterThis.onstart = function()
    {
      faceImg.src = 'assets/images/smiling-open.png';

    };

    utterThis.onend = function(){
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
  })
}
