// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.getElementById("horn-select");
  const imgspace = document.querySelector("#expose > img");
  const play = document.querySelector("button");
  const sound = document.querySelector("audio");
  const slider = document.getElementById("volume");
  const soundicon = document.querySelector("#volume-controls img");

  const jsConfetti = new JSConfetti();

  select.addEventListener("change", (event) => {
    imgspace.src = `assets/images/${event.target.value}.svg`;
    imgspace.alt = `image of ${event.target.value}`;
    sound.src = `assets/audio/${event.target.value}.mp3`;
  });

  slider.addEventListener("input", (event) => {
    if(event.target.value == 0){
      soundicon.src = 'assets/icons/volume-level-0.svg';
    }else if(event.target.value < 33){
      soundicon.src = 'assets/icons/volume-level-1.svg';
    }else if(event.target.value < 67){
      soundicon.src = 'assets/icons/volume-level-2.svg';
    }else{
      soundicon.src = 'assets/icons/volume-level-3.svg';
    }
    sound.volume = event.target.value /100;
  });

  play.addEventListener("click", () => {
    if (sound.src){
      sound.play();
    }
    if (select.value === 'party-horn') {
      jsConfetti.addConfetti({
        emojis: ['🎉', '🥳', '🎈', '✨', '💫'],
        confettiRadius: 10,
      });
    }
  });
}