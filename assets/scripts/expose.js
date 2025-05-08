// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // expose.js

  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const imageElement = document.querySelector('#expose img');

  // Handle horn selection
  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    imageElement.src = `assets/images/${selectedHorn}.svg`;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

  // Handle volume changes
  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    let level = 0;

    if (volume >= 67) {
      level = 3;
    } else if (volume >= 33) {
      level = 2;
    } else if (volume >= 1) {
      level = 1;
    }

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    audioElement.volume = volume / 100;
  });

  // Handle play button click
  playButton.addEventListener('click', () => {
    if (hornSelect.value !== 'select') {
      audioElement.play();
      
      if (hornSelect.value === 'party-horn') {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }
    }
  });

}