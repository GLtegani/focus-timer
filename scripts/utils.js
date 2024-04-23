// IMPORTS
import { TimeData } from "./time.js";
import { ControlsData } from "./controls.js";

// FUNCTIONS

const TimerFunctions = {

   timeoutId: '',
   initialMin: '',
   initialSec: '',

   resetDefaultValue: () => {

      TimeData.minutes.value = '00';
      TimeData.seconds.value = '00';
   },

   showErrorMsg: () => {

      TimeData.errorAlert.style.transform = `translateY(0)`;
      TimerFunctions.resetDefaultValue();
   },

   timerLogic: (minute, second) => {

      TimerFunctions.timeoutId = setTimeout(function() {

         if(TimeData.seconds.value <= 0) {

            TimeData.seconds.value = 60;
   
            TimeData.minutes.value = String(TimeData.minutes.value - 1).padStart(2, '0');
         };
         
         TimeData.seconds.value = String(TimeData.seconds.value - 1).padStart(2, '0');
         
         if(TimeData.minutes.value < 0) {

            TimeData.minutes.value = String(minute).padStart(2, '0');
            TimeData.seconds.value = String(second).padStart(2, '0');
            ControlsData.playBtn.classList.remove('hide');
            ControlsData.setBtn.classList.remove('hide');
            ControlsData.pauseBtn.classList.add('hide');
            ControlsData.stopBtn.classList.add('hide');
            return;
         };
         
         TimerFunctions.timerLogic(minute, second);
      }, 10);
   },

   runCutdown: () => {

      TimerFunctions.initialMin = TimeData.minutes.value = String(TimeData.minutes.value).padStart(2, '0');
      TimerFunctions.initialSec =  TimeData.seconds.value = String(TimeData.seconds.value).padStart(2, '0');

      TimeData.errorAlert.style.transform = `translateY(-100%)`;
      ControlsData.playBtn.classList.add('hide');
      ControlsData.setBtn.classList.add('hide');
      ControlsData.pauseBtn.classList.remove('hide');
      ControlsData.stopBtn.classList.remove('hide');

      TimerFunctions.timerLogic(TimeData.minutes.value, TimeData.seconds.value);
   },

   pauseTimer: (timer) => {
      clearTimeout(timer);
   },

   stopTimer: (initialMin, initialSec, timer) => {
      TimeData.minutes.value = initialMin;
      TimeData.seconds.value = initialSec;
      clearTimeout(timer);
   },

};

// EXPORTS
export { TimerFunctions };