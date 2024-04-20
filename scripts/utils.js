// IMPORTS
import { TimeData } from "./time.js";
import { ControlsData } from "./controls.js";

// FUNCTIONS
const resetDefaultValue = () => {
   TimeData.minutes.value = '00';
   TimeData.seconds.value = '00';
};

const errorMsg = () => {
   
   TimeData.errorAlert.style.transform = `translateY(0)`;
   resetDefaultValue();
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

const runCutdown = () => {

   TimeData.minutes.value = String(TimeData.minutes.value).padStart(2, '0');
   TimeData.seconds.value = String(TimeData.seconds.value).padStart(2, '0');

   TimeData.errorAlert.style.transform = `translateY(-100%)`;
   ControlsData.playBtn.classList.add('hide');
   ControlsData.setBtn.classList.add('hide');
   ControlsData.pauseBtn.classList.remove('hide');
   ControlsData.stopBtn.classList.remove('hide');

   runTimer(TimeData.minutes.value, TimeData.seconds.value);
};

// EXPORTS
export { resetDefaultValue, runTimer, errorMsg, runCutdown};