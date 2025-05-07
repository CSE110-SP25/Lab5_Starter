window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const imageElement = document.querySelector('#expose img');
  const volumeIcon = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti();
  
  // Event listeners
  hornSelect.addEventListener('change', handleHornChange);
  volumeSlider.addEventListener('input', handleVolumeChange);
  playButton.addEventListener('click', playSound);
  
  //functions for horn change, volume change, and play sound
  function handleHornChange() {
    const selectedHorn = hornSelect.value;
    if (selectedHorn === 'select') return;
    imageElement.src = `assets/images/${selectedHorn}.svg`;
    imageElement.alt = `${selectedHorn.replace('-', ' ')} image`;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  }
  
  function handleVolumeChange() {
    const volumeValue = volumeSlider.value;
    audioElement.volume = volumeValue / 100;
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue <= 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue <= 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  }
  
  function playSound() {
    if (hornSelect.value === 'select') {
      alert('Please select a horn first');
      return;
    }
    audioElement.play();
      if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  }
}