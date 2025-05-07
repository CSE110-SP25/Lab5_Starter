// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let selectHorn = document.getElementById('horn-select');
  let playButton = document.querySelector('button');
  let audio = document.querySelector('audio');
  let picture = document.querySelector('#expose img');

  const jsConfetti = new JSConfetti();

  let volumeSlider = document.getElementById('volume');
  let volumeIcon = document.querySelector('#volume-controls img');

  const data = {
    'air-horn': {
      sound: 'assets/audio/air-horn.mp3',
      image: 'assets/images/air-horn.svg'
    },
    'car-horn': {
      sound: 'assets/audio/car-horn.mp3',
      image: 'assets/images/car-horn.svg'
    },
    'party-horn': {
      sound: 'assets/audio/party-horn.mp3',
      image: 'assets/images/party-horn.svg'
    }
  };

  selectHorn.addEventListener('change', () => {
    let selectedHorn = selectHorn.value;
    audio.src = data[selectedHorn].sound;
    picture.src = data[selectedHorn].image;
  });

  playButton.addEventListener('click', () => {
    if (selectHorn.value == 'party-horn'){
      audio.play();
      jsConfetti.addConfetti();
    }
    else {
      audio.play();
    }
  });

  volumeSlider.addEventListener('input', () => {
    let volumeValue = volumeSlider.value;
    audio.volume = volumeValue / 100;

    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } 
    else if (volumeValue >= 1 && volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } 
    else if (volumeValue <= 33 && volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } 
    else if (volumeValue <= 67 && volumeValue <= 100) {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });
}