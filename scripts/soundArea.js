// DATA
const SoundData = {
   soundOn: document.querySelector('.sound-on'),
   soundOff: document.querySelector('.sound-off'),
};

// FUNCTIONS
const turnOffAudio = (event) => {
   event.preventDefault();

   SoundData.soundOn.classList.add('hide');
   SoundData.soundOff.classList.remove('hide');
};

const turnOnAudio = (event) => {
   event.preventDefault();

   SoundData.soundOn.classList.remove('hide');
   SoundData.soundOff.classList.add('hide');
};



// EVENTS
SoundData.soundOn.addEventListener('click', turnOffAudio);
SoundData.soundOff.addEventListener('click', turnOnAudio);

// EXPORTS
export { turnOffAudio, turnOnAudio };