// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const face = document.querySelector('img');
  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    // Clear dropdown
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      option.setAttribute("value", i); // important: set value to index
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    const selectedIndex = voiceSelect.value;
    const text = textArea.value;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    utterance.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      face.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}
