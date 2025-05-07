// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const images = document.querySelectorAll("img");
  const volumeImage = images[1];
  const hornImage = images[0];
  const button = document.querySelector("button");
  const volumeSlider = document.getElementById('volume');
  const audio = document.querySelector("audio");
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const hornInfo = hornSelect.value;
    hornImage.src = `assets/images/${hornInfo}.svg`;
    audio.src = `assets/audio/${hornInfo}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const volumeValue = Number(volumeSlider.value);
    audio.volume = volumeValue / 100;

    let volumeLevel;
    if (volumeValue === 0) {
      volumeLevel = 0;
    } else if (volumeValue < 33) {
      volumeLevel = 1;
    } else if (volumeValue < 67) {
      volumeLevel = 2;
    } else {
      volumeLevel = 3;
    }

    volumeImage.src = `assets/icons/volume-level-${volumeLevel}.svg`;
  });

button.addEventListener('click', () => {
  audio.play();
  if (hornSelect.value === 'party-horn') {
    jsConfetti.addConfetti();
  }
});
}
