// IMPORTS
import { TimeData } from "./time.js";
import { resetDefaultValue } from "./utils.js";

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

   const nullMinutesValue = TimeData.minutes.value == '00';
   const emptyMinutesValue = TimeData.minutes.value == '';
   const nullSecondsValue = TimeData.seconds.value == '00';
   const emptySecondsValue = TimeData.seconds.value == '';
   const showErrorBox = TimeData.errorAlert.style.transform = `translateY(0)`;

   if(nullMinutesValue && nullSecondsValue) {

      showErrorBox;
      resetDefaultValue();
   } else if(nullMinutesValue && emptySecondsValue){

      showErrorBox;
      resetDefaultValue();
   } else if(emptyMinutesValue && nullSecondsValue) {

      showErrorBox;
      resetDefaultValue();
   } else {

      TimeData.errorAlert.style.transform = `translateY(-100%)`
      ControlsData.playBtn.classList.add('hide');
      ControlsData.setBtn.classList.add('hide');
      ControlsData.pauseBtn.classList.remove('hide');
      ControlsData.stopBtn.classList.remove('hide');
   };
};

const setTime = (event) => {
   event.preventDefault();

   resetDefaultValue();
   
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