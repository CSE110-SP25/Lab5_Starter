// expose.js

window.addEventListener('DOMContentLoaded', init);

function init(){
const hornSelect = document.getElementById('horn-select');
const hornImg = document.querySelector('img');
const hornSound = document.querySelector('audio');
const volumeCtrls = document.getElementById('volume');
const volumeImg = document.querySelector('#volume-controls img');

const playButton = document.querySelector('button');
const jsConfetti = new JSConfetti();

hornSelect.addEventListener('change', () => {
    	const selected = hornSelect.value;
    	hornImg.src = `assets/images/${selected}.svg`;
    	hornSound.src = `assets/audio/${selected}.mp3`;
});

volumeCtrls.addEventListener('input', () => {
	const volume = parseInt(volumeCtrls.value);
    	hornSound.volume = volume/100;

    	if (volume === 0) {
		volumeImg.src = 'assets/icons/volume-level-0.svg';
    	} 
	else if (volume < 33) {
		volumeImg.src = 'assets/icons/volume-level-1.svg';
	} 
	else if (volume < 67) {
      		volumeImg.src = 'assets/icons/volume-level-2.svg';
    	} 
	else {
      		volumeImg.src = 'assets/icons/volume-level-3.svg';
    	}
});

playButton.addEventListener('click', () => {
	hornSound.play();
    	if (hornSelect.value === 'party-horn') {
      		jsConfetti.addConfetti();
    	}
});

}

