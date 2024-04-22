// IMPORTS
import { TimeData } from "./time.js";
import { TimerFunctions } from "./utils.js";

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
   
   const nullMinutesValue = TimeData.minutes.value == 0;
   const emptyMinutesValue = TimeData.minutes.value == '';
   const nullSecondsValue = TimeData.seconds.value == 0;
   const emptySecondsValue = TimeData.seconds.value == '';
   const minutesOrSecondsAreNegative = Math.sign(TimeData.minutes.value) == -1 || Math.sign(TimeData.seconds.value) == -1;
   const inputsNotANumber = isNaN(TimeData.minutes.value) || isNaN(TimeData.seconds.value);

   if(nullMinutesValue && nullSecondsValue || nullMinutesValue && emptySecondsValue || emptyMinutesValue && nullSecondsValue) {

      TimerFunctions.showErrorMsg();

   } else if(emptyMinutesValue && emptySecondsValue || inputsNotANumber || minutesOrSecondsAreNegative){

      TimerFunctions.showErrorMsg();

   } else if(TimeData.seconds.value > 60) {

      TimeData.seconds.value = 60;
      
      TimerFunctions.runCutdown();

   } else {

      TimerFunctions.runCutdown();

   };
   
};

const setTime = (event) => {
   event.preventDefault();

   TimerFunctions.resetDefaultValue();
   
};

const pauseCounter = (event) => {
   event.preventDefault();

   ControlsData.playBtn.classList.remove('hide');
   ControlsData.pauseBtn.classList.add('hide');

   TimerFunctions.pauseTimer(TimerFunctions.timeoutId);
};

const stopCounter = (event) => {
   event.preventDefault();

   ControlsData.playBtn.classList.remove('hide');
   ControlsData.setBtn.classList.remove('hide');
   ControlsData.pauseBtn.classList.add('hide');
   ControlsData.stopBtn.classList.add('hide');

   TimerFunctions.resetDefaultValue();
};

// EVENTS
ControlsData.playBtn.addEventListener('click', startCounter);
ControlsData.setBtn.addEventListener('click', setTime);
ControlsData.pauseBtn.addEventListener('click', pauseCounter);
ControlsData.stopBtn.addEventListener('click', stopCounter);

// EXPORTS
export { startCounter, setTime, ControlsData };