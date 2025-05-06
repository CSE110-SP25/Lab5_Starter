// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const textArea = document.getElementById("text-to-speak");
  const button = document.querySelector("button");
  const faceImg = document.querySelector("img");
  let voices=[];
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }

   voices = speechSynthesis.getVoices();
  //voiceSelect = document.getElementById("voice-select");


    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();

  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

// When you click the “Press to Talk” button, the following should happen:
// The text that you have typed into the “Text to speak here” textarea should be spoken out loud using the voice that you have selected
// Only while the synthesizer is speaking, the face should swap to being open mouthed (included in the images folder)

button.addEventListener("click", ()  => {
  //event.preventDefault();
  if (!textArea.value || voiceSelect.selectedIndex < 1) return;

  const utterThis = new SpeechSynthesisUtterance(textArea.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  //const selectedlang = voiceSelect.selectedOptions[0].getAttribute("data-lang");

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  utterThis.onstart = () => {
    faceImg.src = "assets/images/smiling-open.png"; // open mouth
  };

  utterThis.onend = () => {
    faceImg.src = "assets/images/smiling.png"; // closed mouth
  };

  speechSynthesis.speak(utterThis);

});


}