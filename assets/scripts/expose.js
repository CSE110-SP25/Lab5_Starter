// expose.js



function init() {
  const hornSelect    = document.getElementById('horn-select');
  const hornImage     = document.querySelector('#expose img');
  const audio         = document.querySelector('#expose audio');
  const volumeSlider  = document.getElementById('volume');
  const volumeIcon    = document.querySelector('#volume-controls img');
  const playButton    = document.querySelector('#expose button');
  const jsConfetti    = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const choice = hornSelect.value;  // "air-horn" | "car-horn" | "party-horn"
    hornImage.src  = `assets/images/${choice}.svg`;
    audio.src      = `assets/audio/${choice}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const vol = parseInt(volumeSlider.value, 10); // 0–100
    audio.volume = vol / 100;                     // set 0.0–1.0
  
    let level;
    if (vol === 0)           level = 0;
    else if (vol <= 10)      level = 1;
    else if (vol <= 20)      level = 2;
    else if (vol <= 30)      level = 3;
    else if (vol <= 40)      level = 4;
    else if (vol <= 50)      level = 5;
    else if (vol <= 60)      level = 6;
    else if (vol <= 70)      level = 7;
    else if (vol <= 80)      level = 8;
    else if (vol <= 90)      level = 9;
    else /* vol > 90 */      level = 10;
  
    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

}
window.addEventListener('DOMContentLoaded', init);