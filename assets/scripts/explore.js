// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {
    voices = speechSynthesis.getVoices();

    // 기존 옵션 초기화
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name; // voice name을 value로 저장
      voiceSelect.appendChild(option);
    });
  }

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedVoiceName = voiceSelect.value;

    utterance.voice = voices.find(voice => voice.name === selectedVoiceName);

    // 얼굴을 웃는 얼굴에서 말하는 얼굴로 변경
    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterance);
  });

  speechSynthesis.addEventListener('voiceschanged', populateVoiceList);
  populateVoiceList(); // 바로 한 번 시도
}
