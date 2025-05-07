// expose.js

window.addEventListener('DOMContentLoaded', init);


const jSConfetti = new JSConfetti();

 
function init() {
  // TODO

  // add event listener to select option
  const currOption = document.getElementById('horn-select');
  currOption.addEventListener('change', function() {
    //console.log(currOption.value)
    changePicture(currOption.value)
    changeAudio(currOption.value)

  });
  //console.log(currOption)
  //console.log('johnny silverhand')

  // add event listener to volume input (slider)
  const volumeElement = document.getElementById('volume');
  volumeElement.addEventListener('change', function() {
    changeVolume(volumeElement);
  });


  // add event listener to button
  const allButton = document.querySelectorAll('button');
  const playButton = allButton[0];
  //console.log(playButton);
  playButton.addEventListener('click', function() {
    playAudio();
  })

}

function changePicture(picture) {
  const imageElement = document.querySelector('img');
  let  imageSrc = 'assets/images/';
  //console.log(imageElement)
  if (picture == 'car-horn') {
    imageSrc += 'car-horn.svg';
  }
  else if (picture == 'air-horn') {
    imageSrc += 'air-horn.svg';
  }
  else { // party-horn
    imageSrc += 'party-horn.svg';
    //console.log(imageSrc)
  }

  imageElement.src = imageSrc;
}

function changeAudio(audio) {
  const audioElement = document.querySelector('audio');
  let  audioSrc = 'assets/audio/';
  
  if (audio == 'car-horn') {
    audioSrc += 'car-horn.mp3';
  }
  else if (audio == 'air-horn') {
    audioSrc += 'air-horn.mp3';
  }
  else { // party-horn
    audioSrc += 'party-horn.mp3';
    
  }

  audioElement.src = audioSrc;
  //console.log(audioElement)
}

function changeVolume(volumeElement) {
  const currVolume = volumeElement.value;

  //change volume audio element 
  const audioElement = document.querySelector('audio');
  audioElement.volume = currVolume / 100;
  // console.log(audioElement.volume);

  //change volume (picture)
  const volumeImg = document.querySelectorAll('img')[1];
  let volumeSrc = 'assets/icons/volume';

  if (currVolume < 33) {
    volumeSrc += '-level-1.svg';
  }
  else if (currVolume < 67) {
    volumeSrc += '-level-2.svg';
  }
  else {
    volumeSrc += '-level-3.svg';
  }

  volumeImg.src = volumeSrc;
}

function playAudio() {
  const audioElement = document.querySelector('audio');
  audioElement.play();

  //confetti only if its party-horn
  const selectElement = document.getElementById('horn-select');
  //console.log(selectElement.value)
  
  if (selectElement.value == 'party-horn') {
  
    jSConfetti.addConfetti();
  }
}