let msg = new SpeechSynthesisUtterance();
const speakBtn = document.querySelector('#speak');
const voicesDropdown = document.querySelector("#voices");
let voices = [];

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

function speak() {
    msg.text = document.querySelector('[name="text"]').value;
    window.speechSynthesis.speak(msg);
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    speak();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
speakBtn.addEventListener('click', speak);
voicesDropdown.addEventListener('change', setVoice);