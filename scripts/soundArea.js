// DATA
const SoundData = {
   soundOn: document.querySelector('.sound-on'),
   soundOff: document.querySelector('.sound-off'),
   shoutSound: new Audio('../sounds/aaaaaaaa-online-audio-converter_r9waVUO.mp3'),
   clashRoyaleSound: new Audio('../sounds/clash-royale-hog-rider.mp3'),
   knocKnockSound: new Audio('../sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3'),
   dunDunDunSound: new Audio('../sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3'),
   fartSound: new Audio('../sounds/fart-meme-sound.mp3'),
   hornSound: new Audio('../sounds/goofy-ahh-car-horn-sound-effect.mp3'),
   laughterSound: new Audio('../sounds/rehehehe.mp3'),
   memeMusicSound: new Audio('../sounds/y2mate_DO1kVeR.mp3'),
};

const Sounds = [
   
   // MEME SOUNDS
   [
      {
         sound: SoundData.shoutSound,
      },
   
      {
         sound: SoundData.clashRoyaleSound,
      },
   
      {
         sound: SoundData.knocKnockSound,
      },
   
      {
         sound: SoundData.dunDunDunSound,
      },
   
      {
         sound: SoundData.fartSound,
      },
   
      {
         sound: SoundData.hornSound,
      },
   
      {
         sound: SoundData.laughterSound,
      },
   
      {
         sound: SoundData.memeMusicSound,
      },
   ],

];

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
export { turnOffAudio, turnOnAudio, Sounds };