// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
const synth = window.speechSynthesis;
const voiceSelect = document.getElementById('voice-select');
const talkButton = document.querySelector('button');
const textSpeak = document.getElementById('text-to-speak');
const smileImg = document.querySelector('img');
let voiceList = [];

function populateVoices() {
	voiceList = synth.getVoices();
    	voiceSelect.innerHTML = '';
    	voiceList.forEach((voice, index) => {
	      	const option = document.createElement('option');
      		option.textContent = `${voice.name} (${voice.lang})`;
      		option.value = index; 
      		voiceSelect.appendChild(option);
    	});
}

populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
	speechSynthesis.onvoiceschanged = populateVoices;
}

talkButton.addEventListener('click', () => {
    	const text = textSpeak.value;
    	const utterance = new SpeechSynthesisUtterance(text);
    	const selectedIndex = parseInt(voiceSelect.value);
    	if (!isNaN(selectedIndex)) {
      		utterance.voice = voiceList[selectedIndex];
    	}
	smileImg.src = 'assets/images/smiling-open.png';

    	utterance.onend = () => { 
      		smileImg.src = 'assets/images/smiling.png';
    	};

    	synth.speak(utterance);
});

}




