// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  /**
   * 
   * Purpose: 
   * sets correct image and audio, based on user's selection
   */
  document.getElementById("horn-select").addEventListener("change", () =>{
    const selectedHorn = document.getElementById("horn-select").value;
    const img = document.querySelector("#expose img");
    const audio = document.querySelector("audio");

    if (selectedHorn === "air-horn"){
      img.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }else if (selectedHorn === "car-horn"){
      img.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }else if (selectedHorn === "party-horn"){
      img.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  
  /**
   * Purpose: 
   * Sets audio volume and picture based on the range the User sets their cursor.
   * Settings:
   *    - Zero      --> mute icon and level 0
   *    - 1 to < 33 --> level one image and volume
   *    - 33 to < 67 --> level two image and volume
   *    - 67 and up  --> level three image and volume 
   */
   
  document.getElementById("volume-controls").addEventListener("input",() =>{
    const icon = document.querySelector("#volume-controls img");
    const audio = document.querySelector("audio");
    const value = parseInt((document.getElementById("volume")).value);
    audio.volume = value / 100;

    if (value === 0){ //level 0
      icon.src = "assets/icons/volume-level-0.svg";
      alt="Volume level 0";
    }else if (value < 33){ //level 1 
      icon.src = "assets/icons/volume-level-1.svg";
      alt="Volume level 1";
    }else if (value < 67){ //level 2
      icon.src = "assets/icons/volume-level-2.svg";
      alt="Volume level 2";
    }else{ //level 3
      icon.src = "assets/icons/volume-level-3.svg";
      alt="Volume level 3";
    }
  });

  /**
   * Purpose:
   * plays sound and handles if party horn was selected (confetti)
   */
  const playButton = document.querySelector("button");
  const specificHorn = document.querySelector("audio");

  const canvas = document.getElementById("custom_canvas");
  const jsConfetti = new JSConfetti({canvas});

  playButton.addEventListener("click", () =>{
    specificHorn.play();

    //handle confetti
    const selectedHorn = document.getElementById("horn-select").value;
    if (selectedHorn === "party-horn"){
      jsConfetti.addConfetti();
    }
  });
}