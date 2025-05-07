// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get references to DOM elements
  let imgSelector = document.getElementById("horn-select");
  let hornImg = document.querySelector("#expose img");
  let hornAudio = document.querySelector("audio.hidden");
  let playButton = document.querySelector("button");
  let volumeSlider = document.getElementById("volume");
  let volumeImg = document.querySelector("#volume-controls img");
  let jsconfetti = new JSConfetti();

  // Handle horn selection changes
  imgSelector.addEventListener('change', function () {
    switch (this.value) {
      case "air-horn":
        hornImg.src = "assets/images/air-horn.svg";
        hornAudio.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        hornImg.src = "assets/images/car-horn.svg";
        hornAudio.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        hornImg.src = "assets/images/party-horn.svg";
        hornAudio.src = "assets/audio/party-horn.mp3";
        break;
      default:
        hornImg.src = "assets/images/no-image.png";
        hornAudio.src = "";
    }
  });

  // Handle volume slider changes
  volumeSlider.addEventListener('input', function () {
    let volume = volumeSlider.value;
    hornAudio.volume = volume / 100;

    if (volume == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  });

  // Handle play button click
  playButton.addEventListener('click', function () {
    hornAudio.play();
    if (imgSelector.value === "party-horn") {
      jsconfetti.addConfetti();
    }
  });
}
