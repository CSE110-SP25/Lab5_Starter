// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  // Volume slider change
  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    audio.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // select horn type
  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    hornImage.src = `assets/images/${selected}.svg`;
    hornImage.alt = selected.replace('-', ' ') + ' image';
    audio.src = `assets/audio/${selected}.mp3`;
  });

  // play button
  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });


}