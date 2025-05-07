// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //TODO
  const hornSel   = document.getElementById('horn-select');                 
  const hornImage    = document.querySelector('img[alt="No image selected"]'); 
  const playB   = document.querySelector('#expose button'); 
  const volSlider = document.getElementById('volume');                      
  const volumeIcon   = document.querySelector('#volume-controls img');         
             
  const hornAud    = document.querySelector('#expose audio');     
  
  const horns = {
    'air-horn'  : { img: 'assets/images/air-horn.svg',   audio: 'assets/audio/air-horn.mp3'  },
    'car-horn'  : { img: 'assets/images/car-horn.svg',   audio: 'assets/audio/car-horn.mp3'  },
    'party-horn': { img: 'assets/images/party-horn.svg', audio: 'assets/audio/party-horn.mp3'}
  };

  hornSel.addEventListener('change', () => {
    const ch = hornSel.value;       
    hornImage.src = horns[ch].img;
    hornAud.src = horns[ch].audio;
  });

  volSlider.addEventListener('input', () => {
    const val = Number(volSlider.value);   
    hornAud.volume = val / 100;             

    
    let level = '3';                          
    if (val === 0)       level = '0';
    else if (val < 33)   level = '1';
    else if (val < 67)   level = '2';

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  const jsconf = new JSConfetti()

  playB.addEventListener('click', () => {
    hornAud.play();
    if (hornSelect.value === 'party-horn') {
      jsconf.addConfetti({
        emojis: ['🥳','🎉','🎊'],
        emojiSize: 37,
        confettiNumber: 70
      });
    }
  });



}