// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornType = document.getElementById('horn-select');
  const hornImg = document.querySelector('img');
  const volumeSlider = document.getElementById('volume');
  const volumeImg = document.querySelector('#volume-controls img');
  const play = document.querySelector('button');
  const audio = document.querySelector('audio');
  const confetti = new JSConfetti();

  hornType.addEventListener('change', function(){
    const select = hornType.value;
    if(select === 'air-horn'){
      hornImg.src = 'assets/images/air-horn.svg'
      hornImg.alt = 'Air Horn'
      audio.src = 'assets/audio/air-horn.mp3';
    }
    else if(select === 'party-horn'){
      hornImg.src = 'assets/images/party-horn.svg'
      hornImg.alt = 'Party Horn'
      audio.src = 'assets/audio/party-horn.mp3';
    }
    else if(select === 'car-horn'){
      hornImg.src = 'assets/images/car-horn.svg'
      hornImg.alt = 'Car Horn'
      audio.src = 'assets/audio/car-horn.mp3';
    }
    // none chosen
    else{
      hornImg.src = 'assets/images/no-image.png'
      hornImg.alt = 'None'
      audio.src = '';
    }
  });

// The volume level
  volumeSlider.addEventListener('input', function(){
    const volume = volumeSlider.value;
    if(volume == 0){
      volumeImg.src = 'assets/icons/volume-level-0.svg'
    }
    else if(volume < 33){
      volumeImg.src = 'assets/icons/volume-level-1.svg'
    }
    else if(volume < 67){
      volumeImg.src = 'assets/icons/volume-level-2.svg'
    }
    else{
      volumeImg.src = 'assets/icons/volume-level-3.svg'
    }
    audio.volume = volume / 100;
  });

  play.addEventListener('click', function() {
    if(audio.src){
      audio.play();
      if (hornType.value === 'party-horn'){
        confetti.addConfetti();
      }
    }
  });
}