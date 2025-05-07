// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImg = document.querySelector('#expose img');
  const hornSound = document.querySelector('audio');
  const volumeSlideBar = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img')
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti;

  hornSelect.addEventListener('change', function(){
    const selectedHorn = hornSelect.value;
    if (selectedHorn === 'air-horn') {
      hornImg.src = 'assets/images/air-horn.svg';
      hornSound.src = 'assets/audio/air-horn.mp3';
    } 

    else if (selectedHorn === 'car-horn') {
      hornImg.src = 'assets/images/car-horn.svg';
      hornSound.src = 'assets/audio/car-horn.mp3';
    } 
    
    else if (selectedHorn === 'party-horn') {
      hornImg.src = 'assets/images/party-horn.svg';
      hornSound.src = 'assets/audio/party-horn.mp3';
    }
  });

  volumeSlideBar.addEventListener('input',function(){
    const volume = volumeSlideBar.value;
    hornSound.volume = volume/100;

    if(volume==0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if(volume<33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if(volume<67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click',function(){
    hornSound.play();
    if(hornSelect.value === 'party-horn')
    {
      jsConfetti.addConfetti();
    }
  });
}