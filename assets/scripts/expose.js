// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('main img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  volumeSlider.addEventListener('input', function() {
    const volumeValue = parseInt(volumeSlider.value);
    audioElement.volume = volumeValue / 100;

    if (volumeValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });
  hornSelect.addEventListener('change', function() {
    const hornValue = hornSelect.value;
    hornImage.src = `assets/images/${hornValue}.svg`;
    hornImage.alt = `${hornValue} image`;
    audioElement.src = `assets/audio/${hornValue}.mp3`;
  });

  playButton.addEventListener('click', function() {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}