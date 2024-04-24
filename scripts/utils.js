// IMPORTS
import { TimeData } from "./time.js";
import { ControlsData, initialInputsData } from "./controls.js";

// DATA
let initialTime = [];

// FUNCTIONS

const TimerFunctions = {

   timeoutId: '',

   resetDefaultValue: () => {

      TimeData.minutes.value = '00';
      TimeData.seconds.value = '00';
   },

   showErrorMsg: () => {

      TimeData.errorAlert.style.transform = `translateY(0)`;
      TimerFunctions.resetDefaultValue();
   },

   timerLogic: () => {
      
      TimerFunctions.timeoutId = setTimeout(function() {
         
         if(TimeData.seconds.value <= 0) {
            
            TimeData.seconds.value = 60;
            
            TimeData.minutes.value = String(TimeData.minutes.value - 1).padStart(2, '0');
         };
         
         TimeData.seconds.value = String(TimeData.seconds.value - 1).padStart(2, '0');
         
         if(TimeData.minutes.value < 0) {
            TimeData.minutes.value = initialTime[0];
            TimeData.seconds.value = initialTime[1];
            initialTime = [];
            initialInputsData.splice(0);
            ControlsData.playBtn.classList.remove('hide');
            ControlsData.setBtn.classList.remove('hide');
            ControlsData.pauseBtn.classList.add('hide');
            ControlsData.stopBtn.classList.add('hide');
            return;
         };
         
         TimerFunctions.timerLogic();
      }, 10);
   },

   runCutdown: (initialMin, initialSec) => {

      if(initialTime.length < 1) {
         initialTime.push(initialMin, initialSec);
      };

      TimeData.errorAlert.style.transform = `translateY(-100%)`;
      ControlsData.playBtn.classList.add('hide');
      ControlsData.setBtn.classList.add('hide');
      ControlsData.pauseBtn.classList.remove('hide');
      ControlsData.stopBtn.classList.remove('hide');
      TimerFunctions.timerLogic();
   },

   pauseTimer: (timer) => {
      clearTimeout(timer);
   },

   stopTimer: (initialMin, initialSec, timer) => {
      TimeData.minutes.value = initialMin;
      TimeData.seconds.value = initialSec;
      initialTime = [];
      clearTimeout(timer);
   },

};

// EXPORTS
export { TimerFunctions };