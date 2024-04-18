// IMPORTS
import { TimeData } from "./time.js";

// FUNCTIONS
const resetDefaultValue = () => {
   TimeData.minutes.value = '00';
   TimeData.seconds.value = '00';
};


const runTimer = () => {

   setTimeout(function() {
      
      if(TimeData.seconds.value <= 0) {
         TimeData.seconds.value = 60;
      };
      
      TimeData.seconds.value = String(TimeData.seconds.value).padStart(2, '0');
      TimeData.seconds.value--;
      runTimer();
   }, 1000);
};

// EXPORTS
export { resetDefaultValue, runTimer};