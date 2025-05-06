// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  // 🐥 Update image + sound when dropdown changes
  hornSelect.addEventListener('change', () => {
    const value = hornSelect.value;
    image.src = `assets/images/${value}.svg`;
    audio.src = `assets/audio/${value}.mp3`;
  });

  // 🔉 Update volume and icon when slider changes
  volumeSlider.addEventListener('input', () => {
    const val = volumeSlider.value;
    audio.volume = val / 100;

    if (val == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (val < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (val < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // ▶️ Play sound on button click
  playButton.addEventListener('click', () => {
    audio.play();
  });
}
