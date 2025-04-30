// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  const jsConfetti = new JSConfetti()

  const volumeControls = document.getElementById('volume-controls');
  const volumeSlider = volumeControls.querySelector('input[type="range"]');
  const volumeIcon = volumeControls.querySelector('img');

  const playSoundButton = document.querySelector('button');
  const soundSelect = document.getElementById('horn-select');
  const soundIcon = document.querySelector('header + img');
  const audio = document.querySelector('audio');

  volumeSlider.addEventListener('input',(event) => {
    const volume = event.target.value;
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    }
    else if (volume <= 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume <= 66) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
    audio.volume = volume / 100;
  });
  soundSelect.addEventListener('click', () => {
    const val = soundSelect.value;
    if (val == 'select') return;
    else if (val == 'air-horn'){
      soundIcon.src = 'assets/images/air-horn.svg';
      soundIcon.alt = 'air horn';
      audio.src = 'assets/audio/air-horn.mp3';
    }
    else if (val == 'car-horn'){
      soundIcon.src = 'assets/images/car-horn.svg';
      soundIcon.alt = 'car horn';
      audio.src = 'assets/audio/car-horn.mp3';
    }
    else if (val == 'party-horn'){
      soundIcon.src = 'assets/images/party-horn.svg';
      soundIcon.alt = 'party horn';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  playSoundButton.addEventListener('click', () => {
    audio.play();
    if (soundSelect.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}