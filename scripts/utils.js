// IMPORTS
import { TimeData } from "./time.js";
import { ControlsData } from "./controls.js";

// FUNCTIONS
const resetDefaultValue = () => {
   TimeData.minutes.value = '00';
   TimeData.seconds.value = '00';
};

const runTimer = (minute, second) => {

   setTimeout(function() {
      
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

      runTimer(minute, second);

   }, 1000);
   
};

// EXPORTS
export { resetDefaultValue, runTimer};