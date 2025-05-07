// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornSound = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const jsConfetti = new JSConfetti();
  
    // Change image and sound when horn is selected
  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    hornImage.src = `assets/images/${selected}.svg`;
    hornSound.src = `assets/audio/${selected}.mp3`;
  });

  // Update volume and volume icon
  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    hornSound.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Play sound and trigger confetti for party horn
  playButton.addEventListener('click', () => {
    hornSound.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
