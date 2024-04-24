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

let initialInputsDataForEndTimer = [];
let initialInputsData = [];
const maxInputLength = 1;

// FUNCTIONS
const startTimer = () => {
   
   captureInitialUserInputs(initialInputsData, TimeData.minutes.value, TimeData.seconds.value, maxInputLength);
   captureInitialUserInputs(initialInputsDataForEndTimer, TimeData.minutes.value, TimeData.seconds.value, maxInputLength);
   TimerFunctions.runCutdown(initialInputsDataForEndTimer[0], initialInputsDataForEndTimer[1]);
   initialInputsDataForEndTimer = [];
};

const captureInitialUserInputs = (array, minute, second, maxLenght) => {
   
   if(array.length < maxLenght) {
      array.push(minute, second);
   };
};

const startCounter = (event) => {
   event.preventDefault();

   TimeData.minutes.value = String(TimeData.minutes.value).padStart(2, '0');
   TimeData.seconds.value = String(TimeData.seconds.value).padStart(2, '0');
   const nullMinutesValue = TimeData.minutes.value == 0;
   const emptyMinutesValue = TimeData.minutes.value == '';
   const nullSecondsValue = TimeData.seconds.value == 0;
   const emptySecondsValue = TimeData.seconds.value == '';
   const minutesOrSecondsAreNegative = Math.sign(TimeData.minutes.value) == -1 || Math.sign(TimeData.seconds.value) == -1;
   const inputsNotANumber = isNaN(TimeData.minutes.value) || isNaN(TimeData.seconds.value);
   const reciveAnEmptyAndNumber = /^\s+\d+/;

   if(nullMinutesValue && nullSecondsValue || nullMinutesValue && emptySecondsValue || emptyMinutesValue && nullSecondsValue) {

      TimerFunctions.showErrorMsg();
   } else if(emptyMinutesValue && emptySecondsValue || inputsNotANumber || minutesOrSecondsAreNegative){

      TimerFunctions.showErrorMsg();
   } else if(reciveAnEmptyAndNumber.test(TimeData.minutes.value) || reciveAnEmptyAndNumber.test(TimeData.seconds.value)) {

      TimeData.minutes.value = TimeData.minutes.value.replace(/\s/g, '0');
      TimeData.seconds.value = TimeData.seconds.value.replace(/\s/g, '0');

      startTimer();
   } else if(TimeData.seconds.value > 60) {

      TimeData.seconds.value = 60;
      
      startTimer();
   } else {
      
      startTimer();
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

   TimerFunctions.stopTimer(initialInputsData[0], initialInputsData[1], TimerFunctions.timeoutId);
   initialInputsData = [];
   initialInputsDataForEndTimer = [];
};

// EVENTS
ControlsData.playBtn.addEventListener('click', startCounter);
ControlsData.setBtn.addEventListener('click', setTime);
ControlsData.pauseBtn.addEventListener('click', pauseCounter);
ControlsData.stopBtn.addEventListener('click', stopCounter);

// EXPORTS
export { ControlsData, initialInputsData };