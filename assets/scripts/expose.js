// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector("img[alt='No image selected']");
  const hornAudio = document.querySelector("audio");
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  // horn select and img change
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = `${horn} image`;
    hornAudio.src = `assets/audio/${horn}.mp3`;
  });
  
  // volume slider
  volumeSlider.addEventListener('input', () => {
    const vol = volumeSlider.value;
    hornAudio.volume = vol / 100;

    if (vol == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // play sound button
  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
