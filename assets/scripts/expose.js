// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById('horn-select');
    const imageDisplay = document.querySelector('#expose img');
    const volumeSlider = document.getElementById('volume');
    const volumeIcon = document.querySelector('#volume-controls img');
    const playButton = document.querySelector('#expose button');
    const audioElement = document.querySelector('#expose audio');

    const jsConfetti = new JSConfetti();

  
    hornSelect.addEventListener('change', function() {
        const selectedHorn = this.value;
        
        // Update image and audio source
        switch(selectedHorn) {
            case 'air-horn':
                imageDisplay.src = './assets/images/air-horn.svg';
                audioElement.src = './assets/audio/air-horn.mp3';
                break;
            case 'car-horn':
                imageDisplay.src = './assets/images/car-horn.svg';
                audioElement.src = './assets/audio/car-horn.mp3';
                break;
            case 'party-horn':
                imageDisplay.src = './assets/images/party-horn.svg';
                audioElement.src = './assets/audio/party-horn.mp3';
                break;
            default:
                imageDisplay.src = './assets/images/no-image.png';
                audioElement.src = '';
        }
        
        audioElement.volume = volumeSlider.value / 100;
    });
    volumeSlider.addEventListener('input', function() {
        const volume = parseInt(this.value);
        
        // Update volume icon in real-time
        if (volume === 0) {
            volumeIcon.src = './assets/icons/volume-level-0.svg';
        } else if (volume < 33) {
            volumeIcon.src = './assets/icons/volume-level-1.svg';
        } else if (volume < 67) {
            volumeIcon.src = './assets/icons/volume-level-2.svg';
        } else {
            volumeIcon.src = './assets/icons/volume-level-3.svg';
        }
        
        // ACTUALLY set the audio volume (converted from 0-100 to 0-1)
        audioElement.volume = volume / 100;
        
    });
    playButton.addEventListener('click', function() {
        if (audioElement.src) {

            audioElement.volume = volumeSlider.value / 100;
            audioElement.play();
            
            if (hornSelect.value === 'party-horn') {
                jsConfetti.addConfetti();
            }
        }
    });

    audioElement.volume = volumeSlider.value / 100;
}

window.addEventListener('DOMContentLoaded', init);

