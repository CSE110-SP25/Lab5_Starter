// expose.js
// import JSConfetti from 'js-confetti'

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImg = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const play = document.querySelector('button');
  const volumeImg = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti();

  play.addEventListener('click', ()=>{
    if (hornAudio.src){
      hornAudio.play();
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }

  });
  
  volumeSlider.addEventListener('input', ()=>{
    const volume = parseInt(volumeSlider.value);
    hornAudio.volume = volume / 100;
    if (volume === 0){
      volumeImg.src = 'assets/icons/volume-level-0.svg';
      volumeImg.alt = "volume level 0";
    }
    else if (volume < 33) {
      volumeImg.src = 'assets/icons/volume-level-1.svg';
      volumeImg.alt = "volume level 1";
    }
    else if (volume < 67) {
      volumeImg.src = 'assets/icons/volume-level-2.svg';
      volumeImg.alt = "volume level 2";
    }
    else{
      volumeImg.src = 'assets/icons/volume-level-3.svg';
      volumeImg.alt = "volume level 3";
    }
  })

  

  hornSelect.addEventListener('change', () => {
    const selected_horn = hornSelect.value;
    hornImg.src = `assets/images/${selected_horn}.svg`;
    hornImg.alt = `${selected_horn} image`;
    hornAudio.src = `assets/audio/${selected_horn}.mp3`;
  });
  

}
