// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //DOM element references
  /* even though const type we can still use or modify the element 
  it points to */
  const hornSelect = document.getElementById('horn-select');
  //select the first <img> element inside the #expose element in .css
  const hornImage = document.querySelector('#expose img');
  //finds the first audio tag in expose.html
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const confetti = new JSConfetti();
 
  //horn
  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    hornImage.src = `assets/images/${selected}.svg`;
    hornImage.alt = `${selected} image`;
    hornAudio.src = `assets/audio/${selected}.mp3`;
  });

}