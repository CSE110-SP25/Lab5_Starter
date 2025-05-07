// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const textArea = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("button");
  const faceImage = document.querySelector("img");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    while (voiceSelect.firstChild) {
      voiceSelect.removeChild(voiceSelect.firstChild);
    }

    const defaultOption = document.createElement("option");
    defaultOption.value = "select";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = 'Select Voice';
    voiceSelect.appendChild(defaultOption);

    voices.forEach(voice => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("data-name", voice.name);
      option.setAttribute("data-lang", voice.lang);
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();

  if(typeof synth.onvoiceschanged !== "undefined") {
    synth.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", () => {
    const text = textArea.value;
    const selectedOption = voiceSelect.selectedOptions[0];
    if (!text || !selectedOption || selectedOption.disabled) return;

    const textSpeak = new SpeechSynthesisUtterance(text);
    const selectedVoiceName = selectedOption.getAttribute("data-name");
    textSpeak.voice = voices.find(voice => voice.name === selectedVoiceName);

    textSpeak.onstart = () => {
      faceImage.src = "assets/images/smiling-open.png";
    };

    textSpeak.onend = () => {
      faceImage.src = "assets/images/smiling.png";
    };

    synth.speak(textSpeak);
  });
}
