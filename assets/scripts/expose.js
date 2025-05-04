// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');
  volumeSlider.addEventListener('input', function() {
    const volumeValue = parseInt(volumeSlider.value);
    // Update volume icon based on volume range
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
  }) 
}