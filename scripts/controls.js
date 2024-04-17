// IMPORTS
import { TimeData } from "./time.js";

// DATA
const ControlsData = {
   playBtn: document.querySelector('.play'),
   setBtn: document.querySelector('.set'),
   pauseBtn: document.querySelector('.pause'),
   stopBtn: document.querySelector('.stop'),
};

// FUNCTIONS
const startCounter = (event) => {
   event.preventDefault();

   ControlsData.playBtn.classList.add('hide');
   ControlsData.setBtn.classList.add('hide');
   ControlsData.pauseBtn.classList.remove('hide');
   ControlsData.stopBtn.classList.remove('hide');

};

const setTime = (event) => {
   event.preventDefault();

   TimeData.minutes.value = '00';
   TimeData.seconds.value = '00';
   
};

const pauseCounter = (event) => {
   event.preventDefault();

   ControlsData.playBtn.classList.remove('hide');
   ControlsData.pauseBtn.classList.add('hide');

};

const stopCounter = (event) => {
   event.preventDefault();

   ControlsData.playBtn.classList.remove('hide');
   ControlsData.setBtn.classList.remove('hide');
   ControlsData.pauseBtn.classList.add('hide');
   ControlsData.stopBtn.classList.add('hide');


};


// EVENTS
ControlsData.playBtn.addEventListener('click', startCounter);
ControlsData.setBtn.addEventListener('click', setTime);
ControlsData.pauseBtn.addEventListener('click', pauseCounter);
ControlsData.stopBtn.addEventListener('click', stopCounter);

// EXPORTS
export { startCounter, setTime };