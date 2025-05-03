// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // getElementbyId: return single object 
  // querySelector: flexibility for returning object
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const imageElement = document.querySelector('img');
  const jsConfetti = new JSConfetti();


  // Selecting horn
  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    if(selectedHorn === 'air-horn'){
      imageElement.src = 'assets/images/air-horn.svg';
      audioElement.src = 'assets/audio/air-horn.mp3';
    }
    else if (selectedHorn === 'car-horn') {
      imageElement.src = 'assets/images/car-horn.svg';
      audioElement.src = 'assets/audio/car-horn.mp3';
    }  
    else if (selectedHorn === 'party-horn') {
      imageElement.src = 'assets/images/party-horn.svg';
      audioElement.src = 'assets/audio/party-horn.mp3';
  }
});

  // Volume slider 
  volumeSlider.addEventListener('input', () => {
    const volumeValue = Number(volumeSlider.value);

    if (volumeValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } 
    else if (volumeValue < 33) {
        volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } 
    else if (volumeValue < 67) {
        volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } 
    else {
        volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

    audioElement.volume = volumeValue / 100;
  })

  // Play
  playButton.addEventListener('click', () => {
    audioElement.play();

    if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
    }
  });


}